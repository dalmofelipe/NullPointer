import "./styles.css"

interface Props {
    tags?: string,
    maxWidth: number | string,
    align?: string
}

const PerguntaTags = (props:Props) => {

    const tags = props.tags?.split(',')

    return (
        <div
            style={{
                maxWidth: props.maxWidth,
                justifyContent: `flex-${props.align||'end'}`
            }} 
            className="pergunta-tags" >

            {tags && tags.length > 0
                ? tags.map((tag, index) => <span key={index}>{tag}</span>)
                : <small>Sem Tags Registradas</small>}
        </div>
    )
}

export default PerguntaTags