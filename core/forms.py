from django.contrib.auth.forms import UserCreationForm, AuthenticationForm, UserChangeForm  

from .models import CustomUser

from django import forms

from django.forms import ModelForm

from django.forms.widgets import PasswordInput, TextInput


class RegisterForm(UserCreationForm):
    username = forms.CharField(widget=TextInput(), required=True)
    email = forms.EmailField(required=True)
    password = forms.CharField(widget=PasswordInput(), required=True)

    def __init__(self, *args, **kwargs):
        super().__init__(*args, **kwargs)
        del self.fields['password2']
        del self.fields['password1']

    def save(self, commit=True):
        user = CustomUser(email=self.cleaned_data['email'],
                          username=self.cleaned_data['username'])
        user.set_password(self.cleaned_data["password"])
        if commit:
            user.save()
            if hasattr(self, "save_m2m"):
                self.save_m2m()
        return user


class LoginForm(forms.Form):
    user_login = forms.CharField(widget=TextInput(), required=False)
    password = forms.CharField(widget=PasswordInput(), required=False)

