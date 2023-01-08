# My portfolio site

This is my personal portfolio site.

### Development

-   Development requires local java 19 (openjdk)
-   Development is made running the Spring boot project without docker and development database is created with docker in file "docker-compose-dev.yml".

### Deploy app

-   Target machine needs docker and docker compose.
-   Build application with "./mvnw package" command.
-   Build images with Dockerfile and Dockerfile-proxy
-   Packave images to tar
-   Move packaged images and docker-compose.yml to deployment machine
-   Docker load images
-   run docker compose up -d
