import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { saveResposta } from '../../services/nullpointer.service'
import './styles.css'

interface Props {
    id:number
}

const RespostaForm = ({id}:Props) => {

    const [mensagem, setMensagem] = useState("")

    const navigate = useNavigate()

    const submitHandle = async  (event:any) => {
        event?.preventDefault()

        await saveResposta({
            perguntaId: id,
            mensagem
        })

        // TODO: impletementar context para perguntas e respostas
        navigate(0)
    }
    
    const resetHandle = (event:any) => {
        event?.preventDefault()
        setMensagem("")
    }

    return (
        <form className='resposta-form'>
            <label htmlFor="mensagem">Sua Resposta</label>

            <textarea 
                name="mensagem" 
                id="mensagem" 
                value={mensagem} 
                onChange={(e) => setMensagem(e.target.value)}></textarea>
            
            <div className="resposta-form-btns">
                <button 
                    onClick={(e) => submitHandle(e)}
                    className='btn btn-sm btn-destaque'> Enviar</button>

                <button 
                    onClick={(e) => resetHandle(e)}
                    className='btn btn-sm btn-secondary'>Limpar Tudo</button>
            </div>
        </form>
    )
}

export default RespostaForm