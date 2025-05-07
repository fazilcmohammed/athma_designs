from django import forms
from django.contrib.auth.models import User
from .models import ShippingAddress

class UserDetailUpdateForm(forms.ModelForm):
    phone_number = forms.CharField(max_length=15, required=False, label='Phone Number')

    class Meta:
        model = User
        fields = ['first_name', 'last_name', 'email']

    def __init__(self, *args, **kwargs):
        super().__init__(*args, **kwargs)
        if self.instance:  # Make sure instance is not None
            self.fields['email'].initial = self.instance.email


class ShippingAddressForm(forms.ModelForm):
    class Meta:
        model = ShippingAddress
        fields = ['first_name', 'last_name', 'address1', 'address2', 'city', 'state', 'country', 'phone', 'zip_code', 'is_default']