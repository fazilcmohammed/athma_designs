from django.contrib import messages
from django.contrib.auth.mixins import LoginRequiredMixin
from django.http import JsonResponse
from django.shortcuts import get_object_or_404, redirect, render
from django.views import View
from django.views.generic.list import ListView
from .forms import ShippingAddressForm
from order.models import Order, ServiceFee
import uuid  
from django.views.generic import TemplateView
from accounts.models import ShippingAddress
from products.models import AvailableSize, Product

from .models import CartItem, Wishlist, OrderItem


class CartView(LoginRequiredMixin, View):
    template_name = "web/cart.html"

    def get(self, request, *args, **kwargs):
        user = self.request.user
        cart_items = CartItem.objects.filter(user=user)
        return render(request, self.template_name, {"cart_items": cart_items})


class AddToCartView(LoginRequiredMixin, View):
    def get(self, request, pk, *args, **kwargs):
        user = self.request.user
        product = get_object_or_404(Product, pk=pk)
        quantity = int(request.GET.get("quantity", 1))
        variant_size = request.GET.get("variant")
        if not variant_size:
            size = product.get_sizes().first()
            variant = str(size.weight) + str(size.unit)
            price = size.sale_price

        else:
            size = AvailableSize.objects.get(id=variant_size)
            variant = str(size.weight) + str(size.unit)
            price = size.sale_price

        cart_item, created = CartItem.objects.get_or_create(
            user=user,
            product=product,
            defaults={"quantity": quantity},
            variant=variant,
            price=price,
        )

        if not created:
            cart_item.quantity += quantity
            cart_item.save()

        return redirect("order:cart")


class MinusCartView(View):
   def get(self, request, pk, *args, **kwargs):
        try:
            
            try:
                cart_item = CartItem.objects.get(id=pk)
                if cart_item.quantity > 1:
                    cart_item.quantity -= 1
                    cart_item.save()
                else:
                    cart_item.delete()
                return redirect("order:cart")
                # return JsonResponse({'message': 'Product removed from cart successfully'})
            except CartItem.DoesNotExist:
                pass
                # return JsonResponse({'message': 'Product not found in cart'}, status=404)
        except Product.DoesNotExist:
            pass
            # return JsonResponse({'message': 'Product option does not exist'}, status=404)


class WishlistListView(LoginRequiredMixin, ListView):
    model = Wishlist
    template_name = "web/wishlist.html"
    context_object_name = "wishlist_items"
    paginate_by = 10

    def get_queryset(self):
        return Wishlist.objects.filter(user=self.request.user)


class AddToWishlistView(LoginRequiredMixin, View):
    def get(self, request, *args, **kwargs):
        product_id = self.kwargs.get("product_id")
        user = self.request.user

        self.request.GET.get("variant")
        product = get_object_or_404(Product, id=product_id)

        if not Wishlist.objects.filter(user=user, product=product).exists():
            # Create a new Wishlist object
            Wishlist.objects.create(
                user=user,
                product=product,
                variant=product.get_sizes().first(),
                price=product.get_sale_price(),
            )
        else:
            messages.info(self.request, ("Product is already in the wishlist."))

        return redirect("order:wishlist")


class RemoveFromWishlistView(LoginRequiredMixin, View):
    def get(self, request, *args, **kwargs):
        product_id = self.kwargs.get("product_id")
        user = self.request.user

        wishlist_item = get_object_or_404(Wishlist, user=user, product_id=product_id)
        wishlist_item.delete()

        return redirect("order:wishlist")


class RemoveCartItemView(LoginRequiredMixin, View):
    def get(self, request, cart_item_id, *args, **kwargs):
        user = self.request.user
        cart_item = get_object_or_404(CartItem, id=cart_item_id, user=user)
        cart_item.delete()
        return redirect("order:cart")



class CheckoutView(LoginRequiredMixin, View):
    template_name = "web/shop-checkout.html"

    def get(self, request, *args, **kwargs):
        user = request.user
        cart_items = CartItem.objects.filter(user=user)

        # ✅ If cart is empty, redirect to shop
        if not cart_items.exists():
            messages.error(request, "Your cart is empty.")
            return redirect('web:shop')
    
        # Fetch only the default address
        default_address = ShippingAddress.objects.filter(customer=user, is_default=True).first()

        form = ShippingAddressForm()
        return render(request, self.template_name, {
            "cart_items": cart_items,
            "form": form,
            "default_address": default_address  # Pass the default address only
        })

    def post(self, request, *args, **kwargs):
        user = request.user
        cart_items = CartItem.objects.filter(user=user)

        # ✅ If cart is empty, redirect to shop
        if not cart_items.exists():
            messages.error(request, "Your cart is empty.")
            return redirect('web:shop')

        selected_address_id = request.POST.get('address')
        form = ShippingAddressForm(request.POST)

        if selected_address_id:
            shipping_address = ShippingAddress.objects.get(id=selected_address_id, customer=user)
        elif form.is_valid():
            shipping_address = form.save(commit=False)
            shipping_address.customer = user
            shipping_address.save()
        else:
            addresses = ShippingAddress.objects.filter(customer=user)
            return render(request, self.template_name, {
                "cart_items": cart_items,
                "form": form,
                "addresses": addresses
            })

        # ✅ Create Order
        order = Order.objects.create(
            user=user,
            order_id=str(uuid.uuid4()),
            address=shipping_address,
            status="Pending",
        )

        # ✅ Move cart items ➔ OrderItems
        for cart_item in cart_items:
            print(f"Moving cart item: {cart_item}")  # 🔥 Debug print
            OrderItem.objects.create(
                order=order,
                user=user,
                product=cart_item.product,
                variant=cart_item.variant,
                size="",  # Add size if you store it in cart
                price=cart_item.price,
                quantity=cart_item.quantity,
                ordered=True,
            )

        # ✅ Clear cart
        cart_items.delete()

        messages.success(request, "Order placed successfully!")
        return redirect('web:index')




class OrderView(LoginRequiredMixin, View):
    template_name = "account/orders.html"

    def get(self, request, *args, **kwargs):
        user = self.request.user
        items = CartItem.objects.filter(user=user)
        return render(request, self.template_name, {"order_items": items})


class UpdateCartView(View):
    def post(self, request, pk, *args, **kwargs):
        item = CartItem.objects.get(pk=pk)
        action = request.POST.get('action')

        if action == 'plus':
            item.quantity += 1
        elif action == 'minus' and item.quantity > 1:
            item.quantity -= 1

        item.save()
        return redirect('order:cart')


class ClearCartView(View):
    def get(self, request, *args, **kwargs):
        user = request.user
        CartItem.objects.filter(user=user).delete() 
        return redirect('order:cart') 

    
from django.views.generic import TemplateView
from .models import CartItem, ServiceFee

class CartView(LoginRequiredMixin, TemplateView):
    template_name = 'web/cart.html'

    def get_context_data(self, **kwargs):
        context = super().get_context_data(**kwargs)

        cart_items = CartItem.objects.filter(user=self.request.user)
        subtotal = sum(item.get_total_price() for item in cart_items)

        # Get service fee from DB (fallback to 3.00 if none set)
        service_fee_obj = ServiceFee.objects.first()
        service_fee = float(service_fee_obj.fee) if service_fee_obj else 3.00

        total = subtotal + service_fee

        context['cart_items'] = cart_items
        context['subtotal'] = subtotal
        context['service_fee'] = service_fee
        context['total'] = total

        return context


def paymentdemo(request):
    return render(request, 'web/payment.html')