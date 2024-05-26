# Modélos de Base de Datos

### Modelo: Colaborador

- **Descripción**: Este modelo representa a los colaboradores de la empresa.

| Campo            | Tipo          | Restricciones     | Descripción                                |
|------------------|---------------|-------------------|--------------------------------------------|
| idColaborador    | INTEGER       | PK, Autoincrement | Identificador único del colaborador.       |
| identificacion   | STRING(100)   | Not Null, Unique  | Identificación del colaborador.            |
| fotoCarnet       | BLOB('long')  | Nullable          | Foto del carnet del colaborador.          |
| nombre           | STRING(150)   | Not Null          | Nombre del colaborador.                    |
| correoElectronico| STRING(45)    | Not Null, Unique  | Correo electrónico del colaborador.        |
| domicilio        | STRING(250)   | Not Null          | Domicilio del colaborador.                 |
| fechaNacimiento  | DATEONLY      | Not Null          | Fecha de nacimiento del colaborador.       |
| equipo           | STRING(200)   | Not Null          | Equipo al que pertenece el colaborador.    |
| unidad           | STRING(250)   | Nullable          | Unidad a la que pertenece el colaborador.  |
| tipoJornada      | STRING(50)    | Nullable          | Tipo de jornada laboral del colaborador.   |
| estado           | STRING(50)    | Not Null          | Estado actual del colaborador.             |
| fechaIngreso     | DATEONLY      | Not Null          | Fecha de ingreso del colaborador.          |
| fechaSalida      | DATEONLY      | Nullable          | Fecha de salida del colaborador.           |
| idPuesto         | INTEGER       | Nullable          | Identificador del puesto del colaborador.  |
| idColaborador_fk | INTEGER       | Nullable          | Identificador del supervisor del colaborador.|

### Modelo: Documento

- **Descripción**: Este modelo representa los documentos asociados a los colaboradores.

| Campo             | Tipo          | Restricciones     | Descripción                                 |
|-------------------|---------------|-------------------|---------------------------------------------|
| idDocumento       | INTEGER       | PK, Autoincrement| Identificador único del documento.          |
| licencia          | STRING(200)   | Nullable          | Tipo de licencia asociada al documento.    |
| curso             | STRING(200)   | Nullable          | Curso asociado al documento.                |
| nombreArchivo     | STRING(100)   | Not Null          | Nombre del archivo del documento.           |
| archivo           | BLOB('long')  | Not Null          | Archivo del documento.                      |
| tamano            | STRING(50)    | Nullable          | Tamaño del archivo del documento.           |
| fechaVencimiento  | DATEONLY      | Nullable          | Fecha de vencimiento del documento.         |
| fechaSubida       | DATEONLY      | Nullable          | Fecha de subida del documento.              |
| idColaborador     | INTEGER       | Not Null          | Identificador del colaborador asociado.     |

### Modelo: Puesto

- **Descripción**: Este modelo representa los puestos de trabajo en la empresa.

| Campo            | Tipo          | Restricciones     | Descripción                             |
|------------------|---------------|-------------------|-----------------------------------------|
| idPuesto         | INTEGER       | PK, Autoincrement| Identificador único del puesto.        |
| nombrePuesto     | STRING(80)    | Not Null          | Nombre del puesto de trabajo.          |


### Modelo: Usuario

- **Descripción**: Este modelo representa a los usuarios de la aplicación.

| Campo           | Tipo          | Restricciones   | Descripción                                |
|-----------------|---------------|-----------------|--------------------------------------------|
| idUsuario       | INTEGER       | PK, Autoincrement| Identificador único del usuario.          |
| nombreUsuario   | STRING(45)    | Not Null, Unique | Nombre de usuario para iniciar sesión.    |
| contrasena      | CHAR(64)      | Not Null        | Contraseña del usuario (hash).             |
| rol             | STRING(45)    | Not Null        | Rol del usuario en la aplicación.          |
| idColaborador   | INTEGER       | Not Null, Unique| Identificador del colaborador asociado.    |
| refreshToken    | STRING        | Nullable        | Token de actualización de sesión.          |

- **Relaciones**:
  - **Colaborador**: Un usuario está asociado a un colaborador en la base de datos.
    - **Alias**: colaborador


### Modelo: Solicitud

- **Descripción**: Este modelo representa las solicitudes realizadas por los colaboradores.

