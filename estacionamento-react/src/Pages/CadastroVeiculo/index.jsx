import { useForm } from 'react-hook-form';
import {Formularioinput} from '../../Components/Formularioinput/index';
import {api} from "../../Services/api/index";



function CadastroVeiculo(){

    const {register, handleSubmit, formState: {errors}} = useForm();

    function dadosFormulario(dados){
        api.post("/veiculos/", {
            nome_cliente: dados.nome,
            modelo_carro: dados.modelo,
            cor: dados.cor,
            placa: dados.placa
        }).then(response => console.log(response))
        .catch(erro => console.log(erro))
        
    }

    return (
        <div className='lista-informacoes'>
            <h2>Cadastrar Veículos</h2>
            <form onSubmit={handleSubmit(dadosFormulario)}>

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