from .serialisers import MessageSerialiser
from django.http.response import HttpResponse
from django.shortcuts import render
from rest_framework import generics

from .models import Message
from .serialisers import MessageSerialiser

# Create your views here.
class ListMessages(generics.ListCreateAPIView):
    queryset = Message.objects.all()
    serializer_class = MessageSerialiser