import { MdModeEditOutline } from "react-icons/md";
import { MdOutlineDone } from "react-icons/md";
import { FaTrash } from "react-icons/fa6";
import { IoClose } from "react-icons/io5";

function TodoItem({
  todo,
  editingTodo,
  setEditingTodo,
  editedText,
  setEditedText,
  saveEdit,
  deleteTodo,
  toggleTodo, 
}) {
  return (
    <div className="flex items-center justify-between">
      {editingTodo === todo._id ? (
        <div className="flex items-center gap-3 w-full">
          <input
            className="flex-1 border p-2 rounded"
            value={editedText}
            onChange={(e) => setEditedText(e.target.value)}
          />

          <button
            onClick={() => setEditingTodo(null)}
            className="p-2 bg-gray-200 rounded"
          >
            <IoClose />
          </button>

          <button
            onClick={() => saveEdit(todo._id)}
            className="p-2 bg-green-600 text-white rounded"
          >
            <MdOutlineDone />
          </button>
        </div>
      ) : (
        <>
          <div className="flex items-center gap-3">
            <button
              onClick={() => toggleTodo(todo._id)}
              className={`h-6 w-6 rounded-full flex items-center justify-center ${
                todo.completed
                  ? "bg-green-500 text-white"
                  : "border border-gray-500"
              }`}
            >
              {todo.completed && <MdOutlineDone />}
            </button>

            <span className="text-gray-800 font-medium">{todo.text}</span>
          </div>

          <div className="flex gap-2">
            <button
              onClick={() => {
                setEditingTodo(todo._id);
                setEditedText(todo.text);
              }}
              className="p-2 text-blue-500 hover:text-blue-700"
            >
              <MdModeEditOutline />
            </button>

            <button
              onClick={() => deleteTodo(todo._id)}
              className="p-2 text-red-500 hover:text-red-700"
            >
              <FaTrash />
            </button>
          </div>
        </>
      )}
    </div>
  );
}

export default TodoItem;
