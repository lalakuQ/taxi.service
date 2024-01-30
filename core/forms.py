from django.contrib.auth.forms import UserCreationForm, AuthenticationForm

from .models import CustomUser

from django import forms

from django.forms import ModelForm

from django.forms.widgets import PasswordInput, TextInput


class CreateUserForm(UserCreationForm):

    class Meta:
        model = CustomUser
        fields = ('username', 'email', 'password')


class LoginForm(AuthenticationForm, ModelForm):

    username = forms.CharField(widget=TextInput())
    password = forms.CharField(widget=PasswordInput())
