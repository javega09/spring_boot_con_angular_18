🌐 spring_boot_con_angular_18
Aplicación web para gestión de restaurantes, desarrollada con Angular 18 en el frontend y Spring Boot 3.1.4 en el backend.

📦 Tecnologías utilizadas
Frontend: Angular 18, TypeScript, RxJS, Bootstrap

Backend: Spring Boot, Java 17, HikariCP, JPA, MySQL

Herramientas: Maven, Git, GitHub, Spring Tool Suite, Visual Studio Code

🚀 Instalación y ejecución
🔧 Backend (Spring Boot)
Clona el repositorio:

bash
git clone https://github.com/javega09/spring_boot_con_angular_18.git
Entra en la carpeta del backend:

bash
cd restaurantemalagaalumno
Crea un archivo .env en la raíz con tus credenciales:

env
DB_URL=jdbc:mysql://<host>:<port>/<database>
DB_USERNAME=<usuario>
DB_PASSWORD=<contraseña>
Ejecuta el proyecto desde tu IDE o con Maven:

bash
mvn spring-boot:run
🌐 Frontend (Angular)
Entra en la carpeta del frontend:

bash
cd crud-front-ng18
Instala las dependencias:

bash
npm install
Ejecuta la aplicación:

bash
ng serve
Accede desde el navegador:

Código
http://localhost:4200
🔗 Endpoints principales
GET /restaurante → Listar restaurantes
POST /restaurante → Crear restaurante
GET /restaurante/{id} → Obtener restaurante por ID
PUT /restaurante/{id} → Actualizar restaurante
DELETE /restaurante/{id} → Eliminar restaurante

🛡️ Seguridad
Este proyecto utiliza un archivo .env para gestionar credenciales sensibles. Asegúrate de no subirlo al repositorio. Ya está protegido por .gitignore.
