export const filterItems = (items, activeItem) => {
  //filter out current project from projects array
  const filteredProjects = items.filter((currentItem) => {
    return currentItem.scId !== activeItem;
  });
  return filteredProjects;
};
