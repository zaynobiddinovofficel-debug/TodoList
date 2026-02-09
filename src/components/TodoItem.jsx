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
    editTodo(todo.id, editText);
  };

  return (
    <li className="list-none flex justify-between items-start mb-2.5 p-2 border rounded gap-2">
      {editId === todo.id ? (
        <>
          <input
            className="flex-1 p-2 border rounded focus:ring-2 focus:ring-green-400"
            value={editText}
            onChange={(e) => setEditText(e.target.value)}
            autoFocus
          />
          <button
            onClick={save}
            className="px-2 py-1 bg-green-500 text-white rounded"
          >
            Save
          </button>
        </>
      ) : (
        <>
          <span className="break-words flex-1">{todo.title}</span>
          <div className="flex gap-1.5">
            <button
              onClick={() => setEditId(todo.id)}
              className="px-2 py-1 bg-yellow-400 rounded"
            >
              Edit
            </button>
            <button
              onClick={() => deleteTodo(todo.id)}
              className="px-2 py-1 bg-red-500 text-white rounded"
            >
              Delete
            </button>
          </div>
        </>
      )}
    </li>
  );
}