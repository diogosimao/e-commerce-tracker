e-commerce-tracker - Django + Angular
=====================================================


Requirements
=============
* Docker CE (lastest)
* Docker-compose (latest)

Installation
=============

Docker, see https://docs.docker.com/installation/
Docker-compose, see https://docs.docker.com/compose/install/

Stack
=============
* Python3
* pip
* Django
* AngularJS
* GulpJS
* Bootstrap3
* Python3 Docker image
* NodeJS Docker image

Run development server
=============

```sh
# start django dev server & frontend builder
./bin/development.sh
```

App should be up on [http://172.17.0.2:4000](http://172.17.0.2:4000), served by Browsersync.
