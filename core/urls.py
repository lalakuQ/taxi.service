from django.urls import path
from . import views

urlpatterns = [
    path('', views.homepage, name='home'),
    path('home', views.homepage, name='home'),
    path('login', views.auth, name='login')
]
