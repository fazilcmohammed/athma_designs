from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import ProductViewSet, CategoryViewSet, CartViewSet, OrderViewSet

router = DefaultRouter()
router.register(r'products', ProductViewSet)
router.register(r'categories', CategoryViewSet)

cart_list = CartViewSet.as_view({'get': 'list'})
add_item = CartViewSet.as_view({'post': 'add_item'})
remove_item = CartViewSet.as_view({'delete': 'remove_item'})

order_list = OrderViewSet.as_view({'get': 'list'})
place_order = OrderViewSet.as_view({'post': 'create'})

urlpatterns = [
    path('', include(router.urls)),
    path('cart/', cart_list),
    path('cart/add/', add_item),
    path('cart/remove/<int:pk>/', remove_item),
    path('orders/', order_list),
    path('orders/place/', place_order),
]