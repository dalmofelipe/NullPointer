import { useEffect, useState } from 'react'
import { FaRegThumbsDown, FaRegThumbsUp } from 'react-icons/fa6'
import { useParams } from 'react-router-dom'

import Hero from '../../components/Hero'
import NavBar from '../../components/NavBar'
import PerguntaTags from '../../components/PerguntaTags'
import RespostaForm from '../../components/RespostaForm'
import RespostasContainer from '../../components/RespostasContainer/intex'

import { getPerguntaByID } from '../../services/nullpointer.service'
import { PerguntaDetailsType } from './types'

import './styles.css'


const PerguntaDetails = () => {

    const { perguntaId } = useParams();

    const [pergunta, setPergunta] = useState({} as PerguntaDetailsType)

    useEffect(() => {
        const run = async () => {
            setPergunta(await getPerguntaByID(perguntaId))
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


    return (
        <div className='pergunta-details'>
            <NavBar />

            <Hero tituto={pergunta.titulo} />
            
            <PerguntaTags tags={pergunta.tags} maxWidth={'100%'} align='start'/>

            <div className='pergunta-mensagem' >
                <span className="pergunta-votos">
                    <a href="/" onClick={event => voteUp(event)}><FaRegThumbsUp /></a>
                    <b>{pergunta.votos||0}</b>
                    <a href="/"  onClick={event => voteDown(event)}><FaRegThumbsDown /></a>
                </span>

                <p>
                    <small>
                        <span>30/06/2024</span>  
                        <span> {pergunta.visualizacoes||0} Visualizações</span>
                    </small> 
                    {pergunta.mensagem}
                </p>
            </div>

            <RespostaForm id={pergunta.id} />

            <RespostasContainer respostasArray={pergunta.respostas} />
        </div>
    )
}

export default PerguntaDetails
