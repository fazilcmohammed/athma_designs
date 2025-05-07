from django.shortcuts import render, get_object_or_404, redirect
from .models import ShippingAddress
from accounts.forms import ShippingAddressForm
from django.contrib import messages
from django.views.generic import TemplateView
from django.contrib.auth.mixins import LoginRequiredMixin
from django.contrib.auth.decorators import login_required
from django.contrib.auth.views import PasswordChangeView
from django.urls import reverse_lazy
from .forms import UserDetailUpdateForm

def address_list(request):
    addresses = ShippingAddress.objects.filter(customer=request.user)

    return render(request, 'account/address.html', {'addresses': addresses})

def add_address(request):
    if request.method == 'POST':
        form = ShippingAddressForm(request.POST)
        if form.is_valid():
            address = form.save(commit=False)
            address.customer = request.user
            address.save()
            return redirect('accounts:address_list')
    else:
        form = ShippingAddressForm()
    return render(request, 'account/address/add_address.html', {'form': form})

def edit_address(request, address_id):
    address = ShippingAddress.objects.get(id=address_id, customer=request.user)
    if request.method == 'POST':
        form = ShippingAddressForm(request.POST, instance=address)
        if form.is_valid():
            form.save()
            return redirect('accounts:address_list')
    else:
        form = ShippingAddressForm(instance=address)
    return render(request, 'account/address/edit_address.html', {'form': form})

def delete_address(request, address_id):
    address = ShippingAddress.objects.get(id=address_id, customer=request.user)
    if request.method == 'POST':
        address.delete()
        return redirect('accounts:address_list')
    return render(request, 'confirm_delete.html', {'address': address})

def set_default_address(request, address_id):
    ShippingAddress.objects.filter(customer=request.user).update(is_default=False)
    address = ShippingAddress.objects.get(id=address_id, customer=request.user)
    address.is_default = True
    address.save()
    return redirect('accounts:address_list')

# def delete_address(request, id):
#     address = get_object_or_404(ShippingAddress, id=id, customer=request.user)
#     address.delete()  # Delete the address
#     return redirect('order:checkout')  # Redirect to the checkout page

# def edit_address(request, id):
#     address = get_object_or_404(ShippingAddress, id=id, customer=request.user)
    
#     if request.method == 'POST':
#         form = ShippingAddressForm(request.POST, instance=address)
#         if form.is_valid():
#             # Save the form but don't commit yet
#             address = form.save(commit=False)
            
#             # Handle default address logic
#             is_default = form.cleaned_data.get('is_default', False)
#             if is_default:
#                 # Remove default status from other addresses
#                 ShippingAddress.objects.filter(
#                     customer=request.user, 
#                     is_default=True
#                 ).exclude(id=address.id).update(is_default=False)
#                 address.is_default = True
#             elif address.is_default:  # If unchecking default on current default
#                 # You might want to prevent this or handle it differently
#                 messages.warning(request, "You must have at least one default address")
#                 return render(request, 'web/edit_address.html', {'form': form})
            
#             address.save()
#             messages.success(request, "Address updated successfully")
#             return redirect('order:checkout')
#     else:
#         form = ShippingAddressForm(instance=address)

#     context = {
#         'form': form,
#         'address': address,
#     }
#     return render(request, 'web/edit_address.html', context)


class UserSettingsView(LoginRequiredMixin, TemplateView):
    template_name = 'account/settings.html'


@login_required
def delete_account(request):
    if request.method == 'POST':
        # User confirmed deletion
        request.user.delete()
        return redirect('accounts:account_deleted_successfully_page')
    
    # If GET request, show a confirmation page
    return render(request, 'registration/confirm_delete.html')


def account_deleted_successfully_page(request):
    return render(request, 'registration/account_deleted_success.html')   


class CustomPasswordChangeView(PasswordChangeView):
    template_name = 'registration/password_change_form.html'  # your template
    success_url = reverse_lazy('accounts:settings')  # redirect after successful password change

    def form_valid(self, form):
        messages.success(self.request, "Your password was successfully updated!")
        return super().form_valid(form)


@login_required
def update_account_details(request):
    if request.method == 'POST':
        form = UserDetailUpdateForm(request.POST, instance=request.user)
        if form.is_valid():
            form.save()
            messages.success(request, 'Your account details have been updated successfully.')
            return redirect('accounts:settings')
    else:
        form = UserDetailUpdateForm(instance=request.user)
    
    return render(request, 'accounts/update_account_details.html', {'form': form})




def paymentSettings(request):
    return render(request, 'account/payments.html')