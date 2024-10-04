import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

import Hero from '../../components/Hero'
import { savePergunta } from '../../services/nullpointer.service'

import './styles.css'

const PerguntaFormPage = () => {

    const [titulo, setTitulo] = useState("")
    const [mensagem, setMensagem] = useState("")
    const [tags, setTags] = useState("")

    const navigate = useNavigate()

    const submitHandle = async (event:any) => {
        event?.preventDefault()

        const p = await savePergunta({titulo, mensagem, tags} as PerguntaCreate)
        console.log('Pergunta salva >>> ', p)
        navigate("/")
    }
    
    const resetHandle = (event:any) => {
        event?.preventDefault()
        setTitulo("")
        setMensagem("")
        setTags("")
    }


    return (
        <div>
            <Hero tituto='Nova Pergunta' />
            
            <form className='pergunta-form-page'>
                <label htmlFor="titulo">Titulo</label>
                <input 
                    type="text" 
                    name="titulo" 
                    id="titulo" 
                    value={titulo}
                    onChange={(e) => setTitulo(e.target.value)} />

                <label htmlFor="tags">Tags <small>(seperadas por virgula!)</small></label>
                <input 
                    type="text" 
                    name="tags" 
                    id="tags" 
                    value={tags} 
                    onChange={e => setTags(e.target.value)} />


                <label htmlFor="mensagem">Mensagem</label>
                <textarea 
                    name="mensagem" 
                    id="mensagem" 
                    value={mensagem} 
                    onChange={(e) => setMensagem(e.target.value)}></textarea>

          
                <div>
                    <button 
                        onClick={(e) => submitHandle(e)}
                        className='btn btn-sm btn-destaque'>Criar Pergunta</button>

                    <button 
                        onClick={(e) => resetHandle(e)}
                        className='btn btn-sm btn-secondary'>Limpar Tudo</button>
                </div>
            </form>
        </div>
    )
}

export default PerguntaFormPage