# Enterprise Order Management System

A full-stack enterprise-style Order Management System built using **Angular** and **ASP.NET Core Web API**, focusing on secure authentication, role-based authorization, and clean architecture.

---

## 🚀 Tech Stack
- **Frontend**: Angular (Standalone Components)
- **Backend**: ASP.NET Core Web API
- **Database**: SQLite
- **Authentication**: JWT (JSON Web Tokens)
- **Authorization**: Role-based (Admin / User)
- **Tools**: GitHub, Swagger, VS Code

---

## 🔐 Key Features
- User Registration & Login
- JWT-based Authentication
- Role-Based Authorization (Admin/User)
- Secured REST APIs
- Product Management APIs
- CORS configuration for frontend-backend communication
- Clean separation of concerns (Controllers, Services, Models)

---

## 👥 Roles & Access
| Role  | Permissions |
|------|------------|
| Admin | Create, Update, Delete Products |
| User  | View Products |

---

## 📌 Project Highlights
- Implemented secure JWT authentication with token validation
- Enforced role-based access control using ASP.NET Core authorization
- Designed APIs following REST best practices
- Integrated Angular frontend with secured backend APIs
- Handled real-world issues like CORS, token expiration, and interceptor configuration

---

## 🛠️ How to Run the Project

### 🖥️ Backend (ASP.NET Core Web API)
cd OrderManagement.API
dotnet run

The API runs on: http://localhost:5118

### 🖥️ Frontend (Angular)
cd order-management-ui
ng serve

The UI runs on: http://localhost:4200

⚠️ Known Limitations
* Product list UI rendering has a minor issue related to authorization state handling.
* Backend APIs are fully functional and secured.
* UI refactoring and state optimization planned as a future enhancement.


📌 Future Enhancements
* Improve UI state management and rendering
* Add Order workflow (Create Order, Order Status, History)
* Improve UI styling and UX
* Deploy application to a cloud environment

👩‍💻 Author
Aparna Gurav
Full Stack Developer
Angular | ASP.NET Core


📎 About This Repository
This project is part of my professional portfolio and demonstrates my ability to build, secure, and integrate full-stack applications suitable for enterprise and international development environments.

