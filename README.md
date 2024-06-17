# grid-events-back

| **Endpoint**                           | **Método HTTP** | **Descripción**                                  |
|----------------------------------------|-----------------|--------------------------------------------------|
| `/api/auth/register`                   | POST            | Registro de nuevos usuarios.                     |
| `/api/auth/login`                      | POST            | Autenticación de usuarios.                       |
| `/api/auth/profile`                    | GET, PUT, DELETE| Obtener, actualizar o eliminar el perfil de usuario. |
| `/api/events`                          | GET, POST       | Listar todos los eventos / Crear un nuevo evento. |
| `/api/events/<int:event_id>`           | GET, PUT, DELETE| Ver, actualizar o eliminar un evento específico.  |
| `/api/events/<int:event_id>/register`  | POST            | Registrar a un usuario en un evento.             |
| `/api/events/<int:event_id>/attendees` | GET             | Listar los asistentes a un evento.               |
