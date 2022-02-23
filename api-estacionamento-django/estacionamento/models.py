from tkinter import CASCADE
from django.db import models


class Veiculo(models.Model):
    nome_cliente = models.CharField(max_length=255, blank=False, null=False)
    modelo_carro = models.CharField(max_length=255, blank=False, null=False)
    cor = models.CharField(max_length=50, blank=False, null=False)
    placa = models.CharField(max_length=10, blank=False, null=False)
    foto = models.ImageField(null=True, blank=True)


    def __str__(self):
        return 'ID: {id} - {modelo}/{cor} - {placa} - {cliente} '.format(id=self.id, modelo =self.modelo_carro, cor=self.cor, placa=self.placa, cliente = self.nome_cliente)

class Estacionamento(models.Model):
    veiculo = models.ForeignKey(Veiculo, on_delete=models.CASCADE)
    data_entrada = models.DateTimeField(auto_now_add=True, auto_now=False)
    data_saida = models.DateTimeField(null = True, blank = True)

    def __str__(self):
        return "ID: {id} - ID_carro: {veiculo} - {data_entrada}".format(id=self.id, veiculo = self.veiculo.id, data_entrada = self.data_entrada.strftime("%d/%m/%Y %H:%M:%S"))