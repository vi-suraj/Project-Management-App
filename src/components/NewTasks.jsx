import { useState } from "react";

export default function NewTasks({ onAdd }) {
  const [tasks, setTasks] = useState(' ');

  function handleChange(e) {
    setTasks(e.target.value);
  }

  function handleAddTasks() {
    onAdd(tasks);
    setTasks('');
  }

  return (
    <div className="flex gap-x-6 mt-4">
      <input onChange={handleChange} type="text" value={tasks} placeholder="Add Tasks" required className="w-96 p-3 text-lg text-stone-700 border-0 outline-none bg-stone-300 rounded-lg" />
      <button onClick={handleAddTasks} className="text-lg px-5 py-2 bg-stone-700 text-stone-200 hover:bg-stone-600 hover:text-stone-300 rounded-lg">
        Add Tasks
      </button>
    </div>
  );
}
