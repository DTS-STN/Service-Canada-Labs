export const sortUpdatesByDate = (array) => {
  return [...array].sort((a, b) => {
    return b.scDateModifiedOverwrite.localeCompare(a.scDateModifiedOverwrite);
  });
};
