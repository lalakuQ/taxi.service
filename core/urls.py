from django.urls import path
from . import views

urlpatterns = [
    path('home', views.homepage, name='home'),
    path('auth', views.auth, name='auth')
]
