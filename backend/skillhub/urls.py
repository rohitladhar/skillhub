from django.contrib import admin
from django.urls import path, include
from users.auth import CustomAuthToken
from management.views import DashBoardList, ResponseList,ViewDashBoard
urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/management/', include('management.urls')),
    path('api/users/', include('users.urls')),
    path('token/', CustomAuthToken.as_view()),
    path('api/management/list/', DashBoardList.as_view()),
    path('api/management/viewresponse/', ResponseList.as_view()),
    path('api/management/viewdashboard/<int:pk>/', ViewDashBoard.as_view()),

]
