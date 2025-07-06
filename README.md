# Codelsoft - Sistema de Microservicios

Sistema completo de microservicios para la plataforma Codelsoft, que incluye servicios de autenticación, gestión de usuarios, facturación, videos, monitoreo, playlists, redes sociales, correos electrónicos y un API Gateway para el enrutamiento.

## Arquitectura del Sistema

El sistema está compuesto por los siguientes microservicios:

- **API Gateway** (`codelsoft-api-gateway`) - Puerto 50052
- **Servicio de Autenticación** (`codelsoft-auth`) - Puerto 3001
- **Servicio de Usuarios** (`codelsoft-users`) - Puerto 3000
- **Servicio de Facturación** (`codelsoft-billing`) - Puerto 3002
- **Servicio de Videos** (`codelsoft-videos`) - Puerto 3003
- **Servicio de Monitoreo** (`codelsoft-monitoring`) - Puerto 3004
- **Servicio de Playlists** (`codelsoft-playlist`) - Puerto 3005
- **Servicio Social** (`codelsoft-social`) - Puerto 3006
- **Servicio de Correos** (`codelsoft-mail`) - Puerto 3007

### 🥚 Bases de Datos

- **MongoDB** (Puerto 27017) - Para servicios de autenticación, usuarios, videos y social
- **MariaDB** (Puerto 3306) - Para el servicio de facturación
- **RabbitMQ** (Puerto 5672/15672) - Para comunicación asíncrona entre servicios

## Pre-requisitos

- [Node.js](https://nodejs.org/es/) (version 22.14.0)
- [Docker](https://www.docker.com/) y Docker Compose
- [Git](https://git-scm.com/)

## Instalación y Configuración

### Opción 1: Usando Docker Compose (Recomendado)

1. **Clonar el repositorio**
```bash
git clone https://github.com/Codelsoft-Microservices/codelsoft-all
cd codelsoft-all
```

2. **Construir e iniciar todos los servicios**
```bash
docker-compose up --build
```

### Opción 2: Instalación Manual

1. **Clonar el repositorio**
```bash
git clone https://github.com/Codelsoft-Microservices/codelsoft-all
cd codelsoft-all
```

2. **Instalar dependencias de cada servicio**
```bash
# API Gateway
cd codelsoft-api-gateway && npm install && cd ..

# Servicio de Autenticación
cd codelsoft-auth && npm install && cd ..

# Servicio de Usuarios
cd codelsoft-users && npm install && cd ..

# Servicio de Facturación
cd codelsoft-billing && npm install && cd ..

# Servicio de Videos
cd codelsoft-videos && npm install && cd ..

# Servicio de Monitoreo
cd codelsoft-monitoring && npm install && cd ..

# Servicio de Playlists
cd codelsoft-playlist && npm install && cd ..

# Servicio Social
cd codelsoft-social && npm install && cd ..

# Servicio de Correos
cd codelsoft-mail && npm install && cd ..
```

3. **Configurar variables de entorno**
   - Crear archivos `.env` en cada servicio según sea necesario
   - Revisar archivos `.env.example` para referencia

4. **Iniciar bases de datos**
```bash
# MongoDB
docker run -d --name mongo-cluster -p 27017:27017 mongo:6

# MariaDB
docker run -d --name mariadb -e MYSQL_ROOT_PASSWORD=root -e MYSQL_DATABASE=billingdb -e MYSQL_USER=user -e MYSQL_PASSWORD=pass -p 3306:3306 mariadb:10.5

# RabbitMQ
docker run -d --name rabbitmq -p 5672:5672 -p 15672:15672 rabbitmq:3-management
```

## Ejecución del Sistema

### Con Docker Compose
```bash
docker-compose up
```

### Manualmente (cada servicio en terminal separado)
```bash
# API Gateway
cd codelsoft-api-gateway && npm start

# Servicio de Autenticación
cd codelsoft-auth && npm start

# Otros servicios...
```

## Endpoints y Acceso

- **API Gateway**: `http://localhost:50052`
- **RabbitMQ**: `http://localhost:15672`
- **MongoDB**: `mongodb://localhost:27017`
- **MariaDB**: `localhost:3306`

## Seeding del Sistema

Cada servicio cuenta con su propio proceso de seeding. Consulte el README individual de cada servicio para obtener instrucciones específicas de inicialización de datos.

## Desarrollo

### Ejecutar en modo desarrollo
```bash
# Con Docker Compose
docker-compose -f docker-compose.dev.yml up

# Manualmente
cd codelsoft-api-gateway && npm run dev
```

## Documentación Adicional

- Consulte el README de cada servicio individual para configuraciones específicas
- Importe la colección de Postman (`Codelsoft - Microservicios.postman_collection.json`) para probar los endpoints

## Autores
- [@Katerinu](https://www.github.com/Katerinu)
- [@AleUCN](https://github.com/AleUCN)
