import {format} from 'date-fns';

function EstacionadoItem(props){
    return <tr>
        <td>{props.id_estacionados}</td>
        <td>{props.id_carro}</td>
        <td>{props.nomeCliente}</td>
        <td>{props.veiculoPlaca}</td>
        <td>{format(new Date(props.dataEntrada), "dd/MM/yyyy hh:mm:ss")}</td>
        <td>{props.dataSaida ? format(new Date(props.dataSaida), "dd/MM/yyyy hh:mm:ss" ) : "--"}</td>
    </tr>


}


export {EstacionadoItem}