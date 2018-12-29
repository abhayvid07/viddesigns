from django.shortcuts import render

# Create your views here.
from rest_framework import generics
from .models import userdatatable, testdata
from .serializers import userdataSerializer, testdataSerializer

from django.http import JsonResponse, HttpResponseRedirect

class userdatalist(generics.ListCreateAPIView):
    queryset = userdatatable.objects.all()
    serializer_class = userdataSerializer

class testdatalist(generics.ListCreateAPIView):
    queryset = testdata.objects.all()
    serializer_class = testdataSerializer

class signUp(generics.ListCreateAPIView):
    queryset = userdatatable.objects.all()
    serializer_class = userdataSerializer
	
