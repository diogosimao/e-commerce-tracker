e-commerce-tracker
=====================================================

Stack
=============

* pipenv
* pip
* Python 3.6

Run with pipenv
===============

    $ pipenv --three && pipenv shell
    $ pipenv install -r requirements_docker.txt

if necessary:

    $ pipenv install -r backend/requirements.txt

Docker setup requirements 
==========================

* Docker CE (lastest) installed
    * Installation    
        * Docker, see [here](https://docs.docker.com/installation/)
    
    * Used Docker images:
        * Python, Postgres, Nginx, Node

Run development server with docker
==================================

```sh
# start django dev server & frontend builder
./bin/development.sh
```

App should be up on [http://localhost:8000](http://localhost:8000), served by Browsersync.

Run production server
=====================

```sh
# build frontend,
# build backend,
# collect django static files,
./bin/build_production.sh

#stop production and development server  
./bin/stop_production.sh
./bin/stop_development.sh

#start production server
./bin/start_production.sh
```
App should be up on [http://localhost:8000/](http://localhost:8000/)
