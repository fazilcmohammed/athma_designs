from django.contrib import admin

from .models import CartItem, Location, Notification, Order, OrderUpdate, Wishlist, ServiceFee, OrderItem, Payment

# Register your models here.


@admin.register(Order)
class OrderAdmin(admin.ModelAdmin):
    list_display = ['order_id', 'user', 'address', 'status', 'timestamp']
    list_filter = ['status', 'timestamp']
    search_fields = ['order_id', 'user__username']


@admin.register(OrderItem)
class OrderItemAdmin(admin.ModelAdmin):
    list_display = ['order', 'product', 'variant', 'price', 'quantity']
    search_fields = ['order__order_id', 'product__name']

@admin.register(CartItem)
class CartItemAdmin(admin.ModelAdmin):
    list_display = ("variant", "quantity")
    search_fields = ("variant__product__title",)


@admin.register(Notification)
class NotificationAdmin(admin.ModelAdmin):
    list_display = ("user", "title", "description")
    search_fields = ("title",)


@admin.register(OrderUpdate)
class OrderUpdateAdmin(admin.ModelAdmin):
    list_display = ("order", "status", "timestamp")
    list_filter = ("status",)
    search_fields = ("status",)


@admin.register(Location)
class LocationAdmin(admin.ModelAdmin):
    list_display = ("name", "delivery_charge")


@admin.register(Wishlist)
class WishlistAdmin(admin.ModelAdmin):
    list_display = ("user", "product")
    search_fields = ("user__username", "product__name")

admin.site.register(ServiceFee)
admin.site.register(Payment)

