import { FaRegThumbsDown, FaRegThumbsUp } from "react-icons/fa6";

import { Resposta as RespostaType } from "../../types/webapp.types";
import ComentarioContainer from "../ComentarioContainer";

import "./styles.css";
import ComentarioForm from "../ComentarioForm";

const Resposta = (props:RespostaType) => {

    const voteUp = (event:any) => {
        event?.preventDefault()
        console.log('up vote')
    }
    const voteDown = (event:any) => {
        event?.preventDefault()
        console.log('down vote')
    }

    const date = new Date(props.data)
    const dataFormatada = date.toLocaleString('pt-BR')


    return (
        <article className="resposta">
            <input type="hidden" value={props.id || 0} />

            <div>
                <span className="resposta-votos">
                    <a href="/" onClick={event => voteUp(event)}><FaRegThumbsUp /></a>
                    <b>{props.votos}</b>
                    <a href="/"  onClick={event => voteDown(event)}><FaRegThumbsDown /></a>
                </span>

                <p> <small>{dataFormatada}</small> <br /> {props.mensagem} </p>
            </div>

            {props.comentarios && props.comentarios.length > 0 
                && <ComentarioContainer comentarios={props.comentarios} />}

            <ComentarioForm id={props.id} />
        </article>
    )
}

export default Resposta
