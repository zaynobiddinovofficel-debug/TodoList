import { useState } from "react";

export default function TodoItem({
  todo,
  deleteTodo,
  editTodo,
  editId,
  setEditId,
}) {
  const [editText, setEditText] = useState(todo.title);

  const save = () => {
    if (!editText.trim()) return;
    editTodo(todo.id, editText);
  };

  return (
    <li className="list-none mb-3 p-3 border rounded-lg bg-white shadow-sm">
      {editId === todo.id ? (
        <div className="flex gap-2">
          <input
            className="flex-1 p-2 border rounded focus:ring-2 focus:ring-green-400"
            value={editText}
            onChange={(e) => setEditText(e.target.value)}
            autoFocus
          />
          <button
            onClick={save}
            className="px-4 py-2 bg-green-500 text-white rounded shrink-0"
          >
            Save
          </button>
        </div>
      ) : (
        <div className="grid grid-cols-[1fr_auto] gap-3 items-start">
          <p className="break-words line-clamp-3 text-gray-800">
            {todo.title}
          </p>

          <div className="flex gap-2 shrink-0">
            <button
              onClick={() => setEditId(todo.id)}
              className="px-3 py-1.5 bg-yellow-400 rounded hover:opacity-90"
            >
              Edit
            </button>
            <button
              onClick={() => deleteTodo(todo.id)}
              className="px-3 py-1.5 bg-red-500 text-white rounded hover:opacity-90"
            >
              Delete
            </button>
          </div>
        </div>
      )}
    </li>
  );
}
