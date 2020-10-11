from django.contrib import admin
from django.urls import path, include
from course import views

urlpatterns = [
    path('admin/', admin.site.urls),
    path('', views.index, name="index"),
    path('map/', views.map, name="map"),
    path('daum_map/', views.daum_map, name="daum_map"),
    path('accounts/', include('allauth.urls')),
]