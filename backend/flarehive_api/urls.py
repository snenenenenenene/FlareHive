from django.urls import path
from . import views

app_name = 'flarehive_api'

urlpatterns = [
    path('', views.ListMessages.as_view(), name='index')
]