import { PerguntaType } from './types'

import './styles.css'

const Pergunta = ({ id, titulo, mensagem, visualizacoes, votos, tags }:PerguntaType) => {

    return <article>
        {/* <input type="hidden" name="id" value={id}/> */}

        <h3>{titulo}</h3>
        <p>{mensagem}</p>

        <p>{visualizacoes} visualizações | {votos} votos</p>

        <div>{tags && tags.map((tag, index) => <span key={index}>{tag}</span>)}</div>
    </article>
}

export default Pergunta