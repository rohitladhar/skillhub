from .models import DashBoard, ApprenticeResponse
from rest_framework import serializers


class ResponseSerializer(serializers.ModelSerializer):
    
    class Meta:
        model = ApprenticeResponse
        fields = ['id', 'username', 'question', 'answer', 'group', 'favour','is_status']

    def create(self, validated_data):
        item, created = ApprenticeResponse.objects.get_or_create(
            username=validated_data['username'],
            group=validated_data['group'],
            question=validated_data['question'],
            is_status=validated_data['is_status'],
            favour=validated_data['favour'],
            answer=validated_data['answer'],
        )

        return item


class DashBoardSerializer(serializers.ModelSerializer):

    class Meta:
        model = DashBoard
        fields = ['id', 'username', 'question', 'date', 'group']

    def create(self, validated_data):
        item, created = DashBoard.objects.get_or_create(
            username=validated_data['username'],
            date=validated_data['date'],
            defaults={
                'question': validated_data['question'],
                'group': validated_data['group']
            })

        return item


class DashBoardResponseSerializer(serializers.ModelSerializer):
    apprentice = ResponseSerializer(many=True,read_only=True)
    
    class Meta:
        model = DashBoard
        fields=['id','username','question','date','group','apprentice']