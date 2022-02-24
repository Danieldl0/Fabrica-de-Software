from rest_framework import serializers
from estacionamento.models import Estacionamento, Veiculo

class VeiculoSerializer(serializers.ModelSerializer):
    class Meta:
        model = Veiculo
        fields = ("__all__")


class EstacionamentoSerializer(serializers.ModelSerializer):
    nome_cliente = serializers.CharField(source = "veiculo.nome_cliente", read_only=True)
    cliente_placa = serializers.CharField(source = "veiculo.placa", read_only=True)
    class Meta:
        model = Estacionamento
        fields = ("id","veiculo","data_entrada","data_saida","nome_cliente", "cliente_placa")
    
    

