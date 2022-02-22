function CadastroVeiculo(){
    return (
        <div>
            <h2>Cadastrar veiculos</h2>
            <form >
                <div>
                    <label>Proprietário</label>
                    <input placeholder="João Silva" type="text" />
                </div>
                <div>
                    <label>Modelo</label>
                    <input placeholder="carro quadrado" type="text" />
                </div>
                <div>
                    <label>Placa</label>
                    <input placeholder="abc-1234" type="text" />
                </div>
                <div>
                    <label>Cor</label>
                    <input placeholder="azul" type="text" />
                </div>
                <button>Enviar</button>
            </form>
        </div>

            
    )

}

export {CadastroVeiculo};