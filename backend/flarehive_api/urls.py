from django.urls import path
from . import views

app_name = 'flarehive_api'

urlpatterns = [
    path('messages/', views.ListMessages.as_view(), name='index'),
    path('messages/<uuid:pk>/', views.UpdateAndDeleteMessage.as_view(), name='edit_and_delete_message'),
    path('users/', views.ListUsers.as_view(), name='users'),
    path('users/<int:pk>/', views.UpdateAndDeleteUser.as_view(), name='edit_user'),
    path('profiles/', views.ListProfiles.as_view(), name='profiles'),
    path('profiles/<uuid:pk>', views.UpdateProfile.as_view(), name='edit_an_delete_profile')
    
]