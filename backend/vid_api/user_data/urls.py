from django.urls import path

from . import views

urlpatterns=[
    path('', views.userdatalist.as_view()),
    path('test/', views.testdatalist.as_view()),
    path('signup/', views.signUp.as_view()),
	#path('returnjson/', views.returnJSON.as_view())
]