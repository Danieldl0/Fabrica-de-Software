import {useEffect} from "react";
import { useForm } from "react-hook-form";
import {Formularioinput} from "../../Components/Formularioinput/index";
import {getVeiculoById} from "../../Services/api/veiculoService";
import {format} from 'date-fns'
import {postEstacionados} from "../../Services/api/estacionamentoService"


function CadastroEstacionamento(){

    const {register, handleSubmit, formState:{errors}, reset} = useForm();


    async function enviarDados(dados){
        try {
            await postEstacionados(dados)
        } catch (error) {
            alert("veiculo ja estacionado")
        }
    }


    async function carregarVeiculo(){

        const veiculo = await getVeiculoById(10)
        reset({
            nome: veiculo.nome_cliente,
            placa: veiculo.placa,
            entrada: format((new Date()), "yyyy-MM-dd'T'HH:mm"),
        })
    }

    useEffect(()=>{
        carregarVeiculo();
    }, [])


    return (
        <div className="lista-informacoes">
            <h2>Registrar Estacionamento</h2>
            <form onSubmit={handleSubmit(enviarDados)}>
               <Formularioinput
                    label = "Proprietário"
                    register = {register("nome")}
                    error = {errors.nome}
                    placenome = "Nome do proprietário"
                    disabled
               />
               <Formularioinput
                    label = "Placa"
                    register = {register("placa")}
                    error = {errors.placa}
                    placenome = "abc-1234"
                    disabled
               />
               <Formularioinput
                    label = "Entrada"
                    register = {register("entrada")}
                    error = {errors.entrada}
                    tipo = "datetime-local"
                    disabled
               />
               <Formularioinput
                    label = "Saida"
                    register = {register("saida")}
                    error = {errors.saida}
                    tipo = "datetime-local"
                    disabled
               />
               <div className="butao"><button>Enviar</button></div>
            </form>
            
        </div>
        
        

    )

}


export {CadastroEstacionamento};