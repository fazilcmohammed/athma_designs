from django import forms
from accounts.models import ShippingAddress

class ShippingAddressForm(forms.ModelForm):
    class Meta:
        model = ShippingAddress
        fields = ['first_name', 'last_name', 'address1', 'address2', 'city', 'zip_code', 'is_default']

    widgets = {
        'first_name': forms.TextInput(attrs={'class': 'form-control', 'placeholder': 'First Name'}),
        'last_name': forms.TextInput(attrs={'class': 'form-control', 'placeholder': 'Last Name'}),
        'address1': forms.TextInput(attrs={'class': 'form-control', 'placeholder': 'Address Line 1'}),
        'address2': forms.TextInput(attrs={'class': 'form-control', 'placeholder': 'Address Line 2'}),
        'city': forms.TextInput(attrs={'class': 'form-control', 'placeholder': 'City'}),
        'zip_code': forms.TextInput(attrs={'class': 'form-control', 'placeholder': 'Zip Code'}),
        'is_default': forms.CheckboxInput(attrs={'class': 'form-check-input'}),
    }

