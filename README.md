### Proyecto Backend: Tienda Online (E-Commerce) API

#### Introducción
En el proyecto de backend se combinará los conocimientos adquiridos en las tecnologías node + express, además de mysql/sequelize.
El alumno tendrá que hacer la presentación y defensa de un diagrama explicando las relaciones entre las tablas. El proyecto consistirá en una tienda online (e-commerce).

#### Descripción
El objetivo principal del proyecto es desarrollar una API REST capaz de:
- Registrar usuarios utilizando Bcrypt para encriptar contraseñas.
- Autenticar usuarios mediante un proceso de login que incluya la generación de tokens JWT y el uso de middleware para proteger rutas.
- Implementar un CRUD completo.
- Incluir al menos una relación Many to Many y otra One to Many.
- Utilizar seeders para poblar la base de datos con datos iniciales.

#### Requisitos del Proyecto
- El proyecto se subirá a un repositorio público de GitHub, donde se esperan commits de calidad para analizar la evolución del mismo.
- Será requisito indispensable que el repositorio disponga de un README completo.

#### Tecnologías Utilizadas
Para el desarrollo de la API, se utilizarán las siguientes tecnologías:
- MySQL con Sequelize para la base de datos.
- Express para el desarrollo del servidor.
- Node.js como entorno de ejecución de JavaScript.

#### Endpoints
##### Productos
- CRUD de productos.
- Endpoint para crear, actualizar y eliminar un producto.
- Endpoint para obtener todos los productos mostrando sus categorías.
- Endpoint para buscar productos por nombre, precio y ordenar por precio.
- Validación para crear productos, requiriendo que todos los campos estén completos.

##### Categorías
- CRUD de categorías.
- Endpoint para crear, actualizar y eliminar una categoría.
- Endpoint para obtener todas las categorías junto con los productos asociados.
- Endpoint para buscar categorías por nombre.

##### Pedidos/Orders
- Endpoint para ver los pedidos junto con los productos que contienen.
- Endpoint para crear un nuevo pedido.

##### Usuarios
- Endpoint para registrar un nuevo usuario utilizando bcrypt.
- Endpoint para login utilizando bcrypt y JWT.
- Endpoint para obtener la información del usuario conectado, incluyendo sus pedidos y los productos asociados a cada pedido.
- Endpoint para realizar el logout.
- Validación para crear usuarios, requiriendo que todos los campos estén completos.

#### Seeders
- Se crearán 5 productos utilizando seeders para poblar la base de datos con datos iniciales.
