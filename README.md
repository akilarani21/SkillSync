# SkillSync – AI Skill Exchange Platform

SkillSync is a full-stack MERN application that enables users to exchange skills by connecting with people who can teach the skills they want to learn. Users can create profiles, showcase their expertise, discover other users, and request skill exchanges.

---

## Features

### Authentication
- User Registration
- User Login
- JWT Authentication
- Protected Routes
- Secure Password Hashing (bcrypt)

### User Profile
- Edit Profile
- Update Bio
- Update Location
- Profile Avatar
- Avatar Preview
- Add Skills Offered
- Add Skills Wanted
- Interactive Skill Chips
- Remove Skills
- Persistent Profile Data

### User Discovery
- Browse All Users
- Search Users by Name
- View Public User Profiles
- Responsive User Cards
- Skill Badges
- Public Profile Page

### Dashboard
- Backend Health Status
- Dashboard Layout
- API Connectivity Indicator

### Backend
- RESTful APIs
- Express.js
- MongoDB + Mongoose
- JWT Authentication
- Protected Middleware
- Error Handling Middleware

---

## Tech Stack

### Frontend
- React.js
- React Router DOM
- Axios
- Tailwind CSS
- Vite

### Backend
- Node.js
- Express.js
- MongoDB
- Mongoose
- JWT
- bcryptjs
- dotenv

---

## Project Structure

```
SkillSync
│
├── backend
│   ├── config
│   ├── controllers
│   ├── middleware
│   ├── models
│   ├── routes
│   ├── utils
│   └── server.js
│
├── frontend
│   ├── src
│   │   ├── api
│   │   ├── components
│   │   ├── context
│   │   ├── pages
│   │   └── App.jsx
│   └── public
│
└── README.md
```

---

## Implemented Pages

- Home
- Login
- Register
- Dashboard
- My Profile
- Users Directory
- Public User Profile
- 404 Page

---

## REST API

### Authentication

| Method | Endpoint |
|----------|---------------------|
| POST | /api/auth/register |
| POST | /api/auth/login |
| GET | /api/auth/profile |
| PUT | /api/auth/profile |

### Users

| Method | Endpoint |
|----------|---------------------|
| GET | /api/users |
| GET | /api/users?search=keyword |
| GET | /api/users/:id |

### Health

| Method | Endpoint |
|----------|---------------------|
| GET | /api/health |

---

## Installation

### Clone Repository

```bash
git clone https://github.com/akilarani21/SkillSync.git
cd SkillSync
```

### Backend

```bash
cd backend
npm install
npm run dev
```

### Frontend

```bash
cd frontend
npm install
npm run dev
```

---

## Environment Variables

Create a `.env` file inside the backend folder.

```env
PORT=5000

NODE_ENV=development

MONGO_URI=mongodb://127.0.0.1:27017/skillsync

CLIENT_URL=http://localhost:5173

JWT_SECRET=skillsync_secret_key

JWT_EXPIRES_IN=7d
```

---

## Current Project Progress

### Phase 1
- Project Setup
- MERN Architecture
- MongoDB Connection
- Express Server
- React Frontend

### Phase 2
- JWT Authentication
- Login
- Registration
- Protected Routes

### Phase 3
- User Profile
- Avatar Preview
- Profile Update
- Skill Management
- Skill Chips

### Phase 4
- User Directory
- User Search
- Public User Profiles

---

## Upcoming Features

- Skill Swap Requests
- Accept / Reject Requests
- Notifications
- AI Skill Matching
- Ratings & Reviews
- Admin Dashboard
- Cloudinary Image Upload
- Real-time Chat
- Email Notifications
- Deployment

---

## Author

**Akila Rani**

GitHub:
https://github.com/akilarani21

---

## License

This project is licensed under the MIT License.
