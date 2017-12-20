#!/bin/bash
# start production server

export DOCKER_CONFIG_PROD=${DOCKER_CONFIG_PROD:-docker-compose-prod.yml}
docker-compose -f $DOCKER_CONFIG_PROD run --rm backendprod python3 manage.py makemigrations
docker-compose -f $DOCKER_CONFIG_PROD run --rm backendprod python3 manage.py migrate
docker-compose -f $DOCKER_CONFIG_PROD up -d
echo "started"