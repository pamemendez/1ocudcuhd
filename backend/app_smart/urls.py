
from django.contrib import admin
from django.urls import path, include
from . import views
from app_smart.api.viewsets import *
from rest_framework_simplejwt.views import TokenObtainPairView, TokenRefreshView                
from rest_framework.routers import DefaultRouter
from app_smart.api.filters import ContadorFilterView, UmidadeFilterView, TemperaturaFilterView, LuminosidadeFilterView


urlpatterns = [
    path('api/create_user/', CreateUserAPIViewSet.as_view(), name='createsuperuser'),
    path('api/token/', TokenObtainPairView.as_view(), name='token_obtain_pair'),
    path('api/token/refresh', TokenRefreshView.as_view(), name='token_refresh'),
    path('api/sensor_filter/', SensorFilterView.as_view(), name='sensor_filter'),
    path('api/sensor/', SensorList.as_view()),
    path('api/sensor/<int:pk>/', SensorViewSet.as_view({'get': 'retrieve', 'put': 'update', 'patch': 'partial_update', 'delete': 'destroy'}), name='sensor-detail'),
    path('api/temperatura_filter/', TemperaturaFilterView.as_view(), name = 'temperatura_filter'),
    path('api/contador_filter/', ContadorFilterView.as_view(), name = 'contador_filter'),    
    path('api/umidade_filter/', UmidadeFilterView.as_view(), name = 'umidade_filter'),
    path('api/luminosidade_filter/', LuminosidadeFilterView.as_view(), name = 'luminosidade_filter'),
    
]