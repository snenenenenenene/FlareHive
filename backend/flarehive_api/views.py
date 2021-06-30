from .serialisers import  MessageSerialiser, MessageUpdateSerialiser, ProfileSerialiser, UserSerialiser, ProfileCreateUpdateSerialiser
from django.http.response import HttpResponse
from django.shortcuts import render
from rest_framework import generics
from rest_framework.permissions import IsAuthenticated
from .models import User

from .models import Message, Profile

# Create your views here.
class ListMessages(generics.ListCreateAPIView):
    permission_classes = [IsAuthenticated]
    queryset = Message.objects.all()
    serializer_class = MessageSerialiser

class UpdateAndDeleteMessage(generics.RetrieveUpdateDestroyAPIView):
    permission_classes = [IsAuthenticated]
    queryset = Message.objects.all()
    serializer_class = MessageUpdateSerialiser

class ListUsers(generics.ListAPIView):
    permission_classes = [IsAuthenticated]
    queryset = User.objects.all()
    serializer_class = UserSerialiser

class UpdateAndDeleteUser(generics.RetrieveUpdateDestroyAPIView):
    permission_classes = [IsAuthenticated]
    queryset = User.objects.all()
    serializer_class = UserSerialiser

class ListProfiles(generics.ListAPIView):
    permission_classes = [IsAuthenticated]
    queryset = Profile.objects.all()
    serializer_class = ProfileSerialiser

class AddProfile(generics.CreateAPIView):
    queryset = Profile.objects.all()
    serializer_class = ProfileCreateUpdateSerialiser

class UpdateProfile(generics.RetrieveUpdateAPIView):
    permission_classes = [IsAuthenticated]
    queryset = Profile.objects.all()
    serializer_class = ProfileCreateUpdateSerialiser



