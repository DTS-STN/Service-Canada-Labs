export const filterItems = (items, activeItem) => {
  //filter out current project from projects array
  const filteredProjects = items.filter((currentItem) => {
    return currentItem.scId !== activeItem;
  });
  //slice filtered array to max length of 3 and return new array
  const slicedArray = filteredProjects.slice(0, 3);
  return slicedArray;
};
