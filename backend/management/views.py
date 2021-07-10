from .serializers import ResponseSerializer, DashBoardSerializer, DashBoardResponseSerializer
from rest_framework.viewsets import ModelViewSet
from rest_framework import viewsets
from .models import DashBoard, ApprenticeResponse
from rest_framework import generics, status
from django.db.models import Q
from rest_framework.response import Response


class DashBoardList(generics.ListAPIView):

    serializer_class = DashBoardSerializer

    def get_queryset(self):
        user = self.request.query_params['user']
        group = self.request.query_params['group']
        return DashBoard.objects.filter(Q(username=user), Q(group=group))


class AddDashBoard(ModelViewSet):
    serializer_class = DashBoardSerializer
    queryset = DashBoard.objects.all()


class ResponseViewSet(viewsets.ModelViewSet):
    serializer_class = ResponseSerializer
    queryset = ApprenticeResponse.objects.all()

    def get_queryset(self):
        username = self.request.query_params['username']
        question = self.request.query_params['question']
        return ApprenticeResponse.objects.filter(Q(username=username), Q(question=question))


class ResponseList(generics.ListAPIView):

    serializer_class = ResponseSerializer

    def get_queryset(self):
        question = self.request.query_params['question']
        is_status = 'active'
        return ApprenticeResponse.objects.filter(Q(question=question),Q(is_status=is_status))


class ViewDashBoard(generics.UpdateAPIView):
    serializer_class = ResponseSerializer
    queryset = ApprenticeResponse.objects.all()

    def patch(self, request, *args, **kwargs):
        pk = kwargs.get('pk')

        response_object = ApprenticeResponse.object.get(id=pk)
        response_data = request.data
        response_object.username = response_data.get("username",response_object.username)
        response_object.question = response_data.get("question", response_object.question)
        response_object.answer = response_data.get("answer", response_object.answer)
        response_object.group = response_data.get("group", response_object.group)
        response_object.favour = response_data.get("favour", response_object.favour)
        response_object.is_status = response_data.get("is_status", response_object.is_status)

        response_object.save()
        serializer = ResponseSerializer(response_object)

        return Response(serializer.data)


