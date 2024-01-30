from django.urls import path
from . import views

urlpatterns = [
    path('', views.homepage, name=''),

    path('login', views.login, name='login')
]
