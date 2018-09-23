from django.shortcuts import render

# Create your views here.
from rest_framework import generics
from .models import userdata, testdata
from .serializers import userdataSerializer, testdataSerializer

class userdatalist(generics.ListCreateAPIView):
    queryset = userdata.objects.all()
    serializer_class = userdataSerializer

class testdatalist(generics.ListCreateAPIView):
    queryset = testdata.objects.all()
    serializer_class = testdataSerializer
