import Tasks from "./Tasks";

export default function ProjectSelected({ project, onDeleteProject, onAddTasks, onDeleteTasks, tasks, onSelectedProject }) {
  const formatedDate = new Date(project.date).toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });

  return (
    <header className="mt-20 w-full pe-10  inline-block">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-semibold pb-2 text-stone-800">{project.title}</h1>
        <button onClick={onDeleteProject} className="text-xl text-stone-800 hover:text-stone-900 font-semibold">
          Delete
        </button>
      </div>
      <div className="text-left">
        <p className="text-xl font-semibold text-stone-600">{formatedDate}</p>
        <p className="text-lg font-semibold text-stone-600 mt-5 whitespace-pre-wrap border-b-2 pb-5 mb-5  border-b-stone-700">{project.description}</p>
      </div>
      <Tasks project={onSelectedProject} tasks={tasks} onAdd={onAddTasks} onDelete={onDeleteTasks} />
    </header>
  );
}
