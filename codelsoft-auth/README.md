# Codelsoft AUTH Microservices
Este repositorio contiene el codigo fuente para el servicio de autenticacion del sistema, a continuacion se encuentran los pasos para la instalacion de este.


## Pre-requisitos
- [Node.js](https://nodejs.org/es/) (version 22.14.0)

## Credenciales de pruebas
Para probar el sistema se tienen credenciales de administrador y de usuario, estas son: 
```bash
email: admin@admin.com
password: admin
```
```bash
email: user@user.com
password: user
```
## Instalación y configuración

1. **Instalar las dependencias**
```bash
npm install
```

2. **Crear un archivo `.env` en la raíz del proyecto y ingresar las variables de entorno**
```bash
cp .env.example .env
```

3. **Instalación de Imagenes de docker**
```bash
docker compose up -d
```

Se debe asegurar de haber instalado las imagenes de Docker y ademas de haber creado correctamente su .env

4. **configuración de ORM**

```bash
npx prisma migrate dev
```

## Ejecutar la aplicación
```bash
npm run start
```
El servidor se iniciará en el puerto **3001** (o en el puerto definido en la variable de entorno `PORT`). Accede a la API mediante `http://localhost:3001`.

## Ejecutar la aplicación en entorno de desarrollo
```bash
npm run dev
```
Si se deseara se puede levantar el servidor en entorno de desarrollo, el servidor estara en el mismo puerto definido en la variable de entorno `PORT` en forma de desarrollo usando Nodemon.

## Seeding de la base de datos
```bash
npm run seed
```
Este comando genera 102 usuarios, donde corresponden a un usuario de pruebas y un administrador de pruebas.

## Autores
- [@Katerinu](https://www.github.com/Katerinu)
- [@AleUCN](https://github.com/AleUCN)
