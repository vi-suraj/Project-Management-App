import Button from "../UI/Button";

export default function ProjectSidebar({onAddProject}) {
  return (
    <aside className="h-screen w-1/3 bg-stone-900 p-10 md:w-80 mt-10 rounded-r-xl">
      <h2 className="text-3xl text-stone-50 font-semibold">Your Projects</h2>
      <div>
        <Button onClick={onAddProject}>+ Add Projects</Button>
      </div>
      <ul></ul>
    </aside>
  );
}
