import NewProject from "./components/NewProject";
import ProjectSidebar from "./components/ProjectSidebar";

function App() {
  return (
    <main className="flex gap-8">
      <ProjectSidebar />
      <NewProject />
    </main>
  );
}

export default App;

