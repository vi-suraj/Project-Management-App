export default function ProjectSelected({ project }) {
  const formatedDate = new Date(project.date).toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });

  return (
    <header>
      <div>
        <h1>{project.title}</h1>
        <button>Cancel</button>
      </div>
      <p>{project.description}</p>
      <p>{formatedDate}</p>
    </header>
  );
}
