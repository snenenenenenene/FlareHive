from django.db import models
from django.db.models import fields
from rest_framework import serializers
from .models import Message, Profile
from django.contrib.auth.models import User

class MessageSerialiser(serializers.ModelSerializer):
    class Meta:
        fields = (
            'message_id',
            'message_content',
            'message_author'
        )
        model = Message

class MessageUpdateSerialiser(serializers.ModelSerializer):
    class Meta:
            fields = (
                'message_id',
                'message_content',
            )
            model = Message

class UserSerialiser(serializers.ModelSerializer):
    class Meta:
        fields = (
            'id',
            'username',
            'email',
            'password',
        )
        model = User

class ProfileSerialiser(serializers.ModelSerializer):
    user = UserSerialiser()
    class Meta: 
        fields = (
            'profile_id',
            'profile_about',
            'user',
        )
        model = Profile

    def create(self, validated_data):
        user_data = validated_data.pop('user')
        user = User.objects.create_user(**user_data)
        user.set_password(user_data['password'])
        profile = Profile.objects.create(user=user, **validated_data)      
        profile.save()
        return profile

    def update(self, instance, validated_data):
        validated_data.pop('user')
        instance.profile_about = validated_data.get('profile_about', instance.profile_about)
        instance.save()
        return instance

    
class ProfileUpdateSerialiser(serializers.ModelSerializer):
    class Meta:
        fields = (
            'profile_id',
            'profile_about'
        )
        model = Profile