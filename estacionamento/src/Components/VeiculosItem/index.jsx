import {BiLinkExternal} from "react-icons/bi";
import "./style.css";
import {Link} from "react-router-dom";
     

function VeiculosItem(props){


    return <tr>
        <td>{props.id_veiculo}</td>
        <td>{props.nomeProprietario}</td>
        <td>{props.modelo}</td>
        <td>{props.placa}</td>
        <td>{props.cor}</td>
        <td>
            <Link to={`${props.id_veiculo}/estacionamento/cadastro`} className="alinhar_registrar"><BiLinkExternal/></Link>
        </td>
    </tr>
}

export {VeiculosItem};