import { useState } from 'react'
import './styles.css'

const RespostaForm = () => {

    const [mensagem, setMensagem] = useState("")

    const submitHandle = (event:any) => {
        event?.preventDefault()
        console.log("enviando mensagem ...")
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