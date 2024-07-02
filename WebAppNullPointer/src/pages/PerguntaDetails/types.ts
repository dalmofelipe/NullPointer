export type Comentario = {
    id:number
    mensagem: string
    data: Date
}

export type Resposta = {
    id:number
    mensagem: string
    data: Date
    votos: number 
    comentarios: [Comentario]
}

export type PerguntaDetailsType = {
    id: number
    titulo: string
    mensagem: string
    visualizacoes: number
    votos: number
    tags: [string]
    respostas: [Resposta]
}