from django.shortcuts import render, redirect
from .forms import LoginForm
from django.db.models import Q
from django.contrib.auth import get_user_model, authenticate
from django.http import HttpResponse


def homepage(request):
    return render(request, 'core/index.html')


def register(request):
    pass


def login(request):

    if request.method == 'POST':
        form = LoginForm(request.POST)
        if request.POST.get('signup'):
            return HttpResponse('po')

        if form.is_valid():
            user_input = form.cleaned_data.get('user_login')
            user_model = get_user_model()
            try:
                user = user_model.objects.get(Q(username=user_input) | Q(email=user_input))
                password = form.cleaned_data.get('password')
                if user.check_password(password):
                    user = authenticate(request, username=user.username, password=password)
                    if user:
                        login(request, user)
                        return redirect('core/index.html')
                    else:
                        return HttpResponse('Invalid credentials')
            except user_model.DoesNotExist:
                return HttpResponse('Invalid credentials')
        else:
            print(form.error_messages)
            return HttpResponse('Invalid form')
    else:
        form = LoginForm()
        return render(request, 'login.html', {'form': form})
