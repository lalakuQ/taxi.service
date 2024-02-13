from django.contrib import admin
from django.contrib.auth.admin import UserAdmin

from django.forms import ModelForm
from .models import CustomUser


class CustomUserAdmin(UserAdmin):
    form = ModelForm
    model = CustomUser
    list_display = ['email', 'username',]


admin.site.register(CustomUser, CustomUserAdmin)
