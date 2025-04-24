import NewProject from "./components/NewProject";
import { useState } from "react";
import NoProjectSelected from "./components/NoProjectSelected";
import ProjectSidebar from "./components/ProjectSidebar";

function App() {
  const [projectState, setProjectState] = useState({
    selectedProjectID: undefined,
    projects: [],
  });

  function handleNoSelectedProject() {
    setProjectState((prevProjectState) => {
      return {
        ...prevProjectState,
        selectedProjectID: null,
      };
    });
  }

  function handleInputData(projects) {
    setProjectState((prevProjectState) => {
      const newProject = {
        ...projects,
        id: Math.random(),
      };

      return {
        ...prevProjectState,
        projects: [...prevProjectState.projects, newProject],
        selectedProjectID: undefined,
      };
    });
  }

  console.log(projectState);

  let content;

  if (projectState.selectedProjectID === null) {
    content = <NewProject onAdd={handleInputData} />;
  } else if (projectState.selectedProjectID === undefined) {
    content = <NoProjectSelected onAddProject={handleNoSelectedProject} />;
  }

  return (
    <main className="flex gap-8">
      <ProjectSidebar onAddProject={handleNoSelectedProject} project={projectState.projects} />
      {content}
    </main>
  );
}

export default App;
