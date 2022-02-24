import './style.css'

function Formularioinput(props){
    return (
        <div className="input">
            <label>{props.label}</label>
            <input {...props.register} placeholder = {props.placenome} type={props.tipo} disabled = {props.disabled}  />
            {props.error ?  <span>Campo Obrigatório</span> : null}
            <label>{props.texto}</label>
        </div>

    )

}

export {Formularioinput};