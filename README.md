# Enterprise Order Management System

A full-stack enterprise web application built with **Angular** and **ASP.NET Core Web API**, 
featuring **JWT authentication**, **role-based access**, and **secure REST APIs**.

## 🛠 Tech Stack

### Frontend
- Angular (Standalone Components)
- TypeScript
- HTML, CSS

### Backend
- ASP.NET Core Web API
- Entity Framework Core
- JWT Authentication

### Database
- SQLite (easily switchable to SQL Server)

### Tools & Practices
- RESTful APIs
- Swagger API Documentation
- Secure Password Hashing (BCrypt)
- Clean Architecture

## ✨ Features

### Authentication & Security
- User Registration & Login
- JWT-based Authentication
- Secure password hashing using BCrypt
- Protected APIs using Authorization

### Product Management
- Create, Read, Update, Delete (CRUD) Products
- Secure access to product APIs
- Entity Framework Core with SQL database

### Frontend (Angular)
- Login page with authentication
- JWT stored securely in browser
- Automatic token attachment using HTTP Interceptor
- Product list view after authentication

### API Documentation
- Swagger UI for testing and documentation

## 🏗 Project Architecture

enterprise-order-management
│
├── OrderManagement.API        # ASP.NET Core Backend
│   ├── Controllers
│   ├── Models
│   ├── Data
│   ├── Program.cs
│
├── order-management-ui        # Angular Frontend
│   ├── auth
│   ├── products
│   ├── core
│   ├── app.config.ts
│
└── README.md

## 🔗 API Endpoints

### Authentication
- POST `/api/auth/register` – Register a new user
- POST `/api/auth/login` – Login and receive JWT token

### Products (Protected)
- GET `/api/products`
- POST `/api/products`
- PUT `/api/products/{id}`
- DELETE `/api/products/{id}`

## 🚀 How to Run the Project

### Backend (.NET API)

```bash
cd OrderManagement.API
dotnet run

Swagger UI:
http://localhost:5118/swagger

Frontend (Angular)
cd order-management-ui
ng serve

Application URL:
http://localhost:4200

---

## 🔐 Authentication Flow

1. User logs in using Angular UI
2. Backend validates credentials
3. JWT token is generated and returned
4. Token is stored in browser (localStorage)
5. Angular HTTP Interceptor attaches JWT to requests
6. Protected APIs validate JWT before allowing access

## 📌 Future Enhancements

- Role-based access control (Admin/User)
- Product search & pagination
- Angular route guards
- Docker containerization
- Deployment to Azure / AWS

## 👩‍💻 About Me

I am a Full-Stack Developer with experience in building secure, scalable web applications 
using Angular and ASP.NET Core. I am actively seeking full-stack opportunities in Finland and Europe.

## Known Issue
- Product list UI rendering has a minor issue related to authorization token handling.
- Backend APIs are fully functional and secured.
- This is a UI-layer issue planned for refactoring.