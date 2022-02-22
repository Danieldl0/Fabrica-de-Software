import { useState } from "react";
import {VeiculosItem} from "../../Components/VeiculosItem/index"

function ListaVeiculos(){
    
    const [veiculos, setVeiculos] = useState([{
        nome_proprietario: "daniel",
        modelo: "carro quadrado",
        placa: "abc-1234",
        cor: "laranja",
        veiculo: 1,
    },
    {
        nome_proprietario: "teste2",
        modelo: "carro quadrado",
        placa: "abc-1234",
        cor: "amarelo",
        veiculo: 2,
    }

    ])
    
    
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
                    </tr>
                </thead>
                <tbody>
                    {veiculos.map((veiculos)=>{
                        return (<VeiculosItem
                            key = {veiculos.veiculo}
                            nomeProprietario = {veiculos.nome_proprietario}
                            modelo = {veiculos.modelo}
                            placa = {veiculos.placa}
                            cor = {veiculos.cor}
                            id_veiculo = {veiculos.veiculo}
                        />
                    )})}
                </tbody>
            </table>

            
        </div>


    )


}

export {ListaVeiculos};