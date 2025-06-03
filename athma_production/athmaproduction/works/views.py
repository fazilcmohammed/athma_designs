from django.views.generic import ListView
from .models import Work

class AllWorksView(ListView):
    model = Work
    template_name = 'core/works/all_works.html'
    context_object_name = 'works'