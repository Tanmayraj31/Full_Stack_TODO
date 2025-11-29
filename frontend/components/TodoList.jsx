import TodoItem from "./TodoItem";

function TodoList({
  todos,
  editingTodo,
  setEditingTodo,
  editedText,
  setEditedText,
  saveEdit,
  deleteTodo,
  toggleTodo,
}) {
  return (
    <div className="mt-4 flex flex-col gap-3">
      {todos.map((todo) => (
        <TodoItem
          key={todo._id}
          todo={todo}
          editingTodo={editingTodo}
          setEditingTodo={setEditingTodo}
          editedText={editedText}
          setEditedText={setEditedText}
          saveEdit={saveEdit}
          deleteTodo={deleteTodo}
          toggleTodo={toggleTodo}
        />
      ))}
    </div>
  );
}

export default TodoList;
