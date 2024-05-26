# Estructura del proyecto 

Información sobre la estructura del proyecto

## Estructura general

```plaintext
project-root/
├── assets/
├── dist/
├── node_modules/
├── public/
├── src/
│   ├── components/
│   ├── img/
│   ├── services/
│   └── test/
├── .dockerignore
├── .eslintrc.js
├── .gitignore
├── .hintrc
├── App.css
├── App.tsx
├── authprovider.tsx
├── docker-compose.yml
├── Dockerfile
├── index.css
├── index.html
├── main.tsx
├── package-lock.json
├── package.json
├── protectedRoute.tsx
├── routes.tsx
├── tsconfig.json
└── vite.env.d.ts
```

## Descripción de Directorios y Archivos

### `assets`
Contiene archivos estáticos como imágenes, fuentes, etc.

### `dist`
Directorio donde se generan los archivos de construcción para producción.

### `node_modules`
Contiene las dependencias y módulos instalados a través de npm.

### `public`
Archivos públicos que se sirven tal cual, incluyendo el archivo `index.html`.

### `src`
Directorio principal del código fuente.

### `src/components`
Contiene los componentes reutilizables de la aplicación.

### `src/img`
Contiene las imágenes utilizadas en la aplicación.

### `src/services`
Contiene los servicios y utilidades de la aplicación, como las llamadas a APIs.

### `src/test`
Contiene los archivos de pruebas y test unitarios.

### `.dockerignore`
Especifica los archivos y directorios que Docker debe ignorar.

### `.eslintrc.js`
Configuración para ESLint, una herramienta para identificar y reportar patrones en el código JavaScript/TypeScript.

### `.gitignore`
Especifica los archivos y directorios que Git debe ignorar.

### `.hintrc`
Configuración para Webhint, una herramienta para analizar la salud del sitio web.

### `App.css`
Archivo de estilos específicos para el componente principal de la aplicación.

### `App.tsx`
Componente principal de la aplicación en TypeScript.

### `authprovider.tsx`
Proveedor de autenticación para gestionar el estado de autenticación en la aplicación.

### `docker-compose.yml`
Configuración de Docker Compose para definir y ejecutar aplicaciones Docker multi-contenedor.

### `Dockerfile`
Instrucciones para construir la imagen de Docker de la aplicación.

### `index.css`
Archivo de estilos globales.

### `index.html`
Archivo HTML principal.

### `main.tsx`
Archivo de entrada principal para el frontend en TypeScript.

### `package-lock.json`
Archivo generado automáticamente que describe las dependencias instaladas en el proyecto.

### `package.json`
Archivo que contiene la configuración del proyecto y las dependencias.

### `protectedRoute.tsx`
Componente para gestionar rutas protegidas que requieren autenticación.

### `routes.tsx`
Define las rutas principales de la aplicación.

### `tsconfig.json`
Configuración del compilador TypeScript.

### `vite.env.d.ts`
Declaraciones de tipos de entorno para Vite.
