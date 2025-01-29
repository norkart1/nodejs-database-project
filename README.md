# Node.js MongoDB Project 🚀

A simple Node.js project with MongoDB to add and retrieve user data (fullname, email).

## 📌 Features
- ✅ **Express.js** backend
- ✅ **MongoDB** for data storage
- ✅ **REST API** for adding and retrieving users
- ✅ **Nodemon** for auto-restart during development

---

## 📂 Project Structure
```
nodejs-database-project/
│── node_modules/       # Installed dependencies
│── src/                # Source code
│   ├── config/         # Database configuration
│   │   ├── db.js
│   ├── models/         # Mongoose schema
│   │   ├── userModel.js
│   ├── routes/         # API routes
│   │   ├── userRoutes.js
│   ├── controllers/    # Business logic
│   │   ├── userController.js
│   ├── app.js          # Main Express server
│── .env                # Environment variables
│── .gitignore          # Ignore node_modules and env file
│── package.json        # Project metadata
│── README.md           # Documentation
```

---

## 📌 Setup & Installation

### 1️⃣ Install Dependencies
```sh
npm install
```

### 2️⃣ Set Up Environment Variables
Create a **.env** file in the root directory and add:
```
PORT=5000
MONGO_URI=mongodb://localhost:27017/userdb
```

### 3️⃣ Start MongoDB Server
If MongoDB is installed locally, start it with:
```sh
mongod
```

Or use **MongoDB Atlas** (cloud database) and replace `MONGO_URI` in `.env` with your connection string.

### 4️⃣ Start the Server
```sh
npm run dev
```

Server will start on **`http://localhost:5000`**

---

## 📌 API Endpoints

### ➤ **Get All Users**
**GET** `/api/users`
#### 🔹 Response
```json
[
  {
    "_id": "65b12345678c9a",
    "fullname": "John Doe",
    "email": "john@example.com",
    "createdAt": "2024-02-01T10:00:00.123Z"
  }
]
```

### ➤ **Add a New User**
**POST** `/api/users`
#### 🔹 Request Body (JSON)
```json
{
  "fullname": "Jane Doe",
  "email": "jane@example.com"
}
```
#### 🔹 Response
```json
{
  "_id": "65b987654321a0",
  "fullname": "Jane Doe",
  "email": "jane@example.com",
  "createdAt": "2024-02-01T10:05:00.456Z"
}
```

---

## 📌 Tools & Technologies
- **Node.js** - JavaScript runtime
- **Express.js** - Web framework
- **MongoDB & Mongoose** - Database & ORM
- **Nodemon** - Development auto-restart
- **dotenv** - Environment variable management
- **Postman** - API testing

---

## 📌 How to Test the API
- Use **Postman** or **cURL** to send requests.
- Example cURL request to add a user:
```sh
curl -X POST http://localhost:5000/api/users \
     -H "Content-Type: application/json" \
     -d '{"fullname": "John Doe", "email": "john@example.com"}'
```

---

## 📌 License
This project is **MIT Licensed**. Feel free to use and modify it! 😊

