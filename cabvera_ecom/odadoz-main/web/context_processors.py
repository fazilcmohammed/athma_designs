from order.models import CartItem,Wishlist
from products.models import Category
from django.contrib.auth.models import User


def main_context(request):
    all_categories = Category.objects.all()
    
    cart_count = 0
    wishlist_count = 0
    cart_items =0
    current_user = None
    
    if request.user.is_authenticated:
        current_user = User.objects.get(id=request.user.id)
        cart_count = CartItem.objects.filter(user=request.user).count()
        wishlist_count = Wishlist.objects.filter(user=request.user).count()
        cart_items = CartItem.objects.filter(user=request.user)

    return {
        "all_categories": all_categories,
        "cart_items": cart_items,
        'cart_count': cart_count,
        'wishlist_count': wishlist_count,
        'current_user':current_user
    }
