from django.shortcuts import render
from models import CustomUser
from forms import CustomUserCreationForm


def homepage(request):
    return render(request, 'core/index.html')


def register(request):
    form = CustomUserCreationForm()
    if request.method == 'POST':
        form = CustomUserCreationForm(request.POST)

        if form.is_valid():
            form.save()

    context = {'login_form': form}
    return render(request, 'core/login.html', context=context)


def login(request):

    return render(request, 'core/login.html')
