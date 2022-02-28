import {format} from 'date-fns';
import {BiLinkExternal} from "react-icons/bi";
import {Link} from 'react-router-dom'


function EstacionadoItem(props){
    return <tr>
        <td>{props.id_estacionados}</td>
        <td>{props.id_carro}</td>
        <td>{props.nomeCliente}</td>
        <td>{props.veiculoPlaca}</td>
        <td>{format(new Date(props.dataEntrada), "dd/MM/yyyy HH:mm:ss")}</td>
        <td>{props.dataSaida ? format(new Date(props.dataSaida), "dd/MM/yyyy HH:mm:ss" ) : "--"}</td>
        <td>
            <Link to= {`/veiculos/${props.id_carro}/estacionamento/${props.id_estacionados}/cadastro`} className='alinhar_registrar' ><BiLinkExternal/></Link>
        </td>
    </tr>


}


export {EstacionadoItem}