import { useEffect, useState } from "react";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";

export default function App() {
  const [todos, setTodos] = useState(() => {
    const saved = localStorage.getItem("todos");
    return saved ? JSON.parse(saved) : [];
  });

  const [editId, setEditId] = useState(null);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const addTodo = (text) => {
    if (!text.trim()) return;
    setTodos([...todos, { id: Date.now(), title: text }]);
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter((t) => t.id !== id));
  };

  const editTodo = (id, newText) => {
    setTodos(
      todos.map((t) => (t.id === id ? { ...t, title: newText } : t))
    );
    setEditId(null);
  };

  return (
    <div className="max-w-[600px] overflow-hidden mx-auto mt-10 font-sans p-4 bg-white rounded-lg shadow">
      <h1 className="text-2xl font-bold mb-4 text-center">Todo List</h1>
      <TodoForm addTodo={addTodo} />
      <TodoList
        todos={todos}
        deleteTodo={deleteTodo}
        editTodo={editTodo}
        editId={editId}
        setEditId={setEditId}
      />
    </div>
    
  );
}