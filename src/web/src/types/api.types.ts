type RespostaCreate = {
    perguntaId: number,
    mensagem: string
}

type ComentarioCreate = {
    respostaId: number,
    mensagem: string
}

type PerguntaCreate = {
    titulo: string
    mensagem: string
    tags: string
}
