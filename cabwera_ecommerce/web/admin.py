from django.contrib import admin
from django.contrib.auth.models import Group

from .models import Contact

# Register your models here.

admin.site.unregister(Group)


@admin.register(Contact)
class ContactAdmin(admin.ModelAdmin):
    list_display = ("full_name", "email", "phone", "place")
    ordering = ("timestamp",)

    search_fields = (
        "first_name",
        "last_name",
    )
