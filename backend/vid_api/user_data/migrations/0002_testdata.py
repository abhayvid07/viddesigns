# Generated by Django 2.1 on 2018-09-22 10:20

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('user_data', '0001_initial'),
    ]

    operations = [
        migrations.CreateModel(
            name='testdata',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('fieldone', models.CharField(max_length=50)),
                ('fieldtwo', models.CharField(max_length=50)),
            ],
            options={
                'db_table': 'testdata',
            },
        ),
    ]
