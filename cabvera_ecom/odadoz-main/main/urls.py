from django.urls import path

from . import views

app_name = "main"

urlpatterns = [
    path("dashboard/", views.IndexView.as_view(), name="index"),
    path("orders/", views.OrderView.as_view(), name="orders"),
    path("categories/", views.CategoryView.as_view(), name="categories"),
    path("category/create/", views.CategoryCreateView.as_view(), name="category_create"),
    path("products", views.ProductListView.as_view(), name="product_list"),
    path("product/create/", views.ProductCreateView.as_view(), name="product_create"),
    # path("book_detail/<str:pk>/", views.ProductDetail.as_view(), name="product_detail"),
    path("product_update/<str:pk>/", views.ProductUpdate.as_view(), name="product_update"),
    path("product_delete/<str:pk>/", views.ProductDelete.as_view(), name="product_delete"),
]
