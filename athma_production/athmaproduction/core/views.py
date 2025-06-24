from django.views.generic import TemplateView, ListView
from team.models import Team
from works.models import Work
from . models import Slider

# Create your views here.

class HomeView(TemplateView):
    template_name = 'core/home.html'

    def get_context_data(self, **kwargs):
        context = super().get_context_data(**kwargs)
        context["sliders"] = Slider.objects.filter(is_active=True).order_by("-created_at")
        return context

class AboutTeamMembersListView(ListView):
    model = Team
    template_name = 'core/aboutus.html'
    context_object_name = 'team_members'



class BlogView(TemplateView):
    template_name = 'core/blog.html'

class AcademyView(TemplateView):
    template_name = 'core/production/academy.html'

class AgencyView(TemplateView):
    template_name = 'core/production/design_agency.html'

class CreationView(TemplateView):
    template_name = 'core/production/creation.html'

class AllWorksView(ListView):
    model = Work
    template_name = 'core/works/all_works.html'
    context_object_name = 'works'

    def get_queryset(self):
        queryset = super().get_queryset()
        category = self.request.GET.get('category')
        if category:
            queryset = queryset.filter(category=category)
        return queryset

    def get_context_data(self, **kwargs):
        context = super().get_context_data(**kwargs)
        context['categories'] = Work.CATEGORY_CHOICES
        context['selected_category'] = self.request.GET.get('category', '')
        return context


class PostersView(TemplateView):
    template_name = 'core/works/posters.html'

class VideosView(TemplateView):
    template_name = 'core/works/videos.html'

class SliderListView(ListView):
    model = Slider
    template_name = 'core/home.html'
    context_object_name = 'sliders'
    queryset = Slider.objects.filter(is_active=True).order_by('-created_at')