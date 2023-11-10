# Imagen de node
FROM node:alpine

# Set del working directory
WORKDIR /usr/scr/app

# Copiamos los archivos al contenedor
COPY . .

# Comando para correr el programa
CMD [ "npm", "install"]
CMD [ "node", "icos-demo-job.js" ] 