import { Comentario } from '../../pages/PerguntaDetails/types'
import './styles.css'

interface Props {
    comentarios: Comentario[]
}

const ComentarioContainer = (props:Props) => {
    return (
        <section className='comentario-container'>
            {props.comentarios 
                && props.comentarios.map((c, index) => 
            <article key={index}>
                <input type="hidden" name="" value={c.id}/>
                <small>{c.mensagem} * 30/06/2024</small>
            </article>)}
        </section>
    )
}

export default ComentarioContainer