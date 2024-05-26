# Puestos

Esta documentación proporciona una descripción detallada de las funcionalidades y los endpoints disponibles en nuestra aplicación backend basada en Express.js y Sequelize.

## Autenticación

Se requiere un token de autenticación en la cabecera de la solicitud para acceder a las rutas.

  - **Headers**:
    - `Authorization`: Token de autenticación del usuario.

## Endpoints Puestos

### Agregar Puesto

- **URL**: `saag/agregar-puesto/`
- **Método**: `POST`
- **Descripción**: Crea un nuevo puesto.
- **Cuerpo de la Solicitud**:
  ```json
    {
    "nombre": "Gerente de TI",
    }
  ```

### Actualizar Puesto

- **URL**: `saag/actualizar-puesto/:id`
- **Método**: `PUT`
- **Descripción**: Actualiza un puesto existente.
- **Cuerpo de la Solicitud**: Ver formato de creación de puesto.

### Obtener puestos

- **URL**: `saag/puestos/`
- **Método**: `GET`
- **Descripción**: Obtiene todos los puestos. Solo accesible para administradores.

### Obtener puesto

- **URL**: `saag/puesto/:id`
- **Método**: `GET`
- **Descripción**: Obtiene la información de un puesto específico. Solo accesible para administradores.

### Eliminar Puesto

- **URL**: `saag/eliminar-puesto/:id`
- **Método**: `DELETE`
- **Descripción**: Elimina un puesto existente. Solo accesible para administradores.


