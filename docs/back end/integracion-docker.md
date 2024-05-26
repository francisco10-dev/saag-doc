# Integración con Docker

Se ha creado un archivo Dockerfile en la raiz del proyecto, que genera la creación de una imagen de Docker

```Dockerfile
# Usa una imagen base de Node.js
FROM node:alpine

# Establece el directorio de trabajo dentro del contenedor
WORKDIR /usr/src/app

# Copia los archivos package.json y package-lock.json (si existe) al directorio de trabajo
COPY package*.json ./

# Instala las dependencias del proyecto
RUN npm install

# Copia el resto de los archivos de la aplicación al directorio de trabajo del contenedor
COPY . .

# Expon el puerto en el que el servidor Express escuchará
EXPOSE 3001

# Comando para ejecutar la aplicación cuando el contenedor se inicie
CMD ["node", "index.js"] 
```