
# 📝 MERN To-Do Application

A simple, clean, and fully-functional **MERN (MongoDB, Express, React, Node.js)** To-Do application.  
This app supports:

- ➕ Adding todos  
- 🖊 Editing todos  
- ✔ Marking todos as completed  
- ❌ Deleting todos  
- 🔄 Live UI updates  
- 🌐 Saving data in MongoDB through a backend API  

Perfect for beginners learning the MERN stack and core CRUD concepts.

---

## 🚀 Tech Stack

### Frontend
- React (Vite)  
- Tailwind CSS  
- Axios  
- React Hooks (useState, useEffect)

### Backend
- Node.js  
- Express.js  
- MongoDB  
- Mongoose

---

## 📂 Project Structure

/client
├── src
│ ├── App.jsx
│ ├── components
│ │ ├── TodoList.jsx
│ │ ├── TodoItem.jsx
│ │ └── AddTodo.jsx
│ └── api
│ └── axios.js
/server
├── server.js
├── models
│ └── Todo.js
└── routes
└── todoRoutes.js

yaml
Copy code

---

## ⭐ Features

- **Add Todo** — Create todos with a simple input field.  
- **Edit Todo** — Update todo text using an edit mode and save.  
- **Delete Todo** — Remove a todo permanently from the database.  
- **Toggle Completion** — Mark todos as completed or incomplete.  
- **Real-Time UI Updates** — UI updates instantly using React state.

---

## ⚙️ Backend API Endpoints

- `POST /api/todos` — Create a new todo  
  Example body:
  ```json
  { "text": "Learn MERN" }
GET /api/todos — Get all todos

PUT /api/todos/:id — Update a todo (text or completed)

DELETE /api/todos/:id — Delete a todo by ID

🧪 Run the Project Locally
1. Clone the repository
bash
Copy code
git clone <your-repo-url>
cd mern-todo
2. Install backend dependencies
bash
Copy code
cd server
npm install
3. Install frontend dependencies
bash
Copy code
cd ../client
npm install
4. Start the backend
From the /server folder:

bash
Copy code
node server.js
Or if you use nodemon:

bash
Copy code
npx nodemon server.js
Backend default:

arduino
Copy code
http://localhost:5000
5. Start the frontend
From the /client folder:

bash
Copy code
npm run dev
Frontend default (Vite):

arduino
Copy code
http://localhost:5173
🛠 Environment Variables
Create a .env file inside the server folder:

ini
Copy code
MONGO_URI=your_mongodb_connection_string
PORT=5000
Tip: If your server.js reads process.env.PORT and falls back to 5000, you can keep PORT optional.

🤝 Contributing
Contributions are welcome. Open issues or PRs for bug fixes, features, or docs improvements.

📜 License
This project is open-source under the MIT License.
