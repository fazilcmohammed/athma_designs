"""
URL configuration for cabvera project.

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
from django.views.generic import TemplateView

urlpatterns = ([
    path('admin/', admin.site.urls),
    path("main/", include("main.urls", namespace="main")),
    path("", include("web.urls", namespace="web")),
    path("", include("order.urls", namespace="order")),
    path("accounts/", include("accounts.urls", namespace="accounts")),
    path("accounts/", include("registration.backends.simple.urls")),
    path(
            "sitemap.xml",
            TemplateView.as_view(template_name="sitemap.xml", content_type="text/xml"),
        ),
        path(
            "robots.txt",
            TemplateView.as_view(template_name="robots.txt", content_type="text/plain"),
        ),
        path(
            "OneSignalSDKWorker.js",
            TemplateView.as_view(
                template_name="OneSignalSDKWorker.js", content_type="text/javascript"
            ),
        ),
]+ static(settings.STATIC_URL, document_root=settings.STATIC_ROOT)
+ static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
)