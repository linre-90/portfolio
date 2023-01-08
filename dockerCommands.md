# Just a memo for docker commands

### Build images

docker build -t portfolio/proxy:latest -f Dockerfile-proxy .
docker build -t portfolio/portfolioapp:latest -f Dockerfile --build-arg JAR_FILE=portfolio-1.1.1.jar .

### Save images to tar file

docker save --output ./DImages/proxy.tar portfolio/proxy
docker save --output ./DImages/portfolioapp.tar portfolio/portfolioapp

### Load images from tar

sudo docker load --input portfolioapp.tar
sudo docker load --input proxy.tar
