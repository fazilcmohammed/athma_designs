from django.shortcuts import render
from django.views.generic import ListView, DetailView, TemplateView
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

class HomeView(TemplateView):
    template_name = 'core/home.html'

    def get_context_data(self, **kwargs):
        context = super().get_context_data(**kwargs)
        context['latest_blogs'] = BlogPost.objects.all().order_by('-created_at')[:2]
        return context