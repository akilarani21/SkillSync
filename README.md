# SkillSync

SkillSync is a full-stack web application that connects people who want to exchange skills. Users can create profiles, showcase the skills they can teach, discover other users, and send skill swap requests to learn from one another.

---

## Features

### Authentication
- User Registration
- User Login
- JWT Authentication
- Protected Routes
- Secure Password Hashing using bcrypt

### User Profile
- View Profile
- Edit Profile
- Update Bio
- Update Location
- Add Avatar URL
- Add Skills Offered
- Add Skills Wanted

### User Discovery
- Browse All Users
- Search Users by Name
- View Public User Profiles
- View User Skills

### Skill Swap System
- Send Skill Swap Requests
- Prevent Duplicate Requests
- View Sent and Received Requests
- Accept Skill Swap Requests
- Reject Skill Swap Requests
- Request Status Tracking (Pending / Accepted / Rejected)

---

## Tech Stack

### Frontend
- React.js
- React Router DOM
- Axios
- Tailwind CSS

### Backend
- Node.js
- Express.js
- MongoDB
- Mongoose
- JWT Authentication
- bcryptjs

---

## Project Structure

```
SkillSync
│
├── frontend
│   ├── src
│   │   ├── api
│   │   ├── components
│   │   ├── pages
│   │   ├── App.jsx
│   │   └── main.jsx
│   │
│   └── package.json
│
├── backend
│   ├── controllers
│   ├── middleware
│   ├── models
│   ├── routes
│   ├── config
│   ├── server.js
│   └── package.json
│
└── README.md
```

---

## Database Collections

### Users

Stores user information.

Fields include:

- Name
- Email
- Password (Encrypted)
- Bio
- Avatar
- Skills Offered
- Skills Wanted
- Location
- Role

---

### Swap Requests

Stores skill exchange requests.

Fields include:

- Sender
- Receiver
- Offered Skill
- Wanted Skill
- Message
- Status
- Created At
- Updated At

---

## API Endpoints

### Authentication

```
POST /api/auth/register
POST /api/auth/login
```

---

### Profile

```
GET /api/profile
PUT /api/profile
```

---

### Users

```
GET /api/users
GET /api/users/:id
```

---

### Swap Requests

```
POST /api/swaps
GET /api/swaps
PUT /api/swaps/:id
```

---

## Installation

### Clone Repository

```bash
git clone https://github.com/yourusername/SkillSync.git
```

---

### Backend Setup

```bash
cd backend
npm install
npm run dev
```

---

### Frontend Setup

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

MONGO_URI=your_mongodb_connection_string

JWT_SECRET=your_secret_key
```

---

## Current Workflow

1. Register a new account.
2. Login using registered credentials.
3. Complete your profile.
4. Add skills you can teach.
5. Add skills you want to learn.
6. Browse other users.
7. View another user's profile.
8. Send a skill swap request.
9. View your swap requests.
10. Accept or reject incoming requests.

---

## Screenshots

- Home Page
- Login Page
- Register Page
- Dashboard
- My Profile
- Users List
- Public User Profile
- Swap Requests

---

## Future Improvements

- Real-time Notifications
- Chat Between Users
- Image Upload
- Email Notifications
- Skill Recommendations
- Rating & Review System
- Admin Dashboard

---

## Author

**Akila Rani B**

B.E. Computer Science and Engineering

Passionate Full-Stack Developer focused on building scalable web applications using the MERN Stack.

---

## License

This project is developed for educational and portfolio purposes.
