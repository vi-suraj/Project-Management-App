export default function ProjectSidebar() {
  return (
    <aside className="h-screen w-1/3 bg-stone-900 p-10 md:w-80 mt-10 rounded-r-xl">
      <h2 className="text-3xl text-stone-50 font-semibold">Your Projects</h2>
      <div>
        <button className="mt-8 px-4 py-3 bg-stone-700 text-stone-400 rounded-md hover:bg-stone-600 hover:text-stone-300">+ Add Projects</button>
      </div>
      <ul></ul>
    </aside>
  );
}
