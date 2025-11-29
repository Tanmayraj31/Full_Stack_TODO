import { useEffect, useState } from "react";
import axios from "axios";
import TodoForm from "../components/TodoForm";
import TodoList from "../components/TodoList";

function App() {
  const [todos, setTodos] = useState([]);
  const [editingTodo, setEditingTodo] = useState(null);
  const [editedText, setEditedText] = useState("");

  // Fetch todos on load
  useEffect(() => {
    async function fetchTodos() {
      const response = await axios.get("/api/todos");
      setTodos(response.data);
    }
    fetchTodos();
  }, []);

  // Add Todo
  const addTodo = async (newTodo) => {
    const response = await axios.post("/api/todos", { text: newTodo });
    setTodos([...todos, response.data]);
  };

  // Edit Todo
  const saveEdit = async (id) => {
    const response = await axios.patch(`/api/todos/${id}`, {
      text: editedText,
    });

    setTodos(todos.map((t) => (t._id === id ? response.data : t)));
    setEditingTodo(null);
  };

  // Delete Todo
  const deleteTodo = async (id) => {
    await axios.delete(`/api/todos/${id}`);
    setTodos(todos.filter((t) => t._id !== id));
  };

  // Toggle Complete
  const toggleTodo = async (id) => {
    const todo = todos.find((t) => t._id === id);

    const response = await axios.patch(`/api/todos/${id}`, {
      completed: !todo.completed,
    });

    setTodos(todos.map((t) => (t._id === id ? response.data : t)));
  };

  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="bg-purple rounded-2xl p-8 w-full max-w-lg shadow-xl">
        <h1 className="text-3xl font-bold text-center mb-6">Task Manager</h1>

        <TodoForm onAddTodo={addTodo} />

        <TodoList
          todos={todos}
          editingTodo={editingTodo}
          setEditingTodo={setEditingTodo}
          editedText={editedText}
          setEditedText={setEditedText}
          saveEdit={saveEdit}
          deleteTodo={deleteTodo}
          toggleTodo={toggleTodo}
        />
      </div>
    </div>
  );
}

export default App;
