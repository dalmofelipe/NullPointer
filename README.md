## NullPointer

![nullpointer](./docs/imgs/nullpointer.png)

### Stack

Java & Spring Boot | React & TypeScript | MySQL | Docker


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
./src/api/./mvnw clean spring-boot:run -f ./src/api/pom.xml
```

```sh
# Run Webapp
export API_BASE_URL=http://localhost:8000/api
yarn --cwd ./src/web/ dev
```

### Endpoints

| Serviço | Endereço | 
| --- | --- |
| Frontend | [http://localhost:9000](http://localhost:9000) |
| Backend | [http://localhost:8000/api/perguntas](http://localhost:8000/api/perguntas) |
| Database UI | [http://localhost:5000](http://localhost:5000) |
| Database Server | localhost:3306 |