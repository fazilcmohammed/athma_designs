from django.contrib.auth.models import User, AbstractUser
from django.db import models

from main.models import GENDER_CHOICES

# Create your models here.


class Customer(models.Model):
    user = models.OneToOneField(
        User,
        on_delete=models.PROTECT,
        limit_choices_to={"is_active": True},
        related_name="customer",
    )
    first_name = models.CharField(max_length=50, blank=True, null=True)
    last_name = models.CharField(max_length=50, blank=True, null=True)
    gender = models.CharField(
        max_length=10, choices=GENDER_CHOICES, blank=True, null=True
    )
    phone = models.CharField(max_length=15, blank=True, null=True)

    @property
    def fullname(self):
        if self.first_name and self.last_name:
            return f"{self.first_name} {self.last_name}"
        elif self.first_name:
            return self.first_name
        elif self.last_name:
            return self.last_name
        else:
            return self.user


class ShippingAddress(models.Model):
    customer = models.ForeignKey(
        User,
        on_delete=models.CASCADE,
    )
    first_name = models.CharField(max_length=50, blank=True, null=True)
    last_name = models.CharField(max_length=50, blank=True, null=True)
    address1 = models.CharField(max_length=256, blank=True, null=True)
    address2 = models.CharField(max_length=256, blank=True, null=True)
    city = models.CharField(max_length=100, blank=True, null=True)
    state = models.CharField(max_length=100, blank=True, null=True)
    country = models.CharField(max_length=100, blank=True, null=True)
    zip_code = models.CharField(max_length=15, blank=True, null=True)
    phone = models.CharField(max_length=15, blank=True, null=True)
    is_default = models.BooleanField(default=False)

    class Meta:
        verbose_name_plural = "ShippingAddress"

    def __str__(self):
        return str(self.first_name)
    

