import { Comentario } from '../../types/webapp.types'
import './styles.css'

interface Props {
    comentarios: Comentario[]
}

const ComentarioContainer = (props:Props) => {

    return (
        <section className='comentario-container'>
            {props.comentarios 
                && props.comentarios.map((c, index) => {
                    const date = new Date(c.data)
                    const dataFormatada = date.toLocaleString('pt-BR')

                    return <article key={index}>
                        <input type="hidden" name="" value={c.id}/>
                        <small>{c.mensagem} --- {dataFormatada}</small>
                    </article>
                }
            )}
        </section>
    )
}

export default ComentarioContainer