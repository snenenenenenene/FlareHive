# Generated by Django 3.1.7 on 2021-06-29 21:16

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('flarehive_api', '0002_profile'),
    ]

    operations = [
        migrations.AddField(
            model_name='profile',
            name='profile_about',
            field=models.TextField(default=''),
        ),
    ]
