## NullPointer

NullPointerException é um clone simplificado do Stack Overflow, desenvolvido para simular a funcionalidade de perguntas e respostas de programação. O projeto é uma aplicação distribuida que explora conceitos de backend e frontend, possibilitando interações como criação de perguntas, respostas, comentários, tags e votos.

![nullpointer](./docs/imgs/nullpointer.png)

### Stack

- __Backend__ Java & Spring Boot
- __Frontend__ React & TypeScript
- __DevOps__ 
    - Conteinerização com Docker
- __Database__ MySQL

### Releases

```
v0.1.0
- MVP capacidade de criar perguntas, responder perguntas e comentar respostas.
```

### Exec

__Docker Compose__

```sh
docker compose up -d
```

__Local__

```sh
# Run API
export WEBAPP_BASE_URL=http://localhost:9000 DB_HOST=localhost:3306
./ApiNullPointer/./mvnw clean spring-boot:run -f ./ApiNullPointer/pom.xml
```

```sh
# Run Webapp
export API_BASE_URL=http://localhost:8000/api
yarn --cwd ./WebAppNullPointer/ dev
```

### Endpoints

| Serviço | Endereço | 
| --- | --- |
| Frontend | [http://localhost:9000](http://localhost:9000) |
| Backend | [http://localhost:8000/api/perguntas](http://localhost:8000/api/perguntas) |
| Database UI | [http://localhost:5000](http://localhost:5000) |
| Database Server | localhost:3306 |