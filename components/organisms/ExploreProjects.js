import React, { useEffect } from "react";
import Card from "../molecules/Card";
import { useState } from "react";

//callback function that creates a card for a project when called
const createCard = (locale, project) => {
  return (
    <li
      key={project.scId}
      className="rounded-md bg-multi-neutrals-white col-span-12 lg:col-span-4"
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
  //initialize props
  const { locale, projects } = props;
  //create cards for current projects
  const displayCurrentProjects = projects.map((project) =>
    createCard(locale, project)
  );
  return (
    //create html for "Explore other projects" section
    <div className="py-24 max-w-full bg-multi-blue-blue65b">
      <div className="layout-container">
        <h2 className="mt-0 text-multi-neutrals-white">
          {locale === "en"
            ? "Explore other projects"
            : "Explorer d'autres projets"}
        </h2>
        <ul className="grid grid-cols-12 gap-x-6 gap-y-6 list-none">
          {/*iterate over filteredProjects array and create card for each project */}
          {displayCurrentProjects}
        </ul>
      </div>
    </div>
  );
}
