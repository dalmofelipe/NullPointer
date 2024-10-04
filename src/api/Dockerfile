ARG WEBAPP_BASE_URL=http://localhost:5173

FROM openjdk:17-jdk-alpine AS builder
WORKDIR /api
COPY . .
ENV WEBAPP_BASE_URL=$WEBAPP_BASE_URL
RUN ./mvnw clean package -DskipTests

FROM openjdk:17-jdk-alpine
WORKDIR /api
COPY --from=builder /api/target/ApiNullPointer-0.0.1-SNAPSHOT.jar ./api-nullpointer.jar
EXPOSE 8000
ENTRYPOINT ["java","-jar","api-nullpointer.jar"]