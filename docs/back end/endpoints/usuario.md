# Usuarios

Esta documentación proporciona una descripción detallada de las funcionalidades y los endpoints disponibles en nuestra aplicación backend basada en Express.js y Sequelize.

## Autenticación

Se requiere un token de autenticación en la cabecera de la solicitud para acceder a las rutas.

  - **Headers**:
    - `Authorization`: Token de autenticación del usuario.

## Usuarios

### Registrar usuario
- **URL**: `/saag/agregar-usuario/`
- **Método**: `POST`
- **Descripción**: Crea un nuevo usuario.
- **Cuerpo de la Solicitud**:
  ```json
  {
    "nombreUsuario": "Pedro123",
    "contrasena": "hashedPassword5#",
    "rol": "admin",
    "idColaborador": "1"
  }
  la contraseña debe tener al menos una letra mayúscula, un número, un simbolo.
  ```
### Obtener usuarios

- **URL**: `/saag/usuarios/`
- **Método**: `GET`
- **Descripción**: Obtiene todos los usuarios registrados.

### Obtener usuario

- **URL**: `/saag/usuario/:id`
- **Método**: `GET`
- **Descripción**: Obtiene un usuario por su ID. 

### Actualizar usuario
- **URL**: `saag/actualizar-usuario/:id`
- **Método**: `PUT`
- **Descripción**: Actualiza un usuario.
- **Cuerpo de la Solicitud**:
  ```json
  {
    "nombreUsuario": "Pedro123",
    "contrasena": "hashedPassword5#",
    "rol": "admin",
    "idColaborador": "1"
  }
  ```

### Eliminar usuario

- **URL**: `/saag/eliminar-usuario/:id`
- **Método**: `DELETE`
- **Descripción**: Elimina un usuario por su ID. 

### Obtener supervisores

- **URL**: `/saag/supervisores/`
- **Método**: `GET`
- **Descripción**: Obtiene todos los usuarios con rol `supervisor.`