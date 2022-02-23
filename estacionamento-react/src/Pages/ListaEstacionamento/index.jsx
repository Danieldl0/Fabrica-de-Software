import { useState } from "react";
import {EstacionadoItem} from '../../Components/EstacionadosItem/index'

function ListaEstacionamento(){
    
    const [estacionamento, setEstacionamento] = useState([{
        veiculo_nome_proprietario : "teste1",
        veiculo_placa: "abc-1234",
        data_entrada: new Date(),
        data_saida: null,
        veiculo: 1,
    },
    {
        veiculo_nome_proprietario : "teste2",
        veiculo_placa: "abc-9876",
        data_entrada: new Date(),
        data_saida: new Date(),
        veiculo: 2,

    }

])

    
    return (
        <div className="lista-informacoes">
            <h2>Lista Estacionados</h2>
            <table>
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Proprietário</th>
                        <th>Placa</th>
                        <th>Entrada</th>
                        <th>Saida</th>
                    </tr>
                </thead>
                <tbody>
                    {estacionamento.map((estacionamento)=>{
                        return( <EstacionadoItem
                            key = {estacionamento.veiculo}
                            id_estacionados ={estacionamento.veiculo}
                            clienteVeiculo = {estacionamento.veiculo_nome_proprietario}
                            veiculoPlaca = {estacionamento.veiculo_placa}
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