import { useForm } from "react-hook-form";
import {Formularioinput} from "../../Components/Formularioinput/index"

function CadastroEstacionamento(){

    const {register, handleSubmit, formState:{errors}} = useForm();

    function enviarDados(dados){
        console.log(dados)
    }

    return (
        <div className="lista-informacoes">
            <h2>Registrar Estacionamento</h2>
            <form onSubmit={handleSubmit(enviarDados)}>
               <Formularioinput
                    label = "Proprietário"
                    register = {register("nome", {required: true})}
                    error = {errors.nome}
                    placenome = "Nome do proprietário"
                    disabled
               />
               <Formularioinput
                    label = "Placa"
                    register = {register("placa", {required: true})}
                    error = {errors.placa}
                    placenome = "abc-1234"
                    disabled
               />
               <Formularioinput
                    label = "Entrada"
                    register = {register("entrada", {required: true})}
                    error = {errors.entrada}
                    tipo = "datetime-local"
               />
               <Formularioinput
                    label = "Saida"
                    register = {register("saida", {required: true})}
                    error = {errors.saida}
                    tipo = "datetime-local"
               />
               <div className="butao"><button>Enviar</button></div>
            </form>
            
        </div>
        
        

    )

}


export {CadastroEstacionamento};