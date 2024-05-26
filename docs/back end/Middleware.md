# Middleware

Esta documentación detalla los middlewares utilizados en la aplicación.

## Middleware de Auditoría de Tablas

### Descripción
Este middleware registra la auditoría de las operaciones realizadas en las tablas de la base de datos.

### Funcionalidad
- Registra la auditoría de las operaciones realizadas en las tablas de la base de datos.
- Utiliza los datos proporcionados en la solicitud para crear registros de auditoría.
- Captura la dirección IP y el agente de usuario del cliente que realizó la solicitud.

#### Código
```javascript
const { createAuditTable } = require('../controllers/auditoria.controller');

const auditTables = async (req, res, next) => {
    try {       
        const datos = req.datos;
        const direccionIp = req.ip || req.connection.remoteAddress;
        const agenteUsuario = req.get('user-agent') || 'unknown';
        await createAuditTable(req, datos, direccionIp, agenteUsuario);
    } catch(error) {
        throw new Error("Ocurrió un error en el servidor.");
    }
    next();
};

module.exports = { auditTables };
```

## Middleware de Auditoría de Inicio de Sesión

### Descripción
Este middleware registra la auditoría de los inicios de sesión de los usuarios en la aplicación.

### Funcionalidad
- Registra la auditoría de los inicios de sesión de los usuarios.
- Captura el nombre de usuario, el éxito del inicio de sesión, el token de autenticación, la dirección IP y el agente de usuario del cliente que realizó el inicio de sesión.

### Código
```javascript
const auditLogin = async (req, res) => {

    try{  
        const nombreUsuario =  req.body.nombreUsuario;
        const exito = req.exito;
        const token = req.token;
        const direccionIp = req.ip || req.connection.remoteAddress;
        const agenteUsuario = req.get('user-agent') || 'unknown';
        await createAuditLogin(req, res, nombreUsuario, exito, token, direccionIp, agenteUsuario);

    }catch(error) {
        throw new Error("Ocurrió un error en el servidor.");
    }
};
```

## Middleware de Auditoría de Cierre de Sesión

### Descripción
Este middleware actualiza el registro de auditoría al cerrar sesión de un usuario en la aplicación.

### Funcionalidad
- Actualiza el registro de auditoría al cerrar sesión de un usuario.
- Utiliza el token de autenticación proporcionado en la solicitud para identificar al usuario que cierra sesión.

### Código

```javascript
const auditLogout = async (req, res) => {


    try{  
        const token = req.params.token;
       
        await updateAuditLogin(req, res, token);

    }catch(error) {
        throw new Error("Ocurrió un error en el servidor.");
    }
};


module.exports = { auditTables, auditLogin, auditLogout };
```
## Middleware de Autenticación de Token

### Descripción
Este middleware verifica la validez de un token de autenticación JWT enviado en el encabezado de la solicitud.

### Funcionalidad
- Extrae el token de autenticación del encabezado de la solicitud.
- Verifica la validez del token utilizando una clave secreta.
- Si el token es válido, añade el objeto de usuario decodificado a la solicitud (`req.user`) y pasa al siguiente middleware.
- Si el token no es válido o no está presente, devuelve un error de acceso denegado.

### Código
```javascript
    const jwt = require('jsonwebtoken');

    function authenticateToken(req, res, next) {
    const token = req.header('Authorization').split(" ")[1];
    if (!token) return res.status(401).json({ message: 'Acceso denegado' });

    jwt.verify(token, 'secret_key', (err, user) => {
        if (err) return res.status(403).json({ message: 'Token inválido' });
        req.user = user;
        next();
    });
    }
```

## Middleware de Autorización de Roles

### Descripción
Este middleware verifica si el usuario tiene los roles necesarios para acceder a una ruta específica.

### Funcionalidad
- Verifica si el rol del usuario (extraído del objeto `req.user`) coincide con al menos uno de los roles especificados.
- Si el usuario tiene permisos, permite el acceso a la ruta.
- Si el usuario no tiene los permisos necesarios, devuelve un error de permisos insuficientes.

### Código

```javascript
    function authorizeRoles(roles) {
        return (req, res, next) => {
            if (!roles.includes(req.user.rol)) {
            return res.status(403).json({ message: 'No tienes permisos para acceder a esta ruta' });
            }
            next();
        };
    }

    module.exports = { authenticateToken, authorizeRoles};
```
