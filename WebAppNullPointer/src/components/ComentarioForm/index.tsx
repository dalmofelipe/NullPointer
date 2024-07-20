import { useContext, useState } from 'react';
import PerguntaContext from '../../contexts/PerguntaContext';
import { saveComentario } from '../../services/nullpointer.service';
import './styles.css';


interface Props {
    id:number
}

const ComentarioForm = (props:Props) => {

    const [showForm, setShowForm] = useState(false)
    const [mensagem, setMensagem] = useState("")
    const { pergunta, setPergunta } = useContext(PerguntaContext);

    type ButtonEvent = React.MouseEvent<HTMLButtonElement>;

    const handleShowForm = (event: ButtonEvent) => {
        event.preventDefault()
        setShowForm(!showForm)
        setMensagem("")
    }

    const updateComentarios = async (comentarioFromDb:any) => {
        pergunta.respostas.map(r => {
            if(r.id == props.id) {
                r?.comentarios.push(comentarioFromDb)
            }
        })

        setPergunta({...pergunta})
    }

    const handleSaveComentario = async (event: ButtonEvent) => {
        event.preventDefault()

        const comentarioFromDb:any = await saveComentario({
            respostaId: props.id,
            mensagem
        })

        updateComentarios(comentarioFromDb)
        setShowForm(!showForm)
        setMensagem("")
    }

    return (
        <div className="comentario-form">

            {
            !showForm
            ?
            <button 
                onClick={(e) => handleShowForm(e)}
                className='btn btn-sm btn-secondary'>Comentar</button>
            :
            <form>
                <small>Novo Comentario</small>

                <textarea 
                    name="comentario" 
                    id="comentario" 
                    value={mensagem} 
                    onChange={(e) => setMensagem(e.target.value)}></textarea>

                <div className="cform-btns">
                    <button 
                        onClick={(e) => handleShowForm(e)}
                        className='btn btn-sm btn-secondary'>Cancelar</button>

                    <button 
                        onClick={(e) => handleSaveComentario(e)}
                        className='btn btn-sm btn-destaque'>Comentar</button>
                </div>
            </form>
            }

        </div>
    )
}

export default ComentarioForm