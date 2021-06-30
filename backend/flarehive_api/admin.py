from django.contrib import admin
from .models import Channel, Message, Profile, User

# Register your models here.
admin.site.register(Message)
admin.site.register(Profile)
admin.site.register(Channel)
admin.site.register(User)