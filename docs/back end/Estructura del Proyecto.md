# Estructura del proyecto 

Información sobre la estructura del proyecto

## Estructura general

```plaintext
project-root/
├── controllers/
├── emailTemplates/
├── img/
├── middlewares/
├── mjs/
├── models/
├── node_modules/
├── routes/
├── tests/
├── .dockerignore
├── .env
├── .env.example
├── .gitignore
├── Dockerfile
├── index.js
├── package-lock.json
├── package.json
```

## Descripción de Directorios y Archivos

### `controllers/`
Este directorio contiene los controladores de nuestra aplicación. Los controladores manejan la lógica de las solicitudes entrantes y envían las respuestas adecuadas.

### `emailTemplates/`
Aquí se encuentran las plantillas de correo electrónico utilizadas por la aplicación para enviar correos electrónicos a los usuarios.

### `img/`
Este directorio almacena imágenes que pueden ser utilizadas en la aplicación, ya sea para respuestas o recursos estáticos.

### `middlewares/`
Este directorio incluye middleware personalizado que puede ser usado para procesar las solicitudes antes de que lleguen a los controladores.

### `mjs/`
Este directorio es para módulos JavaScript (probablemente utilidades o funciones reutilizables) que son utilizados en varias partes de la aplicación.

### `models/`
Contiene los modelos de Sequelize que representan las tablas de la base de datos. Cada archivo de modelo define una estructura y relaciones específicas para una tabla en la base de datos.

### `node_modules/`
Este directorio es generado automáticamente por npm o Yarn y contiene todas las dependencias de terceros necesarias para el proyecto.

### `routes/`
Aquí se definen las rutas de la aplicación. Cada archivo en este directorio asocia rutas específicas con sus respectivos controladores.

### `tests/`
Este directorio contiene pruebas unitarias y de integración para la aplicación, asegurando que cada parte funcione correctamente.

## Archivos de Configuración y Raíz

### `.dockerignore`
Lista de archivos y directorios que Docker debe ignorar al construir la imagen del contenedor.

### `.env`
Archivo que contiene las variables de entorno para la configuración del entorno de desarrollo. **Este archivo no debe ser incluido en el control de versiones.**

### `.env.example`
Ejemplo de archivo de variables de entorno. Este archivo debe ser incluido en el control de versiones para mostrar a otros desarrolladores qué variables de entorno son necesarias.

### `.gitignore`
Lista de archivos y directorios que Git debe ignorar al hacer commits.

### `Dockerfile`
Archivo de configuración utilizado para crear una imagen Docker de la aplicación.

### `index.js`
Punto de entrada principal de la aplicación. Aquí es donde se configura y se inicia el servidor Express.

### `package-lock.json`
Archivo generado automáticamente por npm que detalla la versión específica de cada dependencia instalada en el proyecto.

### `package.json`
Archivo de configuración del proyecto que contiene metadatos sobre el proyecto y las dependencias necesarias.

