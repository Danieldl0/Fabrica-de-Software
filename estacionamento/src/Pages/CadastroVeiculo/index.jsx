import { useForm } from 'react-hook-form';
import {useNavigate} from "react-router-dom";
import {Formularioinput} from '../../Components/Formularioinput/index';
import {postVeiculo} from "../../Services/api/veiculoService";



function CadastroVeiculo(){

    const {register, handleSubmit, formState: {errors}} = useForm();
    const navigate = useNavigate();

    async function enviarDados(dados){
        try {
            await postVeiculo(dados)
            navigate("/veiculos/");
        } catch (error) {
            console.log("não foi possivel cadastrar o veiculo")
        }
    }

    return (
        <div className='lista-informacoes'>
            <h2>Cadastrar Veículos</h2>
            <form onSubmit={handleSubmit(enviarDados)}>

                

                <Formularioinput
                    label = "Proprietário"
                    register = {register("nome", {required: true})}
                    error = {errors.nome}
                    placenome = "Nome do proprietário"
                />

                <Formularioinput
                    label = "Modelo"
                    register = {register("modelo", {required: true})}
                    error = {errors.modelo}
                    placenome = "Ex: Uno"
                />

                <Formularioinput
                    label = "Placa"
                    register = {register("placa", {required: true})}
                    error = {errors.placa}
                    placenome = "abc-1234"
                />  

                <Formularioinput
                    label = "Cor"
                    register = {register("cor", {required: true})}
                    error = {errors.cor}
                    placenome = "Cor do veículo"
                />  
                
                <div className="butao"><button>Enviar</button></div>
            </form>
        </div>

            
    )

}

export {CadastroVeiculo};