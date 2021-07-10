from rest_framework.authtoken.views import ObtainAuthToken
from rest_framework.authtoken.models import Token
from rest_framework.response import Response


class CustomAuthToken(ObtainAuthToken):
    def post(self,request,*args,**kwargs):
        serializer = self.serializer_class(data=request.data,context={'request':request})
        serializer.is_valid(raise_exception=True)
        user = serializer.validated_data['user']
        token,created = Token.objects.get_or_create(user=user)
        return Response({
            'token':token.key,
            'username':user.username,
            'is_apprentice':user.is_apprentice,
            'is_mentor':user.is_mentor,
            'is_active':user.is_active,
            'group':user.group,
            'mentor':user.mentor
        })