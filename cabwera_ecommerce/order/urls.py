from django.urls import path

from . import views

app_name = "order"

urlpatterns = [
    path("shop/cart/", views.CartView.as_view(), name="cart"),
    path("cart/add/<str:pk>/", views.AddToCartView.as_view(), name="add_to_cart"),
    # urls.py
    path('cart/minus/<int:pk>/', views.MinusCartView.as_view(), name='minus_to_cart'),
    path("cart/remove/<int:cart_item_id>/",views.RemoveCartItemView.as_view(),name="remove_cart_item"),
    path('clear-cart/', views.ClearCartView.as_view(), name='clear_cart'),
    path('shop/update-cart/<int:pk>/', views.UpdateCartView.as_view(), name='update_cart'),
    path("shop/wishlist/", views.WishlistListView.as_view(), name="wishlist"),
    path("shop/wishlist/add/<int:product_id>/",views.AddToWishlistView.as_view(),name="add_to_wishlist"),
    path("shop/wishlist/remove/<int:product_id>/",views.RemoveFromWishlistView.as_view(),name="remove_from_wishlist"),
    path("shop/checkout/", views.CheckoutView.as_view(), name="checkout"),
    path("shop/orders/", views.OrderView.as_view(), name="orders"),
]
