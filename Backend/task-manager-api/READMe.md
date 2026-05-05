# Task Manager API 🚀

A RESTful backend API built using Node.js and Express for managing tasks. This project demonstrates core backend concepts like routing, middleware, controllers, and validation.

---

## 📌 Features

* Create a new task
* Get all tasks
* Update a task
* Delete a task
* Input validation for required fields
* Custom middleware for logging requests

---

## 🛠 Tech Stack

* Node.js
* Express.js

---

## 📁 Project Structure

```
task-manager-api/
│
├── server.js
│
├── routes/
│   └── taskRoutes.js
│
├── controllers/
│   └── taskController.js
│
├── middleware/
│   └── logger.js
│
├── package.json
└── README.md
```

---

## ⚙️ Installation & Setup

1. Clone the repository:

```
git clone <your-repo-link>
cd task-manager-api
```

2. Install dependencies:

```
npm install
```

3. Run the server:

```
node server.js
```

4. Open in browser or Postman:

```
http://localhost:3000/api/tasks
```

---

## 📡 API Endpoints

### 🔹 Get all tasks

```
GET /api/tasks
```

---

### 🔹 Create a task

```
POST /api/tasks
```

**Body:**

```
{
  "title": "Learn Backend"
}
```

---

### 🔹 Update a task

```
PUT /api/tasks/:id
```

---

### 🔹 Delete a task

```
DELETE /api/tasks/:id
```

---

## ⚠️ Validation

* `title` is required when creating a task
* If missing, API returns:

```
{
  "error": "Title is required"
}
```

---

## 🔍 Example Response

```
{
  "id": 1710000000000,
  "title": "Learn Backend",
  "status": "pending"
}
```

---

## 📈 Future Improvements

* Add MongoDB for persistent storage
* Add Authentication (JWT)
* Add input validation using libraries
* Add error handling middleware

---

## 🎯 Learning Outcome

This project helped in understanding:

* REST API design
* Express routing
* Middleware usage
* Request & response handling
* Basic backend architecture

---

## 👨‍💻 Author

Neev Chovatiya
