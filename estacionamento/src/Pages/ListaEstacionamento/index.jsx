import { useEffect, useState } from "react";
import {EstacionadoItem} from '../../Components/EstacionadosItem/index'
import {getEstacionamento} from "../../Services/api/estacionamentoService"

function ListaEstacionamento(){
    
    const [estacionamento, setEstacionamento] = useState([])

    async function carregarEstacionamento(){
        try {
            setEstacionamento(await getEstacionamento());
        } catch (error) {
            console.log('deu erro');
        }
    }

    useEffect(() =>{
        carregarEstacionamento();
    },[])

    
    return (
        <div className="lista-informacoes">
            <h2>Lista Estacionados</h2>
            <table>
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Id:Carro</th>
                        <th>Proprietário</th>
                        <th>Placa</th>
                        <th>Entrada</th>
                        <th>Saida</th>
                    </tr>
                </thead>
                <tbody>
                    {estacionamento.map((estacionamento)=>{
                        return( <EstacionadoItem
                            key = {estacionamento.id}
                            id_estacionados ={estacionamento.id}
                            id_carro = {estacionamento.veiculo}
                            nomeCliente = {estacionamento.nome_cliente}
                            veiculoPlaca = {estacionamento.cliente_placa}
                            dataEntrada = {estacionamento.data_entrada}
                            dataSaida = {estacionamento.data_saida}
                        />)
                    })}
                </tbody>
            </table>
        </div>
    )
}

export {ListaEstacionamento};