import Button from "../UI/Button";

export default function ProjectSidebar({ onAddProject, project, onSelectedProject, selectedProjectId }) {
  return (
    <aside className="h-screen w-1/3 bg-stone-900 p-10 md:w-80 mt-10 rounded-r-xl">
      <h2 className="text-3xl text-stone-50 font-semibold">Your Projects</h2>
      <div>
        <Button onClick={onAddProject}>+ Add Projects</Button>
      </div>
      <ul>
        {project.map((project) => {
          let cssClasses = "text-left text-md  rounded-sm hover:text-stone-300 hover:bg-stone-700 w-full py-1 px-4 rounded-lg";

          if (project.id === selectedProjectId) {
            cssClasses += " text-stone-300 bg-stone-700";
          } else {
            cssClasses += " text-stone-400";
          }

          return (
            <li className="mt-5" key={project.id}>
              <button onClick={() => onSelectedProject(project.id)} className={cssClasses}>
                {project.title}
              </button>
            </li>
          );
        })}
      </ul>
    </aside>
  );
}
