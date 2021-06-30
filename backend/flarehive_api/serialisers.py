from django.db import models
from django.db.models import fields
from rest_framework import serializers
from .models import Message, Profile, User

class MessageSerialiser(serializers.ModelSerializer):
    class Meta:
        fields = (
            'id',
            'content',
            'author'
        )
        model = Message

class MessageUpdateSerialiser(serializers.ModelSerializer):
    class Meta:
            fields = (
                'id',
                'content',
                'author'
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
            'id',
            'about',
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
        instance.about = validated_data.get('about', instance.about)
        instance.save()
        return instance

    
class ProfileCreateUpdateSerialiser(serializers.ModelSerializer):
    class Meta:
        fields = (
            'id',
            'about'
        )
        model = Profile