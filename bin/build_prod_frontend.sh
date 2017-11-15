#!/bin/bash
#builds frontend to frontend/dist

#DOCKER_CONFIG=${DOCKER_CONFIG:-docker-compose.yml}
DOCKER_CONFIG_PROD=${DOCKER_CONFIG_PROD:-docker-compose-prod.yml}

docker-compose -f $DOCKER_CONFIG_PROD run --rm frontendprod gulp build
docker-compose -f $DOCKER_CONFIG_PROD run --rm backendprod python3 manage.py collectstatic --noinput