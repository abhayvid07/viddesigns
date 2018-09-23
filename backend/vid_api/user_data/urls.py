from django.urls import path

from . import views

urlpatterns=[
    path('', views.userdatalist.as_view()),
    path('test/', views.testdatalist.as_view()),
]