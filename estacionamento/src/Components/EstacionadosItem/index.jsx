import {format} from 'date-fns';

function EstacionadoItem(props){
    return <tr>
        <td>{props.id_estacionados}</td>
        <td>{props.clienteVeiculo}</td>
        <td>{props.veiculoPlaca}</td>
        <td>{format(props.dataEntrada, "dd/MM/yyyy HH:mm:ss")}</td>
        <td>{props.dataSaida != null ? format(props.dataSaida, "dd/MM/yyyy HH:mm:ss") : null}</td>
    </tr>


}


export {EstacionadoItem}