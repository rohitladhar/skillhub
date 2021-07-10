from .views import SkillHubUserCreate,ContactViewSet
from django.urls import path
from rest_framework import routers
from django.conf.urls import include

router = routers.DefaultRouter()
router.register('signup',SkillHubUserCreate,basename='SkillHubUserCreate')
router.register('contact',ContactViewSet,basename='ContactViewSet')


urlpatterns = [
    path('', include(router.urls)),
    ]



