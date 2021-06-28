import uuid
from django.db import models

# Create your models here.
class Message(models.Model):
    message_id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    message_content = models.CharField(max_length=256)

    def __str__(self) -> str:
        return self.message_content