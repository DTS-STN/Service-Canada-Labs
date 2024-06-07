export const filterProjects = (projects, activeProject) => {
  //filter out current project from projects array
  const filteredProjects = projects.filter((currentProject) => {
    return currentProject.scId !== activeProject;
  });
  //slice filtered array to max length of 3 and return new array
  const slicedArray = filteredProjects.slice(0, 3);
  return slicedArray;
};
