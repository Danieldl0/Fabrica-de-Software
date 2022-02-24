import {api} from './index';

export async function getEstacionamento(){

    const resp = await api.get("/estacionamento/");
    return resp.data;
}


export async function getEstacionados(){
    const resp = await api.get("/estacionados/");
    return resp.data;
}


export async function postEstacionados(dados){
    return await api.post("/estacionamento/",{
        entrada: dados.entrada,
        veiculo: 20
    });
    
}