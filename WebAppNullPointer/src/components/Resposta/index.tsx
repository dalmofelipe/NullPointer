import { FaRegThumbsUp, FaRegThumbsDown } from "react-icons/fa6";


import { Resposta as RespostaType } from "../../pages/PerguntaDetails/types";
import ComentarioContainer from "../ComentarioContainer";

import "./styles.css";

const Resposta = (props:RespostaType) => {
    const voteUp = (event:any) => {
        event?.preventDefault()
        console.log('up vote')
    }
    const voteDown = (event:any) => {
        event?.preventDefault()
        console.log('down vote')
    }

    return (
    <article className="resposta">
        <input type="hidden" value={props.id} />

        <div>
            <span className="resposta-votos">
                <a href="/" onClick={event => voteUp(event)}><FaRegThumbsUp /></a>
                <b>{props.votos}</b>
                <a href="/"  onClick={event => voteDown(event)}><FaRegThumbsDown /></a>
            </span>

            <p> <small>30/06/2024</small> <br /> {props.mensagem} </p>
        </div>

        {props.comentarios && props.comentarios.length > 0 && <ComentarioContainer comentarios={props.comentarios} />}
    </article>
    )
}

export default Resposta
