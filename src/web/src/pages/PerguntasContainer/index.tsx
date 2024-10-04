import { useEffect, useState } from 'react'
import Hero from '../../components/Hero'
import Pergunta from '../../components/Pergunta'
import { getAllPerguntas } from '../../services/nullpointer.service'
import { PerguntaContainerItem } from '../../types/webapp.types'
import './styles.css'

const PerguntasContainer = () => {

    const [perguntas, setPerguntas] = useState([{} as PerguntaContainerItem])

    useEffect(() => {
        const run = async () => {
            setPerguntas(await getAllPerguntas())   
        }

        run()
    }, [])

    return (
        <div>
            <Hero tituto='Perguntas' includeSearchBar />
            
            <section className='perguntas-container'>
                {perguntas 
                    ? perguntas.map((p, index) => <Pergunta key={index} {...p} />) 
                    : <p>Oppss... Nenhuma pergunta encontrada!</p>}
            </section>
        </div>
    )

}

export default PerguntasContainer