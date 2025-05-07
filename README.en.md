
# 🚀 Fullstack Base Project – Backend (MVP)

This repository contains the **MVP version** of the backend for the Fullstack Base Project. It was built with a focus on security, best practices, and a professional structure — ideal for real applications and technical portfolios.

---

## 📌 MVP Features

- ✅ User registration with hashed password (`bcrypt`)
- ✅ Login with JWT authentication
- ✅ Route protection via `authenticate` middleware
- ✅ Role-based access control via `authorize`
- ✅ Protected route `/profile`
- ✅ Admin-only route `/admin`
- ✅ Full task CRUD (in-memory or database)
- ✅ PostgreSQL database via Docker
- ✅ Clean and modular TypeScript codebase
- ✅ Environment variables managed via `.env`

---

## 🛠️ Technologies Used

- Node.js
- Express.js
- TypeScript
- PostgreSQL (via Docker)
- JWT (`jsonwebtoken`)
- `bcrypt` for password encryption
- Docker & Docker Compose
- Git & GitHub

---

## 🔐 Security Highlights

- Secure password hashing
- Signed JWT with user identity and role
- Environment-based secret management
- Auth & access control middleware

---

## 🚀 How to Run

```bash
# Clone the repository
git clone https://github.com/your-username/fullstack-project.git
cd fullstack-project/backend

# Install dependencies
npm install

# Create a .env file from the example
cp .env.example .env

# Start PostgreSQL via Docker
docker compose up -d

# Start the development server
npm run dev
```

---

## 🧪 Key API Routes

- `POST /register` – Register a new user
- `POST /login` – Authenticate and receive JWT
- `GET /profile` – Protected route (any logged-in user)
- `GET /admin` – Admin-only route
- `GET /tasks`, `POST /tasks`, etc. – Task CRUD

---

## 📄 Documentation

Additional technical documentation can be found in the `docs/` folder:

- `jwt-auth-flow.md`
- `bcrypt-security.md`
- `versao-mvp.md` (Portuguese)

---

## 📜 License

This project is licensed under the MIT License.

---

> Developed by **Vandilson Alves** — version `v1.0.0`
