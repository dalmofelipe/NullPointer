const BASE_URL_API = import.meta.env.VITE_BASE_URL_API

const getAllPerguntas = async () => {
    return await fetch(BASE_URL_API + "/perguntas")
        .then(response => response.json())
        .catch(error => console.error(`Error nullpointer.service.getAllPerguntas: ${error}`));
}

const getPerguntaByID = async (id:any) => {
    return await fetch(BASE_URL_API + `/perguntas/${id}`)
        .then(response => response.json())
        .catch(error => console.error(`Error nullpointer.service.getPerguntaByID: ${error}`));
}

const savePergunta= async (pergunta:PerguntaCreate) => {
    return await fetch(BASE_URL_API + `/perguntas`, {
        method: "POST",
        body: JSON.stringify(pergunta),
        headers: new Headers({'content-type': 'application/json'})
    })
}

const saveResposta = async (resposta:RespostaCreate) => {
    return await fetch(BASE_URL_API + `/respostas`, {
        method: "POST",
        body: JSON.stringify(resposta),
        headers: new Headers({'content-type': 'application/json'})
    })
}

export {
    getAllPerguntas,
    getPerguntaByID,
    savePergunta,
    saveResposta
};
