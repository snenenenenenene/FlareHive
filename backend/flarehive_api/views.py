from .serialisers import MessageSerialiser, MessageUpdateSerialiser, ProfileSerialiser, UserSerialiser, ProfileUpdateSerialiser
from django.http.response import HttpResponse
from django.shortcuts import render
from rest_framework import generics
from django.contrib.auth.models import User

from .models import Message, Profile

# Create your views here.
class ListMessages(generics.ListCreateAPIView):
    queryset = Message.objects.all()
    serializer_class = MessageSerialiser

class UpdateAndDeleteMessage(generics.RetrieveUpdateDestroyAPIView):
    queryset = Message.objects.all()
    serializer_class = MessageUpdateSerialiser

class ListUsers(generics.ListAPIView):
    queryset = User.objects.all()
    serializer_class = UserSerialiser

class UpdateAndDeleteUser(generics.RetrieveUpdateDestroyAPIView):
    queryset = User.objects.all()
    serializer_class = UserSerialiser

class ListProfiles(generics.ListCreateAPIView):
    queryset = Profile.objects.all()
    serializer_class = ProfileSerialiser

class UpdateProfile(generics.RetrieveUpdateAPIView):
    queryset = Profile.objects.all()
    serializer_class = ProfileUpdateSerialiser


