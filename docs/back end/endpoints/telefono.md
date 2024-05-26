# Teléfonos

Esta documentación proporciona una descripción detallada de las funcionalidades y los endpoints disponibles en nuestra aplicación backend basada en Express.js y Sequelize.

## Autenticación

Se requiere un token de autenticación en la cabecera de la solicitud para acceder a las rutas.

  - **Headers**:
    - `Authorization`: Token de autenticación del usuario.

## Endpoints Teléfonos

### Agregar Teléfono

- **URL**: `saag/telefonos/agregar-telefono/`
- **Método**: `POST`
- **Descripción**: Crea un nuevo teléfono.
- **Cuerpo de la Solicitud**:
  ```json
    {
      "numeroTelefono": "1234567890",
      "idColaborador": "1"
    }

### Actualizar Teléfono

- **URL**: `saag/telefonos/actualizar-telefono/:id`
- **Método**: `PUT`
- **Descripción**: Actualiza un registro existente.
- **Cuerpo de la Solicitud**: Ver formato de creacion de teléfono.

### Obtener Teléfonos de un colaborador

- **URL**: `saag/telefonos/obtener-por-colaborador/:id`
- **Método**: `GET`
- **Descripción**: Obtiene todos los teléfonos de un colaborador en especifíco.

### Eliminar Teléfono

- **URL**: `saag/telefonos/eliminar-telefono/:id`
- **Método**: `DELETE`
- **Descripción**: Elimina un teléfono existente. Solo accesible para administradores.