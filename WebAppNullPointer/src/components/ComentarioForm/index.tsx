import './styles.css'
import { useState } from 'react';
import { saveComentario } from '../../services/nullpointer.service';
import { useNavigate } from 'react-router-dom';


interface Props {
    id:number
}

const ComentarioForm = (props:Props) => {

    const navigate = useNavigate()

    const [showForm, setShowForm] = useState(false)
    const [mensagem, setMensagem] = useState("")

    type ButtonEvent = React.MouseEvent<HTMLButtonElement>;

    const handleShowForm = (event: ButtonEvent) => {
        event.preventDefault()
        setShowForm(!showForm)
        setMensagem("")
    }

    const handleSaveComentario = async (event: ButtonEvent) => {
        event.preventDefault()

        console.log(`save comentario na resposta id ${props.id} >>> `, mensagem)

        await saveComentario({
            respostaId: props.id,
            mensagem
        })
        
        navigate(0)
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