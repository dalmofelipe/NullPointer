import { useEffect, useState } from 'react'
import Hero from '../../components/Hero'
import NavBar from '../../components/NavBar'
import Pergunta from '../../components/Pergunta'
import { PerguntaType } from '../../components/Pergunta/types'
import { getAllPerguntas } from '../../services/nullpointer.service'
import './styles.css'

const PerguntasContainer = () => {

    const [perguntas, setPerguntas] = useState([{} as PerguntaType])

    useEffect(() => {
        const run = async () => {
            setPerguntas(await getAllPerguntas())   
        }

        run()
    }, [])

    return (
        <div>
            <NavBar />
            <Hero tituto='Perguntas' />
            
            <section className='perguntas-container'>
                {perguntas 
                    ? perguntas.map((p, index) => <Pergunta key={index} {...p} />) 
                    : <p>Oppss... Nenhuma pergunta encontrada!</p>}
            </section>
        </div>
    )

}

export default PerguntasContainer