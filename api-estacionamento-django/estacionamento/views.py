from django.forms import ValidationError
from django.http import Http404
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status, serializers, generics
from estacionamento.models import Estacionamento,Veiculo
from estacionamento.api.serializers import VeiculoSerializer,EstacionamentoSerializer


class VeiculoView(APIView):
    def get(self,request, format=None):
        veiculo = Veiculo.objects.all()
        serializer = VeiculoSerializer(veiculo, many = True)
        return Response(serializer.data)

    def post(self, request, format=None):
        if Veiculo.objects.filter(**request.data).exists():
            raise serializers.ValidationError("Veiculo já cadastrado")
        

        serializer = VeiculoSerializer(data=request.data)

        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)



class VeiculoDetalhe(APIView):

    def get_object(self,pk):
        try:
            return Veiculo.objects.get(pk=pk)
        except Veiculo.DoesNotExist:
            raise Http404

    def get(self,request, pk, format=None):
        veiculo = self.get_object(pk)
        serializer = VeiculoSerializer(veiculo)
        return Response(serializer.data)

    def put(self, request, pk, format=None):
        veiculo = self.get_object(pk)
        serializer = VeiculoSerializer(veiculo, data=request.data)

        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_202_ACCEPTED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    def delete(self, request, pk, format=None):
        veiculo = self.get_object(pk)
        veiculo.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)



class EstacionamentoView(generics.ListCreateAPIView):
    queryset = Estacionamento.objects.all()
    serializer_class = EstacionamentoSerializer

    def post(self, request, *args, **kwargs):
        veiculo = Veiculo.objects.get(id= request.data.get('veiculo'))
        veiculo_estacionado = Estacionamento.objects.filter(veiculo=veiculo, data_saida__isnull =True)

        if veiculo_estacionado.exists():
            raise serializers.ValidationError("Veiculo já está estacionado")
        return self.create(request,*args,**kwargs)


class EstacionamentoDetalhe(generics.RetrieveUpdateDestroyAPIView):
    queryset = Estacionamento.objects.all()
    serializer_class = EstacionamentoSerializer


class EstacionamentoAberto(APIView):

    def get(self, request, format=None):
        carros_estacionados = Estacionamento.objects.filter(data_saida__isnull = True).values('id','veiculo_id','veiculo__nome_cliente', 'veiculo__modelo_carro', 'veiculo__placa',
            'veiculo__cor', 'veiculo__foto', 'data_entrada', 'data_saida'
        )
        return Response(carros_estacionados)