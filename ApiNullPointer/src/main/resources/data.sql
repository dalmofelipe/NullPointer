
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
);

INSERT INTO tb_respostas (pergunta_id, mensagem, data, votos)
VALUES
(
    1,
    'As configurações do mysql via env vars são aplicadas na somente na primeira execução do docker compose up, Exclua os arquivos do volume montado e rode o compose up novamente!',
    '2024-07-09T18:55:00', 
    5 
);

INSERT INTO tb_comentarios (resposta_id, mensagem, data)
VALUES
(
    1,
    'Boa, depois de excluir os arquivo e rodar compose up! funfo normalmente',
    '2024-07-10T13:15:00'
);