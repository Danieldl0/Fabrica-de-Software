import "./style.css";
import {Link} from "react-router-dom";

function Menu(){
    return <div className="menu">
            <Link to={"/"}>ESTACIONADOS</Link>
            <Link to={"/veiculos"}>VEICULOS</Link>
            <Link to={"/estacionamento"}>ESTACIONAMENTOS</Link>
            <Link to={"/veiculos/cadastro"} className="cadastro-botao">CADASTRO</Link>
        </div>
}

export {Menu};