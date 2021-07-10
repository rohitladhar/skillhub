from .serializers import SkillHubUserSerializer,ContactSerializer
from rest_framework import viewsets
from .models import SkillHubUser,Contact
from rest_framework.authentication import TokenAuthentication
from rest_framework.permissions import IsAuthenticated


class SkillHubUserCreate(viewsets.ModelViewSet):
    queryset = SkillHubUser.objects.all()
    serializer_class = SkillHubUserSerializer


class ContactViewSet(viewsets.ModelViewSet):
    queryset = Contact.objects.all()
    serializer_class = ContactSerializer




