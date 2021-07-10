from .views import ResponseViewSet,AddDashBoard
from django.urls import path,include
from rest_framework.routers import DefaultRouter

router = DefaultRouter()
router.register('adddashboard',AddDashBoard, basename='dashboard')
router.register('response',ResponseViewSet, basename='response')


urlpatterns = [
    path('', include(router.urls)),

]