# Generated by Django 4.0.2 on 2022-02-16 01:46

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('estacionamento', '0001_initial'),
    ]

    operations = [
        migrations.AlterField(
            model_name='estacionamento',
            name='data_saida',
            field=models.DateTimeField(blank=True, null=True),
        ),
    ]