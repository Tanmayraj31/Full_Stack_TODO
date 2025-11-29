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
  const isEditing = editingTodo === todo._id;

  return (
    <div className="flex items-center justify-between w-full">
      {isEditing ? (
        // -------------------- EDITING MODE --------------------
        <div className="flex items-center gap-3 w-full">
          <input
            className="flex-1 p-3 border rounded-lg border-gray-200 outline-none 
            focus:ring-2 focus:ring-blue-300 text-gray-700 shadow-inner"
            value={editedText}
            onChange={(e) => setEditedText(e.target.value)}
          />

          <button
            onClick={() => setEditingTodo(null)}
            className="px-4 py-2 bg-gray-300 text-gray-700 rounded-lg 
            hover:bg-gray-400 cursor-pointer duration-200"
          >
            <IoClose />
          </button>

          <button
            onClick={() => saveEdit(todo._id)}
            className="px-4 py-2 bg-green-500 text-white rounded-lg 
            hover:bg-green-600 cursor-pointer duration-200"
          >
            <MdOutlineDone />
          </button>
        </div>
      ) : (
        <div className="flex items-center justify-between w-full">
          <div className="flex items-center gap-x-4 overflow-hidden">
            <button
              onClick={() => toggleTodo(todo._id)}
              className={`flex-shrink-0 h-6 w-6 border rounded-full 
              flex items-center justify-center duration-200 ${
                todo.completed
                  ? "bg-green-500 border-green-500 text-white"
                  : "border-gray-300 hover:border-blue-400"
              }`}
            >
              {todo.completed && <MdOutlineDone />}
            </button>

            <span
              className={`text-gray-800 truncate font-medium ${
                todo.completed ? "line-through text-gray-500" : ""
              }`}
            >
              {todo.text}
            </span>
          </div>

          <div className="flex gap-x-2">
            <button
              className="p-2 text-blue-500 hover:text-blue-700 rounded-lg 
              hover:bg-blue-50 duration-200"
              onClick={() => {
                setEditingTodo(todo._id);
                setEditedText(todo.text);
              }}
            >
              <MdModeEditOutline />
            </button>

            <button
              onClick={() => deleteTodo(todo._id)}
              className="p-2 text-red-500 hover:text-red-700 rounded-lg 
              hover:bg-red-50 duration-200"
            >
              <FaTrash />
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default TodoItem;
