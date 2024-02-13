from django.shortcuts import render, redirect
from .forms import LoginForm, RegisterForm
from django.db.models import Q
from django.contrib.auth import authenticate, login
from django.http import HttpResponse
from .models import CustomUser


def homepage(request):
    return render(request, 'core/index.html')


def auth(request):
    if request.method == 'POST':
        form = LoginForm(request.POST)
        if 'signin_form' in request.POST:
            if form.is_valid():
                user_input = form.cleaned_data.get('user_login')
                user_model = CustomUser
                try:
                    user = user_model.objects.get(Q(username=user_input) | Q(email=user_input))
                    password = form.cleaned_data.get('password')
                    if user.check_password(password):
                        user = authenticate(request, username=user.username, password=password)
                        if user:
                            login(request, user)
                            return redirect('home')
                        else:
                            return HttpResponse('Invalid credentials')
                except user_model.DoesNotExist:
                    return HttpResponse('Invalid credentials')

        elif 'signup' in request.POST:
            signup_form = RegisterForm(request.POST)
            render(request, 'core/login.html', {'form': signup_form})
            if signup_form.is_valid():
                signup_form.save()
                return redirect('home')
            else:
                return HttpResponse(str(signup_form.errors))
        else:
            return HttpResponse(request.POST)
    else:
        form = LoginForm()
        signup_form = RegisterForm()
        return render(request, 'core/login.html', {'LoginForm': form})
