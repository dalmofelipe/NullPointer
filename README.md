## NullPointer

Aplicação super 'original' de Perguntas e Respostas de duvidas do mundo tech.

### Stack

| <img src="https://github.com/dalmofelipe/dalmofelipe/blob/master/imgs/docker.svg" alt="Docker" height="50" title="Docker"> | <img src="https://github.com/dalmofelipe/dalmofelipe/blob/master/imgs/java.svg" alt="Java" height="50" title="Java"> | <img src="https://github.com/dalmofelipe/dalmofelipe/blob/master/imgs/spring.svg" alt="Spring Boot" height="50" title="Spring Boot"> | <img src="https://github.com/dalmofelipe/dalmofelipe/blob/master/imgs/react.svg" alt="React" height="50" title="React"> | <img src="https://github.com/dalmofelipe/dalmofelipe/blob/master/imgs/typescript.svg" alt="Docker" height="50" title="Docker"> | <img src="https://github.com/dalmofelipe/dalmofelipe/blob/master/imgs/mysql.svg" alt="MySQL" height="50" title="MySQL"> |
|--|--|--|--|--|--|
| Docker | Java | Spring Boot | React | TypeScript | MySQL


### Exec

```sh
docker compose up -d
```

```sh
# Run API
export WEBAPP_BASE_URL=http://localhost:5173 DB_HOST=localhost:3306
./ApiNullPointer/./mvnw clean spring-boot:run -f ./ApiNullPointer/pom.xml
```

```sh
# Run Webapp
export VITE_BASE_URL_API=http://localhost:8000/api
yarn --cwd ./WebAppNullPointer/ dev
```

### Endpoints

```Frontend``` - [http://localhost:5173](http://localhost:5173)

```Backend``` - [http://localhost:8000/api/perguntas](http://localhost:8000/api/perguntas)

```Database UI``` - [http://localhost:5000](http://localhost:5000)

```Database Server``` - localhost:3306