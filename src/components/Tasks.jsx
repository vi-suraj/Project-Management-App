import NewTasks from "./NewTasks";

export default function Tasks({ onAdd, onDelete, tasks, project }) {
  const selectedTask = tasks.filter((task) => task.projectId === project.selectedProjectID);

  return (
    <section className="">
      <h2 className="text-2xl font-semibold text-stone-700">New Tasks</h2>
      <NewTasks onAdd={onAdd} onDelete={onDelete} />

      <div className="py-4">
        <p className="text-lg font-semibold text-stone-600 capitalize">There Are Currently no task added right now please add new tasks</p>
        <ul className="mt-4">
          {selectedTask.map((task) => (
            <li key={task.id} className="py-2 px-5 my-4 bg-stone-200 rounded-lg flex justify-between items-center">
              <span className="text-stone-600 font-semibold text-lg">{task.text}</span>
              <button onClick={() => onDelete(task.id)} className="text-lg text-stone-800 font-semibold">
                Clear
              </button>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
