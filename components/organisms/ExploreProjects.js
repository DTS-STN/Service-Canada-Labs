import React from "react";
import Card from "../molecules/Card";

const createCard = (locale, project) => {
  return (
    <li
      key={project.scId}
      className="bg-multi-neutrals-white list-none ml-0 col-span-12 lg:col-span-4"
    >
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
  );
};

export function ExploreProjects(props) {
  const { locale, activeProjectId, projects } = props;
  const filteredProjects = projects.filter((currentProject) => {
    return currentProject.scId !== activeProjectId;
  });
  if (filteredProjects.length > 3) filteredProjects.length = 3;
  return (
    <div className="max-w-full bg-multi-blue-blue65b">
      <div className="layout-container">
        <h2 className="text-multi-neutrals-white">
          {props.locale === "en"
            ? "Explore other projects"
            : "Explorer d'autres projets"}
        </h2>
      </div>
      <ul className="layout-container grid lg:grid-cols-12 gap-x-10 lg:gap-y-4 list-none ml-0">
        {filteredProjects.map((project) => createCard(locale, project))}
      </ul>
    </div>
  );
}
