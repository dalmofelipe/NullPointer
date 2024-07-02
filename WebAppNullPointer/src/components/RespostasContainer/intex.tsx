import { Resposta as RespostaType } from "../../pages/PerguntaDetails/types"
import Resposta from "../Resposta"
import "./styles.css"

interface Props {
    respostasArray: RespostaType[]
}

const RespostasContainer = (props:Props) => {
    return (
    <section className="respostas-container">
        <h3>Respostas</h3>

        {props.respostasArray && props.respostasArray.length > 0
            ? props.respostasArray.map((r, index) => <Resposta key={index} {...r} /> )
            : <p>Seja o primeiro a Responder!</p>}
    </section>
    )
}

export default RespostasContainer