import Button from "../UI/Button";
import NoProject from "../assets/no-projects.png";

export default function NoProjectSelected({onAddProject}) {
  return (
    <div className="text-center mt-20 w-2/3">
      <img src={NoProject} alt="No Project" className="w-16 h-16 object-contain mx-auto" />
      <h2 className="text-2xl text-stone-700 font-bold my-2">No Project Selected</h2>
      <p className="text-md text-stone-900 font-medium ">Select a project or get started with new one</p>
      <Button onClick={onAddProject}>Create New Project</Button>
    </div>
  );
}
