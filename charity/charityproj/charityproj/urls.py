"""
URL configuration for charityproj project.

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/5.2/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.urls import path, include
from django.conf import settings
from django.conf.urls.static import static
from main.views import home, about, programs, joinus, joblisting, contact, login, signup

urlpatterns = [
    path('admin/', admin.site.urls),
    path('', include('main.urls')),
    path('', home, name='home'),
    path('about/', about, name='about'),
    path('programs/', programs, name='programs'),
    path('joinus/', joinus, name='joinus'),
    path('joblisting/', joblisting, name='joblisting'),
    path('contact/', contact, name='contact'),
    path('login/', login, name='login'),
    path('signup/', signup, name='signup'),

]

if settings.DEBUG:
    urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)