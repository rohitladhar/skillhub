from django.db import models
from django.utils import timezone
from django.utils.translation import gettext_lazy as _
from django.contrib.auth.models import AbstractBaseUser, PermissionsMixin, BaseUserManager


class CustomAccountManager(BaseUserManager):

    def create_superuser(self, username, password, email, **other_fields):

        other_fields.setdefault('is_staff', True)
        other_fields.setdefault('is_superuser', True)
        other_fields.setdefault('is_active', True)

        if other_fields.get('is_staff') is not True:
            raise ValueError(
                'Superuser must be assigned to is_staff=True.')
        if other_fields.get('is_superuser') is not True:
            raise ValueError(
                'Superuser must be assigned to is_superuser=True.')

        return self.create_user(username, email, password, **other_fields)

    def create_user(self, email, username, password, **other_fields):
        email = self.normalize_email(email)
        skilluser = self.model(email=email,username = username,**other_fields)
        skilluser.set_password(password)
        skilluser.save()
        return skilluser


class SkillHubUser(AbstractBaseUser, PermissionsMixin):
    group_options = (
        ('not specified', 'Not Specified'),
        ('alpha', 'Alpha'),
        ('beta', 'Beta'),
        ('gamma', 'Gamma'),
        ('admin', 'Admin')
    )
    username = models.CharField(max_length=150, unique=True)
    is_apprentice = models.BooleanField(default=False)
    is_mentor = models.BooleanField(default=False)
    group = models.CharField(choices=group_options, default='not specified', max_length=50)
    is_staff = models.BooleanField(default=False)
    is_active = models.BooleanField(default=True)
    email = models.EmailField(_('email address'), unique=True, default="not provided")
    objects = CustomAccountManager()
    mentor = models.CharField(max_length=30,default='self')

    USERNAME_FIELD = 'username'
    REQUIRED_FIELDS = ['group','is_apprentice','is_mentor','email']

    def __str__(self):
        return self.username


class Contact(models.Model):
    name = models.CharField(max_length=100)
    comment = models.CharField(max_length=300)
    description = models.CharField(max_length=1000)
    email = models.EmailField()

