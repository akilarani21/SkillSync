# 🚀 SkillSync - AI Skill Exchange Platform

SkillSync is a full-stack MERN application that enables users to exchange skills instead of paying for courses.

> 💡 Example:
> "I'll teach Java if you teach Photoshop."

Users can register, log in securely, create profiles, add their skills, discover other learners, and (upcoming) exchange skills through intelligent matching.

---

# ✨ Features

## ✅ Phase 1
- Modern React + Vite frontend
- Responsive UI with Tailwind CSS
- Express.js REST API
- MongoDB integration
- Landing Page
- Dashboard
- Profile page
- React Router
- Axios API integration
- Clean project structure

## ✅ Phase 2
- User Registration
- User Login
- Password Hashing using bcrypt
- JWT Authentication
- Protected Routes
- Authentication Context API
- Persistent Login using Local Storage
- Logout Functionality
- Backend API Protection
- MongoDB User Storage

---

# 🛠️ Tech Stack

### Frontend
- React.js
- Vite
- Tailwind CSS
- React Router DOM
- Axios

### Backend
- Node.js
- Express.js
- MongoDB
- Mongoose
- JWT (JSON Web Token)
- bcryptjs
- dotenv

### Development Tools
- VS Code
- Git
- GitHub
- Postman
- MongoDB Compass

---

# 📂 Folder Structure

```text
SkillSync
│
├── backend
│   ├── config
│   ├── controllers
│   ├── middleware
│   ├── models
│   ├── routes
│   ├── utils
│   ├── server.js
│   └── package.json
│
└── frontend
    ├── public
    ├── src
    │   ├── api
    │   ├── components
    │   ├── context
    │   ├── pages
    │   ├── App.jsx
    │   └── main.jsx
    └── package.json
```

---

# 🔐 Authentication Flow

```text
User
   │
   ▼
Register / Login
   │
   ▼
Express API
   │
   ▼
MongoDB
   │
   ▼
Password Hashing (bcrypt)
   │
   ▼
JWT Token Generated
   │
   ▼
Stored in Local Storage
   │
   ▼
Protected Routes
```

---

# ⚙️ Installation

## Clone Repository

```bash
git clone https://github.com/akilarani21/SkillSync.git
```

## Backend Setup

```bash
cd SkillSync/backend
npm install
```

Create a `.env` file:

```env
PORT=5000
MONGO_URI=mongodb://127.0.0.1:27017/skillsync
JWT_SECRET=your_secret_key
CLIENT_URL=http://localhost:5173
```

Run Backend

```bash
npm run dev
```

---

## Frontend Setup

```bash
cd ../frontend
npm install
npm run dev
```

Open:

```
http://localhost:5173
```

---

# 🧪 API Endpoints

### Authentication

| Method | Endpoint | Description |
|--------|----------|-------------|
| POST | `/api/auth/register` | Register a new user |
| POST | `/api/auth/login` | Login user |

### General

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/api/health` | API Health Check |

---

# 🚀 Upcoming Features

## Phase 3
- User Profile Management
- Bio & Location
- Avatar Upload
- Skills Offered
- Skills Wanted

## Phase 4
- Skill Matching
- AI Compatibility Score
- Search & Filters
- User Discovery

## Phase 5
- Session Booking
- Ratings & Reviews
- Real-Time Chat
- Notifications

---

# 📌 Project Status

| Phase | Status |
|--------|--------|
| Phase 1 - Project Setup | ✅ Completed |
| Phase 2 - Authentication | ✅ Completed |
| Phase 3 - User Profiles & Skills | 🚧 In Progress |
| Phase 4 - Skill Matching | ⏳ Planned |
| Phase 5 - Chat & Booking | ⏳ Planned |
| Deployment | ⏳ Planned |

---

# 👩‍💻 Author

**Akila Rani**

- GitHub: https://github.com/akilarani21
- LinkedIn: *(Add your LinkedIn profile link here)*

---

# 📄 License

This project is licensed under the MIT License.
