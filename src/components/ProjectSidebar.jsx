import Button from "../UI/Button";

export default function ProjectSidebar({ onAddProject, project }) {
  return (
    <aside className="h-screen w-1/3 bg-stone-900 p-10 md:w-80 mt-10 rounded-r-xl">
      <h2 className="text-3xl text-stone-50 font-semibold">Your Projects</h2>
      <div>
        <Button onClick={onAddProject}>+ Add Projects</Button>
      </div>
      <ul>
        {project.map((project) => (
          <li className="mt-5" key={project.id}>
            <button className="text-left text-md text-stone-400 rounded-sm hover:text-stone-300 hover:bg-stone-700 w-full py-1 px-4">{project.title}</button>
          </li>
        ))}
      </ul>
    </aside>
  );
}
