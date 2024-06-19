import { useEffect, useState } from 'react'
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
            <h3>Perguntas</h3>
            
            <section>
                {perguntas.length == 0 && <p>Oppss... Nenhuma pergunta encontrada!</p>}
                {perguntas && perguntas.map((p, index) => <Pergunta key={index} {...p} />)}
            </section>
        </div>
    )

}

export default PerguntasContainer