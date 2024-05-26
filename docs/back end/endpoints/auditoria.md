# Auditorías

Esta documentación proporciona una descripción detallada de las funcionalidades y los endpoints disponibles en nuestra aplicación backend basada en Express.js y Sequelize.

## Autenticación

Se requiere un token de autenticación en la cabecera de la solicitud para acceder a las rutas.

  - **Headers**:
    - `Authorization`: Token de autenticación del usuario.

## Auditorías - Actividad

### Obtener Auditorías

- **URL**: `saag/auditorias/`
- **Método**: `GET`
- **Descripción**: Obtiene todas las auditorías registradas. Solo accesible para administradores.

### Obtener Auditoría

- **URL**: `saag/auditoria/:id`
- **Método**: `GET`
- **Descripción**: Obtiene la información de una auditoría específica. Solo accesible para administradores.

### Eliminar Auditoría

- **URL**: `saag/eliminar-auditoria/:id`
- **Método**: `DELETE`
- **Descripción**: Elimina una auditoría existente. Solo accesible para administradores.

## Auditorías - Inicios de sesión

### Obtener sesiones

- **URL**: `saag/auditoriasLogin/`
- **Método**: `GET`
- **Descripción**: Obtiene todas las auditorías registradas. Solo accesible para administradores.

### Obtener Auditoría

- **URL**: `saag/auditorialogin/:id`
- **Método**: `GET`
- **Descripción**: Obtiene la información de una auditoría específica. Solo accesible para administradores.

### Eliminar Auditoría

- **URL**: `saag/eliminar-auditorialogin/:id`
- **Método**: `DELETE`
- **Descripción**: Elimina una auditoría existente. Solo accesible para administradores.

