from django.db import models

# Create your models here.

#testdata is a table for db-api testing
class testdata(models.Model):
    fieldone = models.CharField(max_length=50)
    fieldtwo = models.CharField(max_length=50)

    class Meta:
        db_table = "testdata"

#userdata is a table in db where all profile data is kept
class userdata(models.Model):
    firstname = models.CharField(max_length=50)
    lastname = models.CharField(max_length=50)
    username = models.CharField(max_length=50)
    password = models.CharField(max_length=20)
    category = models.CharField(max_length=30)
    email = models.CharField(max_length=50)
    gender = models.CharField(max_length=10, default='Male')
    dob = models.DateField(auto_now=True)

    class Meta:
        db_table = "userdata"
