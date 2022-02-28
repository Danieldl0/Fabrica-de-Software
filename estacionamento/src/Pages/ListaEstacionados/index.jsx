import {useState,useEffect} from 'react';
import {EstacionadoItem} from '../../Components/EstacionadosItem/index'
import {getEstacionados} from "../../Services/api/estacionamentoService"


function ListaEstacionados(){
    const [estacionados, setEstacionados] = useState([]);


    async function carregarEstacionados(){

        try {
            setEstacionados(await getEstacionados())
        } catch (error) {
            console.log("erro")
        }

    }

    useEffect(()=>{
        carregarEstacionados();
    },[])

    
    return ( 
    <div className='lista-informacoes'>
        <h2>Estacionados</h2>
        <table>
            <thead>
                <tr>
                    <th>Id</th>
                    <th>Id:carro</th>
                    <th>Proprietário</th>
                    <th>Placa</th>
                    <th>Entrada</th>
                    <th> Saída</th>
                    <th className='alinhar_registrar'>Registrar Saida</th>
                </tr>
            </thead>
            <tbody>
                { estacionados.map(estacionados => {
                    return (
                        <EstacionadoItem
                        key = {estacionados.id}
                            id_estacionados ={estacionados.id}
                            id_carro = {estacionados.veiculo_id}
                            nomeCliente = {estacionados.veiculo__nome_cliente}
                            veiculoPlaca = {estacionados.veiculo__placa}
                            dataEntrada = {estacionados.data_entrada}
                            
                    />
                )})}
            </tbody>
        </table>
    </div>

    )


}

export {ListaEstacionados};