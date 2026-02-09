import TodoItem from "./TodoItem";

export default function TodoList({
  todos,
  deleteTodo,
  editTodo,
  editId,
  setEditId,
}) {
  return (
    <ul className="mt-5 p-0">
      {todos.map((todo) => (
        <TodoItem
          key={todo.id}
          todo={todo}
          deleteTodo={deleteTodo}
          editTodo={editTodo}
          editId={editId}
          setEditId={setEditId}
        />
      ))}
    </ul>
  );
}