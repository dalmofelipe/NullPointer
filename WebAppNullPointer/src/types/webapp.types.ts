export type PerguntaContainerItem = {
    id: number
    titulo: string
    mensagem: string
    visualizacoes: number
    votos: number
    tags: string
}
export type PerguntaDetailsType = PerguntaContainerItem & {
    respostas: Resposta[]
}

export type Resposta = {
    id:number
    mensagem: string
    data: Date
    votos: number 
    comentarios: [Comentario]
}

export type Comentario = {
    id:number
    mensagem: string
    data: Date
}

