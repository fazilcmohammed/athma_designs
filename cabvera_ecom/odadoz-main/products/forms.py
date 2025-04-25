from django import forms

from products.models import AvailableSize

from .models import Review


class ReviewForm(forms.ModelForm):
    class Meta:
        model = Review
        fields = [
            "headline",
            "profile",
            "content",
        ]
        widgets = {
            "headline": forms.TextInput(attrs={"class": "form-control"}),
            "content": forms.Textarea(attrs={"class": "form-control", "rows": 3}),
        }

    def __init__(self, *args, **kwargs):
        super().__init__(*args, **kwargs)
        self.fields["profile"].required = False  # Make the profile field not required


class CartForm(forms.Form):
    varient_id = forms.ModelChoiceField(
        queryset=AvailableSize.objects.all(), widget=forms.HiddenInput
    )
    quantity = forms.IntegerField(
        min_value=1, widget=forms.NumberInput(attrs={"class": "form-control"})
    )
