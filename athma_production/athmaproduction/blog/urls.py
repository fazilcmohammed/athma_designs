from django.urls import path
from .views import BlogListView, BlogDetailView, HomeView

app_name = 'blog'

urlpatterns = [
    path('blog/', BlogListView.as_view(), name='blog'),
    path('<slug:slug>/', BlogDetailView.as_view(), name='blog_detail'),
    path('', HomeView.as_view(), name='home'),
]
