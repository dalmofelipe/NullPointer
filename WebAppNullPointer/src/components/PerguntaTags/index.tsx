import "./styles.css"

interface Props {
    tags: string[],
    maxWidth: number | string,
    align?: string
}

const PerguntaTags = (props:Props) => {
    return (
        <div
            style={{
                maxWidth: props.maxWidth,
                justifyContent: `flex-${props.align||'end'}`
            }} 
            className="pergunta-tags" >

            {props.tags && props.tags.length > 0
                ? props.tags.map((tag, index) => <span key={index}>{tag}</span>)
                : <small>Sem Tags Registradas</small>}
        </div>
    )
}

export default PerguntaTags