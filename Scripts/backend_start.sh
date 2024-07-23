#!/bin/bash

WEBAPP_BASE_URL=http://localhost:5173
DB_HOST=localhost:3306

export WEBAPP_BASE_URL DB_HOST

echo "WEBAPP_BASE_URL set to $WEBAPP_BASE_URL"
echo "DB_HOST set to $DB_HOST"

../ApiNullPointer/./mvnw clean spring-boot:run -f ../ApiNullPointer/pom.xml
