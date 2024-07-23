
USE nullpointer;

INSERT INTO tb_perguntas (titulo, mensagem, votos, visualizacoes, data, tags)
VALUES
(
    'Docker compose não inicializa database MySQL', 
    'Ao executar comando docker compose up, as configurações do container do mysql não são aplicadas no container gerado.', 
    10, 
    5, 
    '2024-07-03T18:55:00', 
    'docker,docker-compose'
),(
    'Lorem Ipsum is simply dummy text of the printing and typesetting industry.', 
    'Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum', 
    123, 
    55, 
    '2024-06-23T15:10:00', 
    'lorem,ipsum'
);

INSERT INTO tb_respostas (pergunta_id, mensagem, data, votos)
VALUES
(
    1,
    'As configurações do mysql via env vars são aplicadas na somente na primeira execução do docker compose up, Exclua os arquivos do volume montado e rode o compose up novamente!',
    '2024-07-09T18:55:00', 
    5 
),(
    2,
    'Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.',
    '2024-06-25T00:55:00', 
    9 
);

INSERT INTO tb_comentarios (resposta_id, mensagem, data)
VALUES
(
    1,
    'Boa, depois de excluir os arquivo e rodar compose up! funfo normalmente',
    '2024-07-10T13:15:00'
),(
    2,
    'Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.',
    '2024-06-25T13:15:00'
);