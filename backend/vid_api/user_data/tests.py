from django.test import TestCase

# Create your tests here.

from .models import userdata


class TodoModelTest(TestCase):

    @classmethod
    def setUpTestData(cls):
        userdata.objects.create(firstname='first name')
        userdata.objects.create(lastname='last name')
        userdata.objects.create(username='user name')
        userdata.objects.create(password='password here')
        userdata.objects.create(category='category here')
        userdata.objects.create(email='email-id')
        userdata.objects.create(gender='gender')
        userdata.objects.create(dob='2018-09-22')

    def test_firstname_content(self):
        ls = userdata.objects.get(id=1)
        expected_object_name = f'{ls.firstname}'
        self.assertEquals(expected_object_name, 'first name')

    def test_lastname_content(self):
        ls = userdata.objects.get(id=2)
        expected_object_name = f'{ls.lastname}'
        self.assertEquals(expected_object_name, 'last name')

    def test_username_content(self):
        ls = userdata.objects.get(id=3)
        expected_object_name = f'{ls.username}'
        self.assertEquals(expected_object_name, 'user name')

    def test_password_content(self):
        ls = userdata.objects.get(id=4)
        expected_object_name = f'{ls.password}'
        self.assertEquals(expected_object_name, 'password here')

    def test_category_content(self):
        ls = userdata.objects.get(id=5)
        expected_object_name = f'{ls.category}'
        self.assertEquals(expected_object_name, 'category here')

    def test_email_content(self):
        ls = userdata.objects.get(id=6)
        expected_object_name = f'{ls.email}'
        self.assertEquals(expected_object_name, 'email-id')

    def test_gender_content(self):
        ls = userdata.objects.get(id=7)
        expected_object_name = f'{ls.gender}'
        self.assertEquals(expected_object_name, 'gender')

    def test_dob_content(self):
        ls = userdata.objects.get(id=8)
        expected_object_name = f'{ls.dob}'
        self.assertEquals(expected_object_name, '2018-09-22')
