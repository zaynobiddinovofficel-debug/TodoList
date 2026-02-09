import { useState } from "react";

export default function TodoForm({ addTodo }) {
  const [text, setText] = useState("");

  const submit = () => {
    addTodo(text);
    setText("");
  };

  return (
    <div className="flex gap-2.5 mb-4">
      <input
        className="flex-1 p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="List kiriting!"
      />
      <button
        onClick={submit}
        className="px-3 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 active:scale-95"
      >
        Add
      </button>
    </div>
  );
}