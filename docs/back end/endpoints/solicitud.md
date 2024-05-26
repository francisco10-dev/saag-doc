# Solicitudes

Esta documentación proporciona una descripción detallada de las funcionalidades y los endpoints disponibles en nuestra aplicación backend basada en Express.js y Sequelize.

## Autenticación

Se requiere un token de autenticación en la cabecera de la solicitud para acceder a las rutas.

  - **Headers**:
    - `Authorization`: Token de autenticación del usuario.

## Endpoints Solicitudes

### Agregar Solicitud

- **URL**: `saag/agregar-solicitud/`
- **Método**: `POST`
- **Descripción**: Crea una nueva solicitud.
- **Cuerpo de la Solicitud**:
  ```json
  {
    "conGoceSalarial": true,
    "tipoSolicitud": "vacaciones",
    "asunto": "Vacaciones de verano",
    "nombreColaborador": "Juan Perez",
    "nombreEncargado": "María López",
    "fechaSolicitud": "2024-05-13",
    "fechaInicio": "2024-07-01",
    "fechaFin": "2024-07-15",
    "horaInicio": "09:00:00",
    "horaFin": "18:00:00",
    "sustitucion": "SI",
    "nombreSustituto": "Pedro Rodríguez",
    "estado": "Pendiente",
    "comentarioTalentoHumano": null,
    "fechaRecibido": null,
    "idColaborador": 5,
    "nombreArchivo": "vacaciones.pdf",
    "comprobante": null,
    "tamanio": "200 KB"
  }

### Actualizar Solicitud

- **URL**: `saag/actualizar-solicitud/:id`
- **Método**: `PUT`
- **Descripción**: Actualiza una solicitud existente.
- **Cuerpo de la Solicitud**: Ver formato de creación de solicitud.

### Obtener solicitudes

- **URL**: `saag/solicitudes/`
- **Método**: `GET`
- **Descripción**: Obtiene todas las solicitudes. Solo accesible para administradores.

### Solicitudes por Supervisor

- **URL**: `saag/solicitudes-por-supervisor/:id/`
- **Método**: `GET`
- **Descripción**: Obtiene las solicitudes asignadas a un supervisor específico. Solo accesible para supervisores.

### Obtener Detalles de una Solicitud

- **URL**: `saag/solicitud/:id`
- **Método**: `GET`
- **Descripción**: Obtiene los detalles de una solicitud específica. Solo accesible para administradores.

### Todas las solicitudes de un colaborador

- **URL**: `saag/solicitudes-por-colaborador/:id`
- **Método**: `GET`
- **Descripción**: Obtiene todas las solicitudes realizadas por un colaborador específico. Solo accesible para administradores.

### Obtener Comprobante de una Solicitud

- **URL**: `saag/obtener-comprobante/:id`
- **Método**: `GET`
- **Descripción**: Obtiene el comprobante adjunto a una solicitud.

### Eliminar Solicitud

- **URL**: `saag/eliminar-solicitud/:id`
- **Método**: `DELETE`
- **Descripción**: Elimina una solicitud existente. Solo accesible para administradores.


