from django.contrib import messages
from django.contrib.auth.mixins import LoginRequiredMixin
from django.http import JsonResponse
from django.shortcuts import get_object_or_404, redirect, render
from django.views import View
from django.views.generic.list import ListView
from .forms import ShippingAddressForm
from order.models import Order
import uuid  


from products.models import AvailableSize, Product

from .models import CartItem, Wishlist


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
        user = self.request.user
        cart_items = CartItem.objects.filter(user=user)
        form = ShippingAddressForm()
        return render(request, self.template_name, {"cart_items": cart_items, "form": form})

    def post(self, request, *args, **kwargs):
        user = self.request.user
        cart_items = CartItem.objects.filter(user=user)
        form = ShippingAddressForm(request.POST)

        if form.is_valid():
            # Save the shipping address to the user's profile or order
            shipping_address = form.save(commit=False)
            shipping_address.customer = user
            shipping_address.save()

            # Create an order and associate it with the user and shipping address
            order = Order.objects.create(
                user=user,
                order_id=str(uuid.uuid4()),  # Generate a unique order ID
                address=shipping_address,
                status="Pending",
            )

            # Associate cart items with the order
            for cart_item in cart_items:
                order.product.add(cart_item)

            # Clear the user's cart after creating the order
            cart_items.delete()

            return redirect('web:index')
        else:
            return render(request, self.template_name, {"cart_items": cart_items, "form": form})


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