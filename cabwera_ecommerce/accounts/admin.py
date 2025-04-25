# Register your models here.
from django.contrib import admin
from .models import ShippingAddress


@admin.register(ShippingAddress)
class ShippingAddressAdmin(admin.ModelAdmin):
    list_display = ['customer', 'first_name', 'last_name', 'address1', 'address2', 'city', 'zip_code', 'is_default']
    list_filter = ['customer', 'is_default']
    search_fields = ['customer__username', 'first_name', 'last_name', 'address1', 'city', 'zip_code']
    ordering = ['customer', 'is_default']

    fieldsets = [
        ('Customer Information', {'fields': ['customer']}),
        ('Address Information', {'fields': ['first_name', 'last_name', 'address1', 'address2', 'city', 'zip_code']}),
        ('Default Address', {'fields': ['is_default']}),
    ]

    readonly_fields = ['customer']

    def has_add_permission(self, request):
        return False