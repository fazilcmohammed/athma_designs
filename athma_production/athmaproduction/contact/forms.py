from django import forms
from .models import Contact

class ContactForm(forms.ModelForm):
    class Meta:
        model = Contact
        fields = ['name', 'email', 'phone', 'subject', 'message']
        widgets = {
            'name': forms.TextInput(attrs={'placeholder': 'Your Name'}),
            'email': forms.EmailInput(attrs={'placeholder': 'Your Email'}),
            'phone': forms.TextInput(attrs={'placeholder': 'Your Phone'}),
            'subject': forms.TextInput(attrs={'placeholder': 'Your Subject'}),
            'message': forms.Textarea(attrs={
                'placeholder': 'Your Message',
                'rows': 10,
                'cols': 30
            }),
        }