import { useState } from "react";

function TodoForm({ onAddTodo }) {
  const [newTodo, setNewTodo] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!newTodo.trim()) return;
    
    onAddTodo(newTodo);
    setNewTodo("");
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex item-center gap-2 shadow-sm border border-gray-300 p-2 rounded-lg"
    >
      <input
        className="flex-1 outline-none text-gray-700"
        type="text"
        value={newTodo}
        onChange={(e) => setNewTodo(e.target.value)}
        placeholder="What's need to be done?"
      />

      <button className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600">
        Add Task
      </button>
    </form>
  );
}

export default TodoForm;
