/**
 * Sorts projects according to a predefined order and returns top 3
 * Order is manually maintained until content strategy is finalized
 * @param {Array} objects - Array of project objects to sort
 * @returns {Array} - Top 3 sorted projects
 */
export const sortHomepageProjects = (objects) => {
  // Predefined display order for projects
  const sortOrder = [
    "Transforming EI with Indigenous peoples",
    "Benefits Finder",
    "Making it easier to get benefits",
    "Digital Standards Playbook",
    "New dashboard for My Service Canada Account",
    "Old Age Security Benefits Estimator",
    "Benefits Navigator",
  ];
  // Create lookup object for efficient sorting
  const titleOrder = {};
  for (let i = 0; i < sortOrder.length; i++) {
    titleOrder[sortOrder[i]] = i;
  }

  // Sort projects based on predefined order
  const sorted = objects.sort((a, b) => {
    return titleOrder[a.scTitleEn] - titleOrder[b.scTitleEn];
  });
  return sorted.slice(0, 3); // Return only top 3 projects
};
