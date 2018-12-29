from django import forms

from .models import userdatatable

class loginsForm(forms.ModelForm):

    class Meta:
        model = userdatatable
        fields = ('username', 'password', )


class userdataForm(forms.ModelForm):

    class Meta:
        model = userdatatable
        fields = ('firstname', 'lastname', 'username', 'password', 'category', 'email', 'gender', 'dob' )
