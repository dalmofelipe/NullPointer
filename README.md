## NullPointer

Aplicação super 'original' de Perguntas e Respostas de duvidas do mundo tech.

### Stack

Docker | Java | Spring Boot | React | TypeScript | MySQL

### Exec

Via docker-compose

```sh
docker compose up -d
```

Local

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

```Frontend``` - [http://localhost:9000](http://localhost:9000)

```Backend``` - [http://localhost:8000/api/perguntas](http://localhost:8000/api/perguntas)

```Database UI``` - [http://localhost:5000](http://localhost:5000)

```Database Server``` - localhost:3306