| Campo                  | Tipo          | Restricciones   | Descripción                                            |
|------------------------|---------------|-----------------|--------------------------------------------------------|
| idSolicitud            | INTEGER       | PK, Autoincrement| Identificador único de la solicitud.                   |
| conGoceSalarial        | BOOLEAN       | Not Null        | Indica si la solicitud tiene goce salarial.            |
| tipoSolicitud          | STRING(15)    | Not Null        | Tipo de solicitud (vacaciones, permisos, otro).              |
| asunto                 | STRING(45)    | Nullable        | Asunto o motivo de la solicitud.                        |
| nombreColaborador      | STRING(45)    | Not Null        | Nombre del colaborador que realiza la solicitud.        |
| nombreEncargado        | STRING(45)    | Nullable        | Nombre del encargado de revisar la solicitud.          |
| fechaSolicitud         | DATEONLY      | Not Null        | Fecha en que se realizó la solicitud.                  |
| fechaInicio            | DATEONLY      | Not Null        | Fecha de inicio de la solicitud.                        |
| fechaFin               | DATEONLY      | Not Null        | Fecha de fin de la solicitud.                           |
| horaInicio             | TIME          | Nullable        | Hora de inicio de la solicitud.                         |
| horaFin                | TIME          | Nullable        | Hora de fin de la solicitud.                            |
| sustitucion            | STRING(4)     | Nullable        | Indica si se requiere sustitución (SI/NO).             |
| nombreSustituto        | STRING(45)    | Nullable        | Nombre del sustituto, si aplica.                       |
| estado                 | STRING(100)   | Not Null        | Estado actual de la solicitud.                          |
| comentarioTalentoHumano| STRING(250)   | Nullable        | Comentario del departamento de Talento Humano.         |
| fechaRecibido          | DATEONLY      | Nullable        | Fecha en que se recibió la solicitud.                  |
| idColaborador          | INTEGER       | Not Null        | Identificador del colaborador asociado a la solicitud. |
| nombreArchivo          | STRING(100)   | Nullable        | Nombre del archivo adjunto a la solicitud.             |
| comprobante            | BLOB("long")  | Nullable        | Comprobante adjunto a la solicitud.                    |
| tamanio                | STRING(100)   | Nullable        | Tamaño del archivo adjunto.                            |

- **Relaciones**:
  - **Colaborador**: Una solicitud está asociada a un colaborador en la base de datos.
    - **Alias**: colaborador

### Modelo: TelefonoEmpleado

- **Descripción**: Este modelo representa los números de teléfono asociados a los colaboradores.

| Campo           | Tipo          | Restricciones   | Descripción                                         |
|-----------------|---------------|-----------------|-----------------------------------------------------|
| idTelefono      | INTEGER       | PK, Autoincrement| Identificador único del teléfono.                  |
| numeroTelefono  | STRING(50)    | Not Null        | Número de teléfono del colaborador.                |
| idColaborador   | INTEGER       | Not Null        | Identificador del colaborador asociado al teléfono. |

- **Relaciones**:
  - **Colaborador**: Un teléfono está asociado a un colaborador en la base de datos.
    - **Alias**: colaborador

### Modelo: Auditoria

- **Descripción**: Este modelo registra las acciones realizadas por los usuarios en la aplicación para fines de auditoría.

| Campo          | Tipo          | Restricciones   | Descripción                                             |
|----------------|---------------|-----------------|---------------------------------------------------------|
| idAuditoria   | INTEGER       | PK, Autoincrement| Identificador único de la auditoría.                   |
| idUsuario      | INTEGER       | Not Null        | Identificador del usuario que realizó la acción.       |
| nombreUsuario  | STRING(45)    | Not Null        | Nombre del usuario que realizó la acción.              |
| rol            | STRING(45)    | Not Null        | Rol del usuario que realizó la acción.                 |
| accion         | STRING(20)    | Not Null        | Acción realizada por el usuario (ej. crear, actualizar).|
| nombre         | STRING(45)    | Not Null        | Nombre del objeto afectado por la acción.             |
| datosAntiguos  | TEXT          | Nullable        | Datos antiguos del objeto antes de la acción.          |
| datosNuevos    | TEXT          | Nullable        | Datos nuevos del objeto después de la acción.          |
| fecha          | DATE          | Default: NOW    | Fecha y hora en que se realizó la acción.             |
| direccionIp    | STRING(45)    | Not Null        | Dirección IP desde donde se realizó la acción.         |
| agenteUsuario  | STRING(255)   | Not Null        | Agente de usuario (navegador) que realizó la acción.   |

- **Notas**:
  - Los campos `datosAntiguos` y `datosNuevos` contienen información en formato de texto sobre los cambios realizados en los datos del objeto.


### Modelo: AuditoriaLogin

- **Descripción**: Este modelo registra los intentos de inicio y cierre de sesión de los usuarios en la aplicación para fines de auditoría.

| Campo         | Tipo         | Restricciones   | Descripción                                              |
|---------------|--------------|-----------------|----------------------------------------------------------|
| idAuditoria   | INTEGER      | PK, Autoincrement| Identificador único de la auditoría de login.            |
| nombreUsuario | STRING(45)   | Not Null        | Nombre del usuario que intentó iniciar sesión.           |
| exito         | BOOLEAN      | Not Null        | Indica si el intento de inicio de sesión fue exitoso.    |
| fechaLogin    | DATE         | Nullable        | Fecha y hora del inicio de sesión.                       |
| fechaLogout   | DATE         | Nullable        | Fecha y hora del cierre de sesión.                       |
| token         | STRING       | Nullable        | Token asociado con la sesión.                            |
| direccionIp   | STRING       | Not Null        | Dirección IP desde donde se intentó iniciar sesión.      |
| agenteUsuario | STRING       | Not Null        | Agente de usuario (navegador) utilizado para iniciar sesión.|

- **Notas**:
  - El campo `exito` indica si el intento de inicio de sesión fue exitoso (true) o fallido (false).
  - Los campos `fechaLogin` y `fechaLogout` registran los tiempos de inicio y cierre de sesión, respectivamente.
  - El campo `token` puede almacenar el token de sesión si está disponible.
