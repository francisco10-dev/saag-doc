# Login

Esta documentación proporciona una descripción detallada de las funcionalidades y los endpoints disponibles en nuestra aplicación backend basada en Express.js y Sequelize.


## Login

### Login
- **URL**: `/saag/login/`
- **Método**: `POST`
- **Descripción**: Permite a los usuarios autenticarse en la aplicación y obtener un token de autenticación válido.
- **Cuerpo de la Solicitud**:
  ```json
    {
        "nombreUsuario": "Pedro123",
        "contrasena": "hashedPassword5#"
    }
  ```

### Logout

- **URL**: `/saag/logout/:token`
- **Método**: `POST`
- **Descripción**: Permite a los usuarios cerrar sesión en la aplicación, registrando la acción para fines de auditoría. Se requiere un token de autenticación válido.

### Refrescar token

- **URL**: `/saag/refresh/:token`
- **Método**: `POST`
- **Descripción**:  Renueva el token de autenticación existente, extendiendo la sesión del usuario sin necesidad de volver a autenticarse.