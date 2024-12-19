export const sortUpdatesByDate = (array) => {
  return [...array].sort((a, b) => {
    return b.scDateIssued.localeCompare(a.scDateIssued);
  });
};
