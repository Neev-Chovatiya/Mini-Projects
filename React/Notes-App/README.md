# Notes App 📝

A full-stack Notes Application built using React, Node.js, and Express.

This project demonstrates frontend-backend communication using REST APIs and includes CRUD operations for managing notes.

---

## Features

### Frontend

* Add Notes
* Delete Notes
* Dynamic UI
* Responsive Design
* Tailwind CSS Styling

### Backend

* Express Server
* REST API Routes
* JSON Data Handling
* CORS Configuration

---

## Tech Stack

### Frontend

* React
* Tailwind CSS
* Vite

### Backend

* Node.js
* Express.js

---

## Folder Structure

```bash id="notes-readme-1"
Notes-App/
│
├── src/
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
│
├── server/
│   ├── index.js
│   ├── package.json
│   └── node_modules/
│
├── public/
├── package.json
├── vite.config.js
└── README.md
```

---

## Installation

### Frontend

```bash id="notes-readme-2"
npm install
npm run dev
```

---

### Backend

```bash id="notes-readme-3"
cd server
npm install
node index.js
```

---

## API Endpoints

### Get Notes

```http id="notes-readme-4"
GET /notes
```

---

### Add Note

```http id="notes-readme-5"
POST /notes
```

---

### Delete Note

```http id="notes-readme-6"
DELETE /notes/:id
```

---

## Concepts Learned

### Frontend

* React Hooks
* useState
* useEffect
* Fetch API
* Conditional Rendering
* Event Handling

### Backend

* Express Server
* Middleware
* REST APIs
* JSON Handling
* CORS

### Full Stack

* Frontend ↔ Backend Communication
* CRUD Operations
* Client-Server Architecture

---

## Future Improvements

* MongoDB Integration
* Edit Notes
* Authentication
* User Accounts
* Persistent Storage
* Dark Mode

---

## Author

Neev Chovatiya
