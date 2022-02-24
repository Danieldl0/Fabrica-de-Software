import { useState, useEffect } from "react";
import {VeiculosItem} from "../../Components/VeiculosItem/index"
import {getVeiculos} from "../../Services/api/veiculoService"


function ListaVeiculos(){
    

    const [veiculos, setVeiculos] = useState([])
    
    async function carregarDados(){
        try {
            setVeiculos(await getVeiculos())
        } catch (error) {
            console.log("não foi possivel carregar os dados")
        }
    }

    useEffect(()=>{
        carregarDados();
    }, [])
    
    return (
        <div className="lista-informacoes">
            <h2>Veículos Cadastrados</h2>


            <table>
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Proprietário</th>
                        <th>modelo</th>
                        <th>placa</th>
                        <th>cor</th>
                        <th className="alinhar_registrar">Registrar</th>
                    </tr>
                </thead>
                <tbody>
                    {veiculos.map((veiculos)=>{
                        return (<VeiculosItem
                            key = {veiculos.id}
                            nomeProprietario = {veiculos.nome_cliente}
                            modelo = {veiculos.modelo_carro}
                            placa = {veiculos.placa}
                            cor = {veiculos.cor}
                            id_veiculo = {veiculos.id}
                        />
                    )})}
                </tbody>
            </table>

            
        </div>


    )


}

export {ListaVeiculos};