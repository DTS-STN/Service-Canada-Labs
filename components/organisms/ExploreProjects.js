import React from "react";
import Card from "../molecules/Card";

export function ExploreProjects(props) {
  const { locale, activeProjectId, projects } = props;
  console.log(projects);
  const filteredProjects = projects.filter((currentProject) => {
    return currentProject.scId !== activeProjectId;
  });
  if (filteredProjects.length > 3) filteredProjects.length = 3;
  console.log(filteredProjects);
  const projectCards = filteredProjects.map((project) => (
    <li key={project.scId} className="list-none ml-0 col-span-12 lg:col-span-4">
      <Card
        showImage
        imgSrc={
          locale === "en"
            ? `https://www.canada.ca${project.scSocialMediaImageEn?._path}`
            : `https://www.canada.ca${project.scSocialMediaImageFr?._path}`
        }
        imgAlt={
          locale === "en"
            ? project.scSocialMediaImageAltTextEn
            : project.scSocialMediaImageAltTextFr
        }
        imgHeight={project.scSocialMediaImageEn.height}
        imgWidth={project.scSocialMediaImageEn.width}
        title={locale === "en" ? project.scTitleEn : project.scTitleFr}
        href={locale === "en" ? project.scPageNameEn : project.scPageNameFr}
        description={
          locale === "en"
            ? project.scDescriptionEn.json[0].content[0].value
            : project.scDescriptionFr.json[0].content[0].value
        }
      />
    </li>
  ));
  return projectCards;
}
