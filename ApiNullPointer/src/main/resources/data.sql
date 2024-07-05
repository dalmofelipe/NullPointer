
USE nullpointer;

INSERT INTO tb_perguntas (titulo, mensagem, votos, visualizacoes, data, tags)
VALUES
('Docker compose não inicializa database MySQL', 'Ao executar comando docker compose up, as configurações do container do mysql não são aplicadas no container gerado.', 10, 5, '2024-07-03T18:55:00', 'docker,docker-compose'),
('No meu computador funciona, porque nos outros não?', 'Lorem Ipsum...', 10, 5, '2024-05-13T10:30:00', 'null,exception'),
('Meu PC não liga?', 'Lorem Ipsum...', 0, 0, '2023-05-23T06:30:00', 'raise,top');
