#!/bin/bash

WEBAPP_BASE_URL=http://localhost:5173

export WEBAPP_BASE_URL

echo "WEBAPP_BASE_URL set to $WEBAPP_BASE_URL"

ApiNullPointer/./mvnw clean spring-boot:run -f ApiNullPointer/pom.xml
