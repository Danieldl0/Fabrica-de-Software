from django.contrib import admin

from estacionamento.models import Veiculo, Estacionamento

# Register your models here.
admin.site.register(Veiculo)
admin.site.register(Estacionamento)