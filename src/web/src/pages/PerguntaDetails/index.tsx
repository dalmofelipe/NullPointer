import { useContext, useEffect } from 'react'
import { FaRegThumbsDown, FaRegThumbsUp } from 'react-icons/fa6'
import { useParams } from 'react-router-dom'
import DOMPurify from 'dompurify';

import Hero from '../../components/Hero'
import PerguntaTags from '../../components/PerguntaTags'
import RespostaForm from '../../components/RespostaForm'
import RespostasContainer from '../../components/RespostasContainer/intex'

import { getPerguntaByID } from '../../services/nullpointer.service'

import PerguntaContext from '../../contexts/PerguntaContext'
import './styles.css'


const PerguntaDetails = () => {

    const { perguntaId } = useParams();

    const { pergunta, setPergunta } = useContext(PerguntaContext);

    useEffect(() => {
        async function run() {
            const p = await getPerguntaByID(perguntaId)
            setPergunta(p);
        }
        run()
    }, [])
    

    const voteUp = (event:any) => {
        event?.preventDefault()
        console.log('up vote')
    }
    const voteDown = (event:any) => {
        event?.preventDefault()
        console.log('down vote')
    }

    const date = new Date(pergunta.data)
    const dataFormatada = date.toLocaleString('pt-BR')


    return (
        <div className='pergunta-details'>
            <Hero tituto={pergunta.titulo} />
            
            <PerguntaTags 
                tags={pergunta.tags} 
                maxWidth={'100%'} 
                align='start'
                margin='15px 0px 0px 0px' />

            <div className='pergunta-mensagem' >
                <span className="pergunta-votos">
                    <a href="/" onClick={event => voteUp(event)}><FaRegThumbsUp /></a>
                    <b>{pergunta.votos||0}</b>
                    <a href="/"  onClick={event => voteDown(event)}><FaRegThumbsDown /></a>
                </span>

                <div className="pergunta-mensagem__mensagem">
                    <p className='pergunta-mensagem__datetime'>
                        <small>
                            <span>{dataFormatada}</span>
                            <span> {pergunta.visualizacoes||0} Visualizações</span>
                        </small> 
                    </p>
                    
                    <div dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(pergunta.mensagem) }} />    
                </div>
            </div>

            <RespostasContainer respostasArray={pergunta.respostas} />

            <RespostaForm id={pergunta.id} />
        </div>
    )
}

export default PerguntaDetails
