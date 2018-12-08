from django.shortcuts import render

# Create your views here.
import requests
from rest_framework import generics
from .models import userdata, testdata
from .serializers import userdataSerializer, testdataSerializer
from .forms import loginsForm, userdataForm
from django.views.decorators.csrf import csrf_exempt

from django.http import JsonResponse, HttpResponseRedirect

class userdatalist(generics.ListCreateAPIView):
    queryset = userdata.objects.all()
    serializer_class = userdataSerializer

class testdatalist(generics.ListCreateAPIView):
    queryset = testdata.objects.all()
    serializer_class = testdataSerializer

class signUp(generics.ListCreateAPIView):
    queryset = userdata.objects.all()
    serializer_class = userdataSerializer

'''@csrf_exempt
def signup(request):
    #http: // localhost: 3000 / signup
    r = requests.get('http://localhost:3000/signup')
    print('New request: \n')
    print(r)
    r.json()
    if request.method == 'POST':
        print('Following is request:')
        #print("This is request: ", request)
        form = userdataForm(request.POST)
        print(form)


        if form.is_valid():
            #print('HERE')
        firstname = request.POST.get('firstname')
        lastname = request.POST.get('lastname',)
        username = request.POST.get('Username',)
        password = request.POST.get('Password',)
        category = request.POST.get('Category',)
        email = request.POST.get('Email',)
        gender = request.POST.get('Gender',)
        dob = request.POST.get('DOB',)
        print('This is firstname: ', firstname)
        data_obj = userdata(firstname=firstname, lastname=lastname, username=username, password=password, email=email, gender=gender, dob=dob)


    else:
        form = userdataForm()

    try:
        data_obj.save()
        return JsonResponse({'status': 1, 'message': 'Your profile updated successfully!'})
    except:
        return JsonResponse({'status': 0, 'message': 'There was something wrong while updating your profile.'})
        '''
