from django.contrib.auth.forms import UserCreationForm, AuthenticationForm, UserChangeForm  

from .models import CustomUser

from django import forms

from django.forms import ModelForm

from django.forms.widgets import PasswordInput, TextInput


class CreateUserForm(UserCreationForm):
    def __init__(self, *args, **kwargs):
        super(UserCreationForm, self).__init__(*args, **kwargs)
        del self.fields['password2']
        del self.fields['password1']

    class Meta:
        model = CustomUser
        fields = ('email', 'password')


class LoginForm(AuthenticationForm, UserChangeForm):
    user_login = forms.CharField(widget=TextInput(), required=False)
    password = forms.CharField(widget=PasswordInput(), required=False)

    def clean(self):
        cleaned_data = super().clean()
        user_login = cleaned_data.get('user_login')
        password = cleaned_data.get('password')

        if not user_login and not password:
            raise forms.ValidationError(
                "Both fields are empty. Please fill out at least one field.",
                code='invalid'
            )
