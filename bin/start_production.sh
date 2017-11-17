#!/bin/bash
# start production server

DOCKER_CONFIG=${DOCKER_CONFIG:-docker-compose-prod.yml}
docker-compose -f $DOCKER_CONFIG run --rm backendprod python3 manage.py makemigrations
docker-compose -f $DOCKER_CONFIG run --rm backendprod python3 manage.py migrate
docker-compose -f $DOCKER_CONFIG up -d
echo "started"