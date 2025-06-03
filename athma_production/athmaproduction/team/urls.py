from django.urls import path
from . views import TeamMembersListView

app_name = 'team'

urlpatterns = [
    path('', TeamMembersListView.as_view(), name='about')
]

