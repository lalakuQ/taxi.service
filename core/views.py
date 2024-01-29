from django.shortcuts import render
from .forms import LoginForm


def homepage(request):
    return render(request, 'core/index.html')


def register(request):
    form = LoginForm()
    if request.method == 'POST':
        form = LoginForm(request.POST)
        if form.is_valid():
            form.save()

    context = {'login_form': form}
    return render(request, 'core/login.html', context=context)


def login(request):

    return render(request, 'core/login.html')
