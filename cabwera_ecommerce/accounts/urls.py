# accounts/urls.py
from django.urls import path, reverse_lazy
from django.contrib.auth.views import (
    LogoutView, 
    PasswordResetView,
    PasswordResetDoneView,
    PasswordResetConfirmView,
    PasswordResetCompleteView,
)
from .views import delete_address, edit_address
from .views import UserSettingsView, CustomPasswordChangeView, delete_account, account_deleted_successfully_page, paymentSettings
from . import views

app_name = 'accounts'

urlpatterns = [
    path('logout/', LogoutView.as_view(next_page='/accounts/login'), name='logout'),
    path('settings/', UserSettingsView.as_view(), name='settings'),
    path('password/change/', CustomPasswordChangeView.as_view(), name='password_change'),
    path('account/delete/', delete_account, name='delete_account'),
    path('account/deleted/', account_deleted_successfully_page, name='account_deleted_successfully_page'),
    path('account/payment_methods/', paymentSettings, name='payment_methods'),
    path('addresses/', views.address_list, name='address_list'),
    path('addresses/add/', views.add_address, name='add_address'),
    path('addresses/edit/<int:address_id>/', views.edit_address, name='edit_address'),
    path('addresses/delete/<int:address_id>/', views.delete_address, name='delete_address'),
    path('addresses/default/<int:address_id>/', views.set_default_address, name='set_default_address'),

    # ✅ Password reset flow with success_url fixed to use namespace
    path(
        'reset-password/',
        PasswordResetView.as_view(),
        name='password_reset'
    ),
    path('password-reset/done/', PasswordResetDoneView.as_view(), name='password_reset_done'),
    path(
        'password-reset-confirm/<uidb64>/<token>/',
        PasswordResetConfirmView.as_view(),
        name='password-reset-confirm'
    ),
    path('password-reset/complete/', PasswordResetCompleteView.as_view(), name='password_reset_complete'),
]
