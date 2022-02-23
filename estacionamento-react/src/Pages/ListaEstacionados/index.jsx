import {useState} from 'react';
import {EstacionadoItem} from '../../Components/EstacionadosItem/index'

function ListaEstacionados(){
    const [estacionados, setEstacionados] = useState([{
        cliente_veiculo : "daniel",
        veiculo_placa: "abc-9867",
        data_entrada: new Date(),
        data_saida: null,
        veiculo: 1,
    },
    {
        cliente_veiculo : "daniel",
        veiculo_placa: "abc-9867",
        data_entrada: new Date(),
        data_saida: null,
        veiculo: 2,
    }
]);

    
    return ( 
    <div className='lista-informacoes'>
        <h2>Estacionados</h2>
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
                { estacionados.map(estacionados => {
                    return (
                        <EstacionadoItem
                        key = {estacionados.veiculo}
                        clienteVeiculo = {estacionados.cliente_veiculo}
                        veiculoPlaca = {estacionados.veiculo_placa}
                        dataEntrada = {estacionados.data_entrada}
                        dataSaida = {estacionados.data_saida}
                        id_estacionados ={estacionados.veiculo}
                    />
                )})}
            </tbody>
        </table>
    </div>

    )


}

export {ListaEstacionados};