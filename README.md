# 🔐 Secure Node JWT Auth

Advanced JWT Authentication & Role-Based Authorization with Node.js and Express.

---

## 📌 Overview

SecureNodeJWTAuth is a robust authentication and authorization system built using **Node.js**, **Express.js**, and **JWT**. It showcases secure coding practices suitable for modern web applications. It includes access and refresh token mechanisms, role-based access control (RBAC), global error handling, and Postman collection support for easy testing.

---

## 👤 User Roles

- **User** – Basic access to personal resources.
- **Manager** – Manage internal tasks.
- **Admin** – Access administrative dashboards and protected resources.

---

## 🧪 Postman Collection

> A complete Postman collection is included to test all authentication and authorization endpoints easily.  
> Import `Secure Node JWT Auth.postman_collection.json` into your Postman app to get started.

---

## 🧰 Tech Stack

| Tech          | Description                     |
|---------------|---------------------------------|
| Node.js       | JavaScript runtime              |
| Express.js    | Web framework                   |
| JWT           | Access & Refresh Token auth     |
| bcrypt        | Secure password hashing         |
| dotenv        | Environment variable management |
| Helmet        | HTTP security headers           |
| Rate Limiter  | Prevent brute-force attacks     |
| CORS          | Cross-Origin Resource Sharing   |

---

## ✨ Features

- ✅ JWT Authentication (Access + Refresh tokens)
- ✅ Secure password hashing with bcrypt
- ✅ Role-Based Access Control (RBAC)
- ✅ Global error handling
- ✅ Rate limiting for auth endpoints
- ✅ CORS & Helmet for security
- ✅ In-memory user storage (for simplicity)
- ✅ Separate route files and controllers
- ✅ Developer & User-friendly design

---

## 🚀 API Usage

### 🔐 Authentication Endpoints

| Method | Endpoint           | Description             |
|--------|--------------------|-------------------------|
| POST   | `/api/auth/register` | Register new user      |
| POST   | `/api/auth/login`    | Login and receive tokens |
| POST   | `/api/auth/refresh`  | Refresh access token   |
| POST   | `/api/auth/logout`   | Logout and invalidate refresh token |

### 🔒 Protected Endpoints (RBAC)

| Method | Endpoint                | Access Role  |
|--------|-------------------------|--------------|
| GET    | `/api/admin/dashboard`  | Admin        |
| GET    | `/api/user/profile`     | Authenticated|
| POST   | `/api/manager/tasks`    | Manager      |

---

## 📦 Project Structure

```
/SecureNodeJWTAuth
├── controllers/
├── middlewares/
├── models/
├── routes/
├── app.js
├── server.js
├── .env
└── README.md
```

---

## 🔐 Security Practices

- ✅ Input validation
- ✅ HTTP headers with Helmet
- ✅ Rate limiting login endpoints
- ✅ Avoid JWT payload overexposure
- ✅ Secure password handling
- ✅ RBAC authorization middleware

---

## 🧱 Setup & Usage

```bash
# Clone the repo
git clone https://github.com/RKUsamaAli/Secure-Node-JWT-Auth.git

# Navigate to project
cd SecureNodeJWTAuth

# Install dependencies
npm install

# Create .env file
cp .env.example .env
# Add your secrets in .env

# Start server
node server.js
```

---

## 🔑 .env Configuration

```env
ACCESS_SECRET=your_access_secret_key
REFRESH_SECRET=your_refresh_secret_key
PORT=3000
```

---

## 📈 How It Helps

This project is perfect for:

- 🔐 Learning secure JWT auth patterns
- 🧪 Practicing RBAC with Express.js
- 🚀 Bootstrapping authentication for new Node.js apps

---

## 📮 Contributions

Pull requests and issues are welcome! Please fork the repository and submit your PRs.

---

## 📄 License

This project is open-source and available under the MIT License.