const API_BASE_URL = process.env.API_BASE_URL
    || 'http://localhost:8888/api'


const getAllPerguntas = async () => {
    return await fetch(API_BASE_URL + "/perguntas")
        .then(response => response.json())
        .catch(error => console.error(`Error nullpointer.service.getAllPerguntas: ${error}`));
}

const getPerguntaByID = async (id:any) => {
    return await fetch(API_BASE_URL + `/perguntas/${id}`)
        .then(response => response.json())
        .catch(error => console.error(`Error nullpointer.service.getPerguntaByID: ${error}`));
}

const savePergunta= async (pergunta:PerguntaCreate) => {
    return await fetch(API_BASE_URL + `/perguntas`, {
        method: "POST",
        body: JSON.stringify(pergunta),
        headers: new Headers({'content-type': 'application/json'})
    })
}

const saveResposta = async (resposta:RespostaCreate) => {
    return await fetch(API_BASE_URL + `/respostas`, {
        method: "POST",
        body: JSON.stringify(resposta),
        headers: new Headers({'content-type': 'application/json'})
    }).then(response => response.json())
}

const saveComentario = async (comentario:ComentarioCreate) => {
    return await fetch(API_BASE_URL + `/comentarios`, {
        method: "POST",
        body: JSON.stringify(comentario),
        headers: new Headers({'content-type': 'application/json'})
    }).then(response => response.json())
}

export {
    getAllPerguntas,
    getPerguntaByID,
    savePergunta,
    saveResposta,
    saveComentario
};
