# Documentos

Esta documentación proporciona una descripción detallada de las funcionalidades y los endpoints disponibles en nuestra aplicación backend basada en Express.js y Sequelize.

## Autenticación

Se requiere un token de autenticación en la cabecera de la solicitud para acceder a las rutas.

  - **Headers**:
    - `Authorization`: Token de autenticación del usuario.

## Endpoints Documentos

### Registrar Documento

- **URL**: `/documentos/registrar-documento`
- **Método**: `POST`
- **Descripción**: Permite registrar un nuevo documento en la aplicación.
- **Parámetros de la Solicitud**:
  - `idColaborador`: ID del colaborador asociado al documento.
  - `licencia`: Si el documento ingresado corresponde a una licencia, se indica en este campo el nombre de la licencia a registrar de lo contrario enviar como `null`.
  - `curso`: Si el documento ingresado corresponde a un curso, se indica en este campo el nombre del curso a registrar de lo contrario enviar como `null`.
  - `fechaVencimiento`: Fecha de vencimiento del documento. Si el documento corresponde a una licencia ó a un curso este campo debe obligatoriamente no ir nulo de lo contrario es opcional.
  - Archivos PDF a cargar. Se permiten hasta 10 archivos en una sola solicitud.


### Obtener documentos

- **URL**: `saag/documentos/`
- **Método**: `GET`
- **Descripción**: Obtiene todos los documentos. Solo accesible para administradores.

### Obtener documento

- **URL**: `saag/obtener-documento/:id`
- **Método**: `GET`
- **Descripción**: Obtiene la información de un documento. Solo accesible para administradores.

### Documentos de un colaborador

- **URL**: `saag/colaborador-documento/:idColaborador`
- **Método**: `GET`
- **Descripción**: Obtiene todos los documentos asociados a un colaborador. Solo accesible para administradores.

### Foto de un colaborador

- **URL**: `saag/documentos/obtener-foto/:idColaborador`
- **Método**: `GET`
- **Descripción**: Obtiene la foto de carnet de un colaborador. Solo accesible para administradores.

### Eliminar Documento

- **URL**: `saag/eliminar-documento/:id`
- **Método**: `DELETE`
- **Descripción**: Elimina un documento existente. Solo accesible para administradores.


