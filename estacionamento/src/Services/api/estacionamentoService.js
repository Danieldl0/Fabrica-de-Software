import {api} from './index';

export async function getEstacionamento(){

    const resp = await api.get("/estacionamento/");
    return resp.data;
}


export async function getEstacionados(){
    const resp = await api.get("/estacionados/");
    return resp.data;
}


export async function getEstacionamentoById(id){
    const resp = await api.get(`/estacionamento/${id}`);
    return resp.data;
}


export async function postEstacionados(dados, id){
    return await api.post("/estacionamento/",{
        entrada: dados.entrada,
        veiculo: id,
    });
    
}


export async function putEstacionamento(saida, id_veiculo, id_estacionamento){
    await api.put(`estacionamento/${id_estacionamento}/`, {
        data_saida: saida,
        veiculo: id_veiculo,
    });

}