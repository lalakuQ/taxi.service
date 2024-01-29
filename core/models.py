from django.contrib.auth.models import AbstractUser
from django.contrib.auth.hashers import make_password

from django.db import models


class CustomUser(AbstractUser):
    username = models.CharField(max_length=100)
    email = models.EmailField(blank=True)
    password = models.CharField(max_length=32)

    def save(self, *args, **kwargs):
        self.password = make_password(self.password)
        super().save(*args, **kwargs)

    def __str__(self):
        pass
