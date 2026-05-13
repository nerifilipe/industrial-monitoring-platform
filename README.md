# Industrial Monitoring Platform

A full-stack industrial monitoring platform built with **Spring Boot**, **React**, **PostgreSQL** and **Docker**.

The application simulates a real-world industrial monitoring environment where machines, sensors, telemetry readings and alerts are managed through a modern dashboard interface.

---

## Live Demo

Frontend:

```txt
https://industrial-monitoring-platform.vercel.app
```

Demo credentials:

```txt
username: admin
password: admin123
```

> Note: The backend is hosted on a free Render instance, so the first request may take a few seconds to wake up.

---

## Overview

This project demonstrates:

- Full-stack architecture
- REST API development
- PostgreSQL integration
- JWT authentication
- Real-time-like telemetry updates
- CRUD operations
- Dashboard UI development
- Dockerized infrastructure
- Cloud deployment

The platform includes automatic sensor reading generation, alert creation and monitoring tools inspired by industrial IoT systems.

---

## Tech Stack

### Backend

- Java 25
- Spring Boot
- Spring Security
- Spring Data JPA
- Hibernate
- JWT Authentication
- BCrypt password hashing
- PostgreSQL
- Maven
- Docker

### Frontend

- React
- Vite
- Axios
- Recharts
- CSS
- Docker

### Database

- PostgreSQL
- Neon PostgreSQL for production

### Deployment

- Vercel for frontend
- Render for backend
- Neon PostgreSQL for production database

---

## Features

### Authentication

- JWT login system
- Protected API endpoints
- Token persistence
- Logout functionality
- BCrypt password hashing
- Automatic demo admin creation

### Dashboard

- Operations overview
- Statistics cards
- Live system status
- Sensor readings chart
- Active alerts panel
- Automatic refresh every 5 seconds

### Machines

- Create machines
- Edit machines
- Delete machines
- Search machines
- Filter by status
- Machine detail page
- Linked sensors

Machine statuses:

```txt
ONLINE
WARNING
OFFLINE
```

### Sensors

- Create sensors
- Edit sensors
- Delete sensors
- Search sensors
- Filter by status
- Link sensors to machines

Sensor statuses:

```txt
ACTIVE
INACTIVE
```

### Readings

- Automatic telemetry generation
- Historical readings storage
- Readings chart
- Paginated readings table

### Alerts

- Automatic alert generation
- Threshold-based monitoring
- Duplicate alert prevention
- Manual alert resolution
- Alerts dashboard

---

## System Architecture

```txt
Machine
 └── Sensors
      ├── Sensor Readings
      └── Alerts
```

Backend flow:

```txt
Controller
    ↓
Service
    ↓
Repository
    ↓
PostgreSQL
```

Frontend flow:

```txt
React Components
       ↓
Axios API Calls
       ↓
Spring Boot API
```

Deployment flow:

```txt
Vercel Frontend
       ↓
Render Backend API
       ↓
Neon PostgreSQL
```

---

## Docker Setup

The application is fully Dockerized.

### Run the full application

```bash
docker compose up --build
```

Services:

| Service | URL |
|---|---|
| Frontend | http://localhost:5173 |
| Backend | http://localhost:8080 |
| PostgreSQL | localhost:5432 |

### Stop containers

```bash
docker compose down
```

### Reset database data

```bash
docker compose down -v
```

The demo admin user is recreated automatically when the backend starts.

---

## Manual Backend Setup

```bash
cd backend
./mvnw spring-boot:run
```

Windows:

```powershell
cd backend
.\mvnw.cmd spring-boot:run
```

Backend URL:

```txt
http://localhost:8080
```

---

## Manual Frontend Setup

```bash
cd frontend
npm install
npm run dev
```

Frontend URL:

```txt
http://localhost:5173
```

For manual local frontend runs, create a `.env` file inside `frontend`:

```env
VITE_API_URL=http://localhost:8080/api
```

---

## Environment Variables

### Backend

| Variable | Description |
|---|---|
| `SPRING_DATASOURCE_URL` | PostgreSQL JDBC URL |
| `SPRING_DATASOURCE_USERNAME` | PostgreSQL username |
| `SPRING_DATASOURCE_PASSWORD` | PostgreSQL password |
| `JWT_SECRET` | Secret used to sign JWT tokens |

### Frontend

| Variable | Description |
|---|---|
| `VITE_API_URL` | Backend API URL |

---

## API Endpoints

### Authentication

```txt
POST /api/auth/register
POST /api/auth/login
```

### Dashboard

```txt
GET /api/dashboard
```

### Machines

```txt
GET    /api/machines
POST   /api/machines
PUT    /api/machines/{id}
DELETE /api/machines/{id}
```

### Sensors

```txt
GET    /api/sensors
POST   /api/sensors
PUT    /api/sensors/{id}
DELETE /api/sensors/{id}
```

### Readings

```txt
GET /api/readings
GET /api/sensors/{sensorId}/readings
```

### Alerts

```txt
GET /api/alerts
PUT /api/alerts/{id}/resolve
```

---

## Screenshots

### Dashboard

![Dashboard](screenshots/dashboard.png)

### Machines

![Machines](screenshots/machines.png)

### Sensors

![Sensors](screenshots/sensors.png)

---

## What I Learned

This project helped me practice and improve:

- Spring Boot architecture
- REST API development
- Database modeling
- PostgreSQL integration
- JPA/Hibernate relationships
- Cascade delete handling
- DTO usage
- Validation and exception handling
- JWT authentication
- BCrypt password hashing
- React component architecture
- Axios API integration
- Dashboard UI design
- Docker and docker-compose
- Cloud deployment
- Full-stack application structure

---

## Future Improvements

Possible future upgrades:

- WebSocket real-time updates
- Role-based access control
- CSV export
- Advanced analytics
- Dark/light mode
- Email notifications
- CI/CD pipeline
- Unit and integration tests
- Kubernetes deployment

---

## Project Status

Current version includes:

- Dockerized frontend
- Dockerized backend
- Dockerized PostgreSQL
- JWT authentication
- CRUD operations
- Alert system
- Automatic sensor simulator
- Dashboard UI
- Cloud deployment

---

## Author

**Filipe Vale**

Full-stack project focused on industrial monitoring systems, backend architecture and modern web development.
