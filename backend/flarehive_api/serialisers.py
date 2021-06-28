from django.db import models
from django.db.models import fields
from rest_framework import serializers
from .models import Message

class MessageSerialiser(serializers.ModelSerializer):
    class Meta:
        fields = (
            'message_id',
            'message_content'
        )
        model = Message