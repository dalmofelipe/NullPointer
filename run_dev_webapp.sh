#!/bin/bash

VITE_BASE_URL_API=http://localhost:8000/api

export VITE_BASE_URL_API

echo "VITE_BASE_URL_API set to $VITE_BASE_URL_API"

yarn --cwd WebAppNullPointer/ dev