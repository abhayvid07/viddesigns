from rest_framework import serializers

from .models import userdata, testdata

#testdataSerializer for testdata
class testdataSerializer(serializers.ModelSerializer):
    class Meta:
        fields =(
            'fieldone',
            'fieldtwo',
        )
        model = testdata

#userdataSerializer for userdata
class userdataSerializer(serializers.ModelSerializer):
    class Meta:
        fields = (
            'firstname',
            'lastname',
            'username',
            'password',
            'category',
            'email',
            'gender',
            'dob',
        )
        model = userdata