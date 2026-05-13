# Industrial Monitoring Platform

A full-stack industrial monitoring dashboard built with Spring Boot, PostgreSQL and React.

This platform simulates a real-world factory monitoring environment where machines, sensors, telemetry readings and alerts are managed in real time.

---

# Features

## Backend
- Spring Boot REST API
- PostgreSQL database
- JPA / Hibernate
- Entity relationships
- Cascade delete handling
- Automatic sensor reading generation
- Alert engine
- CRUD operations
- Validation handling

## Frontend
- React + Vite
- Modern dashboard UI
- Multi-page navigation
- Machine detail views
- Live telemetry charts
- Real-time auto-refresh
- Search and filtering
- CRUD modals
- Alert resolution workflow

---

# Tech Stack

## Backend
- Java 25
- Spring Boot
- Spring Data JPA
- Hibernate
- PostgreSQL
- Maven

## Frontend
- React
- Vite
- Axios
- Recharts

---

# System Architecture

```text
Machine
 └── Sensors
      ├── Sensor Readings
      └── Alerts
```

---

# Main Functionalities

## Machines
- Create machine
- Edit machine
- Delete machine
- Machine detail page
- Search and filter

## Sensors
- Create sensor
- Edit sensor
- Delete sensor
- Search and filter

## Alerts
- Automatic alert generation
- Severity handling
- Resolve alerts

## Readings
- Automatic telemetry generation
- Real-time chart updates
- Historical reading storage

---

# Backend Setup

## Requirements
- Java 25
- PostgreSQL
- Maven

## Database

Create database:

```sql
CREATE DATABASE industrial_monitoring;
```

## Configure application.properties

```properties
spring.datasource.url=jdbc:postgresql://localhost:5432/industrial_monitoring
spring.datasource.username=YOUR_USERNAME
spring.datasource.password=YOUR_PASSWORD

spring.jpa.hibernate.ddl-auto=update
spring.jpa.show-sql=true
```

## Run Backend

```powershell
cd backend
.\mvnw.cmd spring-boot:run
```

Backend runs on:

```text
http://localhost:8080
```

---

# Frontend Setup

## Install dependencies

```powershell
cd frontend
npm install
```

## Run frontend

```powershell
npm run dev
```

Frontend runs on:

```text
http://localhost:5173
```

---

# API Endpoints

## Machines

```text
GET    /api/machines
POST   /api/machines
PUT    /api/machines/{id}
DELETE /api/machines/{id}
```

## Sensors

```text
GET    /api/sensors
POST   /api/sensors
PUT    /api/sensors/{id}
DELETE /api/sensors/{id}
```

## Alerts

```text
GET /api/alerts
PUT /api/alerts/{id}/resolve
```

## Dashboard

```text
GET /api/dashboard
```

---

# Screenshots

## Dashboard

![Dashboard](screenshots/dashboard.png)

## Machines

![Machines](screenshots/machines.png)

## Sensors

![Sensors](screenshots/sensors.png)
---

# Future Improvements

- JWT Authentication
- Role-based access
- WebSocket real-time updates
- Docker deployment
- Kubernetes deployment
- Export reports
- Notification system
- Dark mode
- Advanced analytics

---

# Author

Filipe Néri