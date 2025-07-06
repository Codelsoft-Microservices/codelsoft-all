# Codelsoft PLAYLIST Microservices
Este repositorio contiene el codigo fuente para el serivicio encargado de almacenar videos en una lista segun el usuario.

## Pre-requisitos
- [Node.js](https://nodejs.org/es/) (version 22.14.0)

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
El servidor se iniciará en el puerto **3005** (o en el puerto definido en la variable de entorno `PORT`). Accede a la API mediante `http://localhost:3005`.

## Ejecutar la aplicación en entorno de desarrollo
```bash
npm run dev
```
Si se deseara se puede levantar el servidor en entorno de desarrollo, el servidor estara en el mismo puerto definido en la variable de entorno `PORT` en forma de desarrollo usando Nodemon.

## Autores
- [@Katerinu](https://www.github.com/Katerinu)
- [@AleUCN](https://github.com/AleUCN)
