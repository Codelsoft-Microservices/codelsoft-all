# Codelsoft API GATEWAY
Recuerde que para que el sistema funcione correctamente, se deben levantar todos los servidores de microservicios, las instrucciones de como hacer eso se encuentran en cada repositorio correspondiente. Este repositorio solo contiene la gateway para el enrrutado.

## Pre-requisitos
- [Node.js](https://nodejs.org/es/) (version 22.14.0)



## Seeding del sistema
Se debe realizar el proceso de seeding manualmente en cada repositorio segun corresponda, cada repositorio cuenta con su propio manual de instrucciones, para obtener las credenciales de prueba, revisar el manual correspondiente al servicio de autenticacion. 

## Instalación y configuración

1. **Instalar las dependencias**
```bash
npm install
```

2. **Crear un archivo `.env` en la raíz del proyecto y ingresar las variables de entorno**
```bash
cp .env.example .env
```

## Ejecutar la aplicación
```bash
npm run start
```
El servidor se iniciará en el puerto **50052** (o en el puerto definido en la variable de entorno `PORT`). Accede a la API mediante `http://localhost:50052`.

## Ejecutar la aplicación en entorno de desarrollo
```bash
npm run dev
```
Si se deseara se puede levantar el servidor en entorno de desarrollo, el servidor estara en el mismo puerto definido en la variable de entorno `PORT` en forma de desarrollo usando Nodemon.

## Autores
- [@Katerinu](https://www.github.com/Katerinu)
- [@AleUCN](https://github.com/AleUCN)
