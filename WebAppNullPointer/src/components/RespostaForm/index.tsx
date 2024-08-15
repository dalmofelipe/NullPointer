import { useContext, useState } from 'react'
import PerguntaContext from '../../contexts/PerguntaContext'
import { saveResposta, getPerguntaByID } from '../../services/nullpointer.service'

import './styles.css'

interface Props {
    id:number
}

const RespostaForm = ({id}:Props) => {


    const [mensagem, setMensagem] = useState("")
    const {pergunta, setPergunta} = useContext(PerguntaContext);

    const reloadState = async () => {
        pergunta
        setPergunta(await getPerguntaByID(id));
    }

    const submitHandle = async  (event:any) => {
        event?.preventDefault()

        await saveResposta({
            perguntaId: id,
            mensagem
        })

        await reloadState()
        setMensagem("")
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