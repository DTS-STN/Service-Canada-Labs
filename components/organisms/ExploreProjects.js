import React, { useEffect } from "react";
import Card from "../molecules/Card";
import { useState } from "react";

//callback function that creates a card for a project when called
const createCard = (locale, project) => {
  return (
    <li
      key={project.scId}
      className="card-shadow rounded-md bg-multi-neutrals-white ml-0 col-span-12 lg:col-span-4"
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

const shuffleNSlice = (array) => {
  //randomize order of array
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  //slice array to max length of 3
  array = array.slice(0, 3);
  return array;
};

export function ExploreProjects(props) {
  //initialize props
  const { locale, activeProjectId, projects } = props;
  //filter out current project from projects array and create new array
  const filteredProjects = projects.filter((currentProject) => {
    return currentProject.scId !== activeProjectId;
  });
  //randomize order of filtered projects and store in shuffledProjects
  const shuffledProjects = shuffleNSlice(filteredProjects);
  console.log(shuffledProjects);

  return (
    //create html for "Explore other projects" section
    <div className="grid justify-evenly content-center lg:h-[740px] max-w-full bg-multi-blue-blue65b">
      <div className="xxs:mt-20 lg:mt-30 layout-container">
        <h2 className="lg-view text-multi-neutrals-white">
          {locale === "en"
            ? "Explore other projects"
            : "Explorer d'autres projets"}
        </h2>
        <h2 className="sm-view text-multi-neutrals-white">
          {locale === "en" ? "Other projects" : "D'autres projets"}
        </h2>
      </div>
      <ul className="xs:mb-40 sm:mb-40 lg:mb-15 justify-self:center layout-container grid lg:grid-cols-12 gap-x-6 gap-y-6 list-none ml-0">
        {/*iterate over filteredProjects array and create card for each project */}
        {shuffledProjects.map((project) => createCard(locale, project))}
      </ul>
    </div>
  );
}
