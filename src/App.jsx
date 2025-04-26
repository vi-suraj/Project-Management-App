import NewProject from "./components/NewProject";
import { useState } from "react";
import NoProjectSelected from "./components/NoProjectSelected";
import ProjectSidebar from "./components/ProjectSidebar";
import ProjectSelected from "./components/ProjectSelected";

function App() {
  const [projectState, setProjectState] = useState({
    selectedProjectID: undefined,
    projects: [],
    tasks: [],
  });

  function handleAddTasks(text) {
    setProjectState((prevProjectState) => {
      const tasks = {
        id: Math.random(),
        projectId: prevProjectState.selectedProjectID,
        text: text,
      };

      return {
        ...prevProjectState,
        tasks: [tasks, ...prevProjectState.tasks],
      };
    });
  }

  console.log(projectState);

  function handleDeleteTasks(id) {
    setProjectState((prevProjectState) => {
      return {
        ...prevProjectState,
        tasks: prevProjectState.tasks.filter((project) => project.id !== id),
      };
    });
  }

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

  function handleDeleteProject() {
    setProjectState((prevProjectState) => {
      return {
        ...prevProjectState,
        selectedProjectID: undefined,
        projects: prevProjectState.projects.filter((project) => project.id !== projectState.selectedProjectID),
      };
    });
  }

  const selectedProject = projectState.projects.find((project) => project.id === projectState.selectedProjectID);

  let content = <ProjectSelected project={selectedProject} onDeleteProject={handleDeleteProject} onAddTasks={handleAddTasks} onDeleteTasks={handleDeleteTasks} tasks={projectState.tasks} onSelectedProject={projectState} />;

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
