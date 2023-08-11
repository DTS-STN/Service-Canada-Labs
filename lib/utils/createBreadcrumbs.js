export const createBreadcrumbs = (breadcrumbArray, locale) => {
  return breadcrumbArray.map((breadCrumbItem) => {
    return {
      text:
        locale === "en" ? breadCrumbItem.scTitleEn : breadCrumbItem.scTitleFr,
      link:
        locale === "en"
          ? breadCrumbItem.scPageNameEn
          : breadCrumbItem.scPageNameFr,
    };
  });
};
