# REST API

Este proyecto se centra en el desarrollo de una API robusta que cumple con estándares RESTful, priorizando la seguridad mediante el uso de JWT para autenticación y almacenando la información de los usuarios en una base de datos MySQL. La implementación de endpoints está diseñada para cubrir las necesidades clave del sistema, facilitando la creación, autenticación y obtención de información de los usuarios de manera eficiente.

## Documentación Básica de la API (Solo Orientativa)

Lo siguiente es una documentación básica de la API y se proporciona únicamente como referencia rápida.

**Nota Importante:** Esta API ha sido completamente documentada utilizando Swagger. Para obtener información detallada sobre cada ruta, parámetros y respuestas posibles, te invitamos a explorar la documentación interactiva en `/api-docs`.

### Iniciar Sesión

```
  POST /api/user/login
```
| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `email` | `string` | **Required**. El email con el que esta registrado el usuario |
| `password` | `int` | **Required**. La password que tiene |

#### Ejemplo de solicitud:
```json
{
  "email": "ejemplo@gmail.com",
  "password": "123456"
}
```
#### Ejemplo de respuesta: 
```json
{
  "message": "Usuario registrado correctamente"
}
```
### Registro de Usuario

```
  POST /api/user/register
```
| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `nick` | `string` | **Required**. El nick que va a tener el usuario |
| `email` | `string` | **Required**. El email con el que se va a registrar el usuario |
| `password` | `int` | **Required**. La password que va a tener |

#### Ejemplo de solicitud:
```json
{
  "nick": "ejemplo1",
  "email": "ejemplo@gmail.com",
  "password": "123456"
}

```

#### Ejemplo de respuesta:  
```json
{
  "status": "success",
  "user": {
    "email": "ejemplo@gmail.com"
  },
  "token": "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJuaWNrIjoiZWplbXBsbzEiLCJlbWFpbCI6ImVqZW1wbG9AZ21haWwuY29tIiwicm9sIjoxLCJpYXQiOjE3MDIwMzg4MDQsImV4cCI6MTcwNDYzMDgwNH0.TO2g7FKihGdLxf47-T5j0IGG7t2CtRS4LNL178JDrxU"
}
```

### Obtener Información del Usuario

```
  GET /api/user/info
```
| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `authorization:` | `string` | **Required**. Aquí ira el token jwt.|

#### Ejemplo de encabezado requerido:
```
    {
        authorization: "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJuaWNrIjoiZWplbXBsbzEiLCJlbWFpbCI6ImVqZW1wbG9AZ21haWwuY29tIiwicm9sIjoxLCJpYXQiOjE3MDIwMzg4MDQsImV4cCI6MTcwNDYzMDgwNH0.TO2g7FKihGdLxf47-T5j0IGG7t2CtRS4LNL178JDrxU"
    }
```
#### Ejemplo de respuesta: 
```json
{
  {
  "usuario": [
    {
      "nick": "ejemplo1",
      "email": "ejemplo@gmail.com",
      "rol": 1,
      "created_at": "2023-12-07T23:00:00.000Z"
    }
  ]
}
}
```

## Ejecucion local

Clona el proyecto:

```bash
  git clone https://github.com/mramosg7/API-REST-Usuarios
```
Entra dentro:

```bash
  cd API-REST-Usuarios
```
Instala las dependencias:
```bash
  npm install
```
Arranca el servidor:

```bash
  npm start
```

## Configuración del Proyecto

Antes de ejecutar este proyecto, asegúrate de configurar las dependencias según tus preferencias. Puedes personalizar estas configuraciones en el archivo `.env`.

Las dependencias de entorno necesarias incluyen:

`DB_HOST`

`DB_USER`

`DB_PASSWORD`

`DB_PORT`

`DB_DATABASE`

`SERVER_PORT`

## Contribuciones

¡Contribuciones son bienvenidas! Si encuentras algún problema o tienes sugerencias, por favor abre un [issue](https://github.com/mramosg7/API-REST-Usuarios/issues).

---

© 2023 mramosg7

## 🔗 Links
[![portfolio](https://img.shields.io/badge/my_portfolio-800080?style=for-the-badge&logo=ko-fi&logoColor=white)](https://katherineoelsner.com/)
[![linkedin](https://img.shields.io/badge/linkedin-0A66C2?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/)
[![github](https://img.shields.io/badge/github-000?style=for-the-badge&logo=github&logoColor=white)](https://github.com/mramosg7)

