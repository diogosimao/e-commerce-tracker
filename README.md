e-commerce-tracker - Django + Angular
=====================================================


Requirements
=============
* Docker CE (lastest)
* Docker-compose (latest)

Installation
=============

* Docker, see https://docs.docker.com/installation/
* Docker-compose, see https://docs.docker.com/compose/install/

Stack
=============
* Python 3.5
* pip
* Django
* AngularJS
* GulpJS
* Bootstrap3
* Python3 Docker image
* NodeJS Docker image
* Nginx Docker image
* Postgres Docker image

Run development server
=============

```sh
# start django dev server & frontend builder
./bin/development.sh
```

App should be up on [http://localhost:8000](http://localhost:8000), served by Browsersync.


Run production server
==============

```sh
# build frontend,
# build backend,
# collect django static files,
./bin/build_prod_frontend.sh

#stop production server
./bin/stop_production.sh

#start production server
./bin/start_production.sh
```
App should be up on [http://localhost:8000/](http://localhost:8000/)