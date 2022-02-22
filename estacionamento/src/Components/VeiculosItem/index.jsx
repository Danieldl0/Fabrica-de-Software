function VeiculosItem(props){
    return <tr>
        <td>{props.id_veiculo}</td>
        <td>{props.nomeProprietario}</td>
        <td>{props.modelo}</td>
        <td>{props.placa}</td>
        <td>{props.cor}</td>
    </tr>
}

export {VeiculosItem};