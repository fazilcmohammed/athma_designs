from django.shortcuts import render
from django.views.generic import ListView, DetailView
from . models import BlogPost
# Create your views here.

class BlogListView(ListView):
    model = BlogPost
    template_name = 'core/blog.html'
    context_object_name = 'blogs'
    paginate_by = 3
    ordering = ['-created_at']

class BlogDetailView(DetailView):
    model = BlogPost
    template_name = 'core/blog_detail.html'
    context_object_name = 'post'