from django.contrib import admin
from django.contrib.auth.admin import UserAdmin

from .forms import LoginForm
from .models import CustomUser


class CustomUserAdmin(UserAdmin):
    form = LoginForm
    model = CustomUser
    list_display = ['email', 'username',]


admin.site.register(CustomUser, CustomUserAdmin)
