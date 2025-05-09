from django.contrib.auth.models import User
from django.db import models
from django.utils.translation import gettext_lazy as _
from products.models import Product
from django.utils import timezone
# Create your models here.

class Payment(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    payment_id = models.CharField(max_length=100)
    payment_method = models.CharField(max_length=100)
    amount_paid = models.CharField(max_length=100)
    status = models.CharField(max_length=100)
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.payment_id


class Order(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    # product = models.ManyToManyField("CartItem", verbose_name="Cart items")
    # address = models.ForeignKey("accounts.ShippingAddress", verbose_name="Shipping Address", on_delete=models.SET_NULL, null=True, blank=True)
    address = models.ForeignKey("accounts.ShippingAddress", verbose_name="Shipping Address", on_delete=models.CASCADE)
    order_id = models.CharField(max_length=255)
    order_note = models.CharField(max_length=100, blank=True)
    order_total = models.FloatField(null=True, blank=True)
    tax = models.FloatField(null=True, blank=True)
    is_ordered = models.BooleanField(default=False)
    timestamp = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    status = models.CharField(
        max_length=255,
        default="Pending",
        choices=(
            ("Pending", "Pending"),
            ("Processing", "Processing"),
            ("Delivered", "Delivered"),
            ("Cancelled", "Cancelled"),
        ),
    )
    class Meta:
        verbose_name = _("Order")
        verbose_name_plural = _("Orders")

    # def get_items(self):
    #     return CartItem.objects.filter(order=self)

    def get_updates(self):
        return OrderUpdate.objects.filter(order=self)

    
    def grand_total(self):
        return (self.cart_total())

    def __str__(self):
        return str(self.user)
    
class OrderItem(models.Model):
    order = models.ForeignKey(Order, on_delete=models.CASCADE, related_name="items")
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    product = models.ForeignKey(Product, on_delete=models.CASCADE)
    variant = models.CharField(max_length=100)
    size = models.CharField(max_length=50)
    price = models.PositiveIntegerField()
    quantity = models.PositiveIntegerField(default=1)
    ordered = models.BooleanField(default=True)


    def get_total_price(self):
        return self.quantity * self.price

    def __str__(self):
        return f"{self.product.name} ({self.quantity})"


class CartItem(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    product = models.ForeignKey("products.Product", on_delete=models.CASCADE)
    variant = models.CharField(max_length=100)
    price = models.PositiveIntegerField()
    quantity = models.PositiveIntegerField(default=1)
    is_offer_applied = models.BooleanField(default=False)

    class Meta:
        verbose_name = _("Cart Item")
        verbose_name_plural = _("Cart Items")

    def get_product_name(self):
        return self.product.name

    def get_total_price(self):
        return self.quantity * self.price
    
    def cart_total(self):
        return float(sum(item.get_total_price() for item in self.cart_items.all()))

    def __str__(self):
        return f"{self.product} - {self.quantity}"


class Notification(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    title = models.CharField(max_length=255)
    description = models.CharField(max_length=255)

    class Meta:
        verbose_name = _("Notification")
        verbose_name_plural = _("Notifications")

    def __str__(self):
        return f"{self.title}"


class OrderUpdate(models.Model):
    order = models.ForeignKey(Order, on_delete=models.CASCADE)
    status = models.CharField(
        max_length=255,
        choices=(
            ("", "- Select Status -"),
            ("Pending", "Placed"),
            ("Processing", "Confirmed"),
            ("Shipped", "Shipped"),
            ("Delivered", "Delivered"),
            ("Cancelled", "Cancelled"),
        ),
    )
    timestamp = models.DateTimeField(auto_now_add=True)

    class Meta:
        verbose_name = _("Order Update")
        verbose_name_plural = _("Order Updates")

    def __str__(self):
        return f"{self.order} - {self.status}"


class Location(models.Model):
    name = models.CharField(max_length=100)
    delivery_charge = models.PositiveIntegerField()

    def __str__(self):
        return str(self.name)


class Wishlist(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    product = models.ForeignKey("products.Product", on_delete=models.CASCADE)
    variant = models.CharField(max_length=100)
    price = models.PositiveIntegerField()

    class Meta:
        unique_together = ("user", "product")
        verbose_name = _("Wishlist Item")
        verbose_name_plural = _("Wishlist Items")

    def __str__(self):
        return f"{self.user.username} - {self.product.name}"
    

class ServiceFee(models.Model):
    fee = models.DecimalField(max_digits=6, decimal_places=2, default=3.00)

    def __str__(self):
        return f"Service Fee: ₹{self.fee}"


class Student(models.Model):
    name = models.CharField(max_length=100)
    age = models.CharField(max_length=100)
    school = models.CharField(max_length=100)