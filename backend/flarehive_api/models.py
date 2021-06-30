import uuid
from django.db import models
from django.db.models.deletion import CASCADE
from django.db.models.fields import UUIDField
from django.contrib.auth.models import User
from django.db.models.signals import post_save
from django.dispatch import receiver

# Create your models here.
class Message(models.Model):
    message_id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    message_content = models.CharField(max_length=256)
    message_author = models.ForeignKey('Profile', on_delete=models.SET_NULL, null=True)

    def __str__(self) -> str:
        return self.message_content

class Profile(models.Model):
    profile_id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    profile_about = models.TextField(default="")
    user = models.OneToOneField(User, on_delete=models.CASCADE)

    def __str__(self) -> str:
        return self.user.username
