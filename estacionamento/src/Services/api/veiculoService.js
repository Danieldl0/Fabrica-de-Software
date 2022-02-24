import {api} from "./index";


export async function postVeiculo(dados){
        await api.post("/veiculos/", {
        nome_cliente: dados.nome,
        modelo_carro: dados.modelo,
        cor: dados.cor,
        placa: dados.placa
    })
}


export async function getVeiculos(){
   const resp =  await api.get("/veiculos/")
    return resp.data;
}


export async function getVeiculoById(id){
    const resp = await api.get(`/veiculos/${id}`);
    return resp.data;
}