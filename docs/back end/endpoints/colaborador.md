# Colaboradores

Esta documentación proporciona una descripción detallada de las funcionalidades y los endpoints disponibles en nuestra aplicación backend basada en Express.js y Sequelize.

## Autenticación

Se requiere un token de autenticación en la cabecera de la solicitud para acceder a las rutas.

  - **Headers**:
    - `Authorization`: Token de autenticación del usuario.

## Endpoints Colaboradores

### Agregar Colaborador

- **URL**: `saag/agregar-colaborador/`
- **Método**: `POST`
- **Descripción**: Crea un nuevo colaborador.
- **Cuerpo de la Solicitud**:
  ```json
    {
    "identificacion": "123456789",
    "nombre": "Juan Perez",
    "correoElectronico": "juan.perez@example.com",
    "domicilio": "Calle Principal #123",
    "fechaNacimiento": "1990-05-15",
    "equipo": "Equipo de Desarrollo",
    "estado": "Activo",
    "fechaIngreso": "2020-01-01"
    }
  ```

### Actualizar Colaborador

- **URL**: `saag/actualizar-colaborador/:id`
- **Método**: `PUT`
- **Descripción**: Actualiza un colaborador existente.
- **Cuerpo de la Solicitud**: Ver formato de creación de colaborador.

### Obtener colaboradores

- **URL**: `saag/colaboradores/`
- **Método**: `GET`
- **Descripción**: Obtiene todos los colaboradores. Solo accesible para administradores.

### Colaboradores con usuario

- **URL**: `saag/colaboradores-with-user/`
- **Método**: `GET`
- **Descripción**: Obtiene todos los colaboradores que tengan un usuario relacionado.

### Obtener colaborador

- **URL**: `saag/colaborador/:id`
- **Método**: `GET`
- **Descripción**: Obtiene la información de un colaborador específico. Solo accesible para administradores.

### Colaboradores sin usuario

- **URL**: `saag/colaboradores-usuarios`
- **Método**: `GET`
- **Descripción**: Obtiene todos los colaboradores que no tengan un usuario relacionado.

### Eliminar Colaborador

- **URL**: `saag/eliminar-colaborador/:id`
- **Método**: `DELETE`
- **Descripción**: Elimina un colaborador existente. Solo accesible para administradores.


