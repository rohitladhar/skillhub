from django.contrib import admin
from .models import DashBoard, ApprenticeResponse


@admin.register(DashBoard)
class DashBoardAdmin(admin.ModelAdmin):
    list_display = ['id','username','group','question','date']


@admin.register(ApprenticeResponse)
class ResponseAdmin(admin.ModelAdmin):
    list_display = ['id','username','group','question','answer','favour','is_status']

