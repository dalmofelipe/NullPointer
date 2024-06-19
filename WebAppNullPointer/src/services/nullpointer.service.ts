const BASE_URL_API = import.meta.env.VITE_BASE_URL_API

const getAllPerguntas = async () => {
    return await fetch(BASE_URL_API + "/perguntas")
        .then(response => response.json())
        .catch(error => console.error(`Error nullpointer.service.getAllPerguntas: ${error}`));
}

export {
    getAllPerguntas
}