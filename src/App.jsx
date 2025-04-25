import NewProject from "./components/NewProject";
import { useState } from "react";
import NoProjectSelected from "./components/NoProjectSelected";
import ProjectSidebar from "./components/ProjectSidebar";
import ProjectSelected from "./components/ProjectSelected";

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

  function handleCancelBtn() {
    setProjectState((prevProjectState) => {
      return {
        ...prevProjectState,
        selectedProjectID: undefined,
      };
    });
  }

  function handleSelectedProject(id) {
    setProjectState((prevProjectState) => {
      return {
        ...prevProjectState,
        selectedProjectID: id,
      };
    });
  }

  const selectedProject = projectState.projects.find((project)=> project.id === projectState.selectedProjectID);
  console.log(selectedProject);

  let content = <ProjectSelected project={selectedProject}/>;

  if (projectState.selectedProjectID === null) {
    content = <NewProject onAdd={handleInputData} onCancel={handleCancelBtn} />;
  } else if (projectState.selectedProjectID === undefined) {
    content = <NoProjectSelected onAddProject={handleNoSelectedProject} />;
  }

  return (
    <main className="flex gap-8">
      <ProjectSidebar onAddProject={handleNoSelectedProject} project={projectState.projects} onSelectedProject={handleSelectedProject} />
      {content}
    </main>
  );
} 

export default App;
