# Instalación

Guía para instalar y configurar el back end.

## Prerrequisitos

Asegúrate de tener instalado lo siguiente en tu máquina antes de comenzar:

- [Node.js](https://nodejs.org/) (versión 14 o superior)
- [npm](https://www.npmjs.com/)
- [Git](https://git-scm.com/)
- Base de datos (en este caso MySQL)

## Clonar el repositorio

Primero, clona el repositorio del proyecto desde GitHub:

```bash
git clone https://github.com/JordyBrown230/SAAG
cd SAAG
```

## Instalar dependencias

```bash
npm install
```

## Configuración del entorno

Crea un archivo .env en la raíz del proyecto y agrega las variables de entorno necesarias.

```bash
PORT=3000
DB_NAME=databse_name
DB_USER=database_user
DB_PASSWORD=database_password
DB_HOST=database_host
GM_MAIL=email
GM_PASS=email-password(contraseña de aplicación)
GM_HOSTED=smtp.gmail.com
GM_PORTMAIL= 465
```

### Sobre variables de entorno

Las variables de entorno GM_MAIL, GM_PASS, GM_HOSTED y GM_PORTMAIL son necesarias para configurar el envío de correos en la aplicación usando Nodemailer con Gmail. Aquí se explica cada una:

- GM_MAIL: Este es el correo electrónico que se utilizará como remitente para enviar los correos. Debe ser una cuenta de Gmail.
- GM_PASS: Esta es la contraseña de la aplicación de Gmail. Es importante generar una contraseña de aplicación en lugar de usar la contraseña normal de tu cuenta de Gmail para mejorar la seguridad. Puedes generar una contraseña de aplicación desde la configuración de seguridad de tu cuenta de Google.
- GM_HOSTED: Especifica el host del servicio SMTP de Gmail, que es smtp.gmail.com.
- GM_PORTMAIL: Este es el puerto del servidor SMTP de Gmail. El puerto 465 se utiliza para conexiones seguras SSL. 

## Base de datos

Asegúrate de tener una base de datos MySQL previamente creada con el nombre especificado en el archivo .env, de lo contrario al ejecutar el servidor dará problemas.

## Ejecutar el servidor

Con node

```bash
node index.js
```

Con nodemon

```bash
nodemon index.js
```

## Probar la instalación

Para verificar que todo esté funcionando correctamente, se recomienda utilizar la herramienta [PostMan](https://www.postman.com/downloads/) para probar los endpoints del API.
