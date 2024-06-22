import { NavLink } from "react-router-dom";

import { PerguntaType } from './types'

import './styles.css'

const Pergunta = ({ id, titulo, mensagem, visualizacoes, votos, tags }:PerguntaType) => {

    return <article className='pergunta-container'>
        <input type="hidden" name="id" value={id}/>

        <NavLink to={`/perguntas/${id}`} className="pergunta-ttl-link">{titulo}</NavLink>

        <p>{mensagem}</p>

        <div className="pergunta-footer">
            <span>{visualizacoes || 0} visualizações | {votos || 0} votos</span>

            <div className="pergunta-tags">{tags && tags.map((tag, index) => <span key={index}>{tag}</span>)}</div>
        </div>

    </article>
}

export default Pergunta