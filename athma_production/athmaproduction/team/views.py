from django.views.generic import ListView
from . models import Team

# Create your views here.

class TeamMembersListView(ListView):
    model = Team
    template_name = 'core/aboutus.html'
    context_object_name = 'team_members'