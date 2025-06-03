from django.urls import path
from . views import HomeView, ContactView, BlogView, AcademyView, AgencyView, CreationView, AllWorksView, PostersView, VideosView, AboutTeamMembersListView

app_name = 'core'

urlpatterns = [
    path('', HomeView.as_view(), name='home'),
    path('about/', AboutTeamMembersListView.as_view(), name='about'),
    path('contact/', ContactView.as_view(), name='contact'),
    path('blog/', BlogView.as_view(), name='blog'),
    path('athma-digital-academy/', AcademyView.as_view(), name='digital_academy'),
    path('athma-design-agency/', AgencyView.as_view(), name='design_agency'),
    path('athma-creationz/', CreationView.as_view(), name='creation'),
    path('our-works/', AllWorksView.as_view(), name='works'),
    path('our-posters/', PostersView.as_view(), name='posters'),
    path('our-videos/', VideosView.as_view(), name='videos'),
]

