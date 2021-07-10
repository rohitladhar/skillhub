from rest_framework import serializers
from .models import SkillHubUser,Contact
from rest_framework.authtoken.models import Token
from rest_framework.response import Response
from rest_framework import status


class SkillHubUserSerializer(serializers.ModelSerializer):

    class Meta:
        model = SkillHubUser
        fields = ('username','password','is_apprentice','is_mentor','group','email','mentor')
        extra_kwargs = {'password': {'write_only': True}}

    def create(self, validated_data):
        skilluser = SkillHubUser.objects.create_user(**validated_data)
        Token.objects.create(user=skilluser)
        return Response(status=status.HTTP_201_CREATED)


class ContactSerializer(serializers.ModelSerializer):
    class Meta:
        model = Contact
        fields = ['id','name','comment','description','email']