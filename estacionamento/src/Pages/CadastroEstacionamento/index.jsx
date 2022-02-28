import {useEffect} from "react";
import {useParams, useNavigate} from "react-router-dom";
import { useForm } from "react-hook-form";
import {Formularioinput} from "../../Components/Formularioinput/index";
import {getVeiculoById} from "../../Services/api/veiculoService";
import {format} from 'date-fns'
import {getEstacionamentoById, postEstacionados, putEstacionamento} from "../../Services/api/estacionamentoService"


function CadastroEstacionamento(){

    const params = useParams();
    const navigate = useNavigate();

    const {register, handleSubmit, formState:{errors}, reset} = useForm();


    async function enviarDados(dados){
        console.log(dados);
        if(dados.saida){
            //fazer put
            
            try {
                await putEstacionamento(dados.saida, params.id_veiculo, params.id_estacionamento);
                navigate("/");
            } catch (error) {
                console.log("erro");
            }
        }else{
            //fazer post
            try {
                await postEstacionados(dados, params.id_veiculo);
                navigate("/");
            } catch (error) {
                console.log("veiculo ja estacionado")
            }
        }



    }


    async function carregarVeiculo(){
        let estacionamentoAberto;
        

        try {
            
            const veiculo = await getVeiculoById(params.id_veiculo)
     
            reset({
                nome: veiculo.nome_cliente,
                placa: veiculo.placa,
                entrada: format(new Date(), "yyyy-MM-dd'T'HH:mm")
            })

            if (params.id_estacionamento != 0){
                estacionamentoAberto = await getEstacionamentoById(params.id_estacionamento);
                reset({
                    entrada: format(new Date(estacionamentoAberto.data_entrada), "yyyy-MM-dd'T'HH:mm")
                })
            }
        } catch (error) {
            alert("Veiculo não encontrado!");
            navigate("/veiculos/");
        }
        
    }

    useEffect(()=>{
        carregarVeiculo();
    }, []);


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
                    disabled={params.id_estacionamento == 0 ? true : false}
               />
               <div className="butao"><button>Enviar</button></div>
            </form>
            
        </div>
        
        

    )

}


export {CadastroEstacionamento};