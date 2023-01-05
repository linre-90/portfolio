### Development

-   Development requires local java 19 (openjdk)
-   Development is made running the Spring boot project without docker and development database is created with docker in file "docker-compose-dev.yml".

### Local Docker deploy testing

-   Build app to jar file with "./mvnw package" command. Remember to adjust application.properties to use prod file.
-   Fill "docker-compose-prod.yml" file. Example file is provided "docker-compose-prod-example.yml".
-   Run docker compose build for file "docker-compose-build.yml".
-   Run docker compose up for file "docker-compose-prod.yml". Docker should spin up 4 different containers. Only proxy container is exposed to interwebster.

### Deploy app

-   Target machine needs docker and docker compose. Dev machine requires node.js to be installed.
-   Run script located in "Build/index.js" and give jar file name as argument.
-   This fills "Build/deployment" folder with all necessary files and removes all old .jar files from "Build/deployment/target" directory.
-   Move the "Build/deployment" folder to target machine, build image with docker compose build, run application with docker compose.
