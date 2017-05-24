# we use the NodeJS image as our base image
FROM node:6.9.1
MAINTAINER Jeroen Berndsen <jeroen@frontmen.nl>

# we create an unprivileged user without a shell and switch to that
# everything would run as root, otherwise, which is against security best practices
RUN useradd --user-group --create-home --shell /bin/false appuser
ENV HOME=/home/appuser

# create a directory to hold our app and set it as our workdir (i.e. run further commands from there)
RUN mkdir $HOME/wwwroot
WORKDIR $HOME/wwwroot

# copy application dependency definition and install dependencies
COPY package.json $HOME/wwwroot
RUN npm install

# copy our application into the docker (as root), including default configuration for dev purposes
COPY app $HOME/wwwroot/app
COPY server.js $HOME/wwwroot

# transfer ownership to the unprivileged app user and switch to it
RUN chown -R appuser:appuser $HOME/*
USER appuser

# we assume sensible default config from docker-compose.yml here
EXPOSE 4200
CMD ["node", "server.js"]
