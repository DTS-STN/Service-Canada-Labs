import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { Layout } from "../components/organisms/Layout";
import { useEffect, useState } from "react";
import Card from "../components/molecules/Card";
import PageHead from "../components/fragment_renderer/PageHead";
import { MultiSelectField } from "../components/atoms/MultiSelectField";
import { createBreadcrumbs } from "../lib/utils/createBreadcrumbs";
import { getDictionaryTerm } from "../lib/utils/getDictionaryTerm";
import { useTranslation } from "next-i18next";

export default function ProjectsPage(props) {
  const pageData = props.pageData?.item;
  const projectsData = props.projectsData;
  const dictionary = props.dictionary;
  const [selectedOptions, setSelectedOptions] = useState([]);
  const { t } = useTranslation("common");

  const getSelectOptionsFromProjectsData = (arr) => {
    const seen = new Set();
    let reducedArray = arr.reduce((acc, obj) => {
      if (!seen.has(obj.scLabProjectStatus[0])) {
        seen.add(obj.scLabProjectStatus[0]);
        acc.push(obj);
      }
      return acc;
    }, []);
    let optionsArray = reducedArray.map((option) => {
      return {
        id: option.scLabProjectStatus[0],
        label: t(option.scLabProjectStatus[0].substring(3)),
        value: option.scLabProjectStatus[0],
      };
    });
    return optionsArray;
  };

  const filterProjects = (projects, selectedOptions) => {
    if (selectedOptions.length === 0) return projects;
    const selectedIds = new Set(selectedOptions.map((option) => option.id));
    return projects.filter((project) =>
      selectedIds.has(project.scLabProjectStatus[0])
    );
  };

  const projectsCards = filterProjects(projectsData, selectedOptions).map(
    (project) => {
      return (
        <li
          key={project.scId}
          className="grid col-span-12 md:col-span-6 xl:col-span-4 list-none"
        >
          <Card
            title={
              props.locale === "en" ? project.scTitleEn : project.scTitleFr
            }
            href={
              props.locale === "en"
                ? project.scPageNameEn
                : project.scPageNameFr
            }
            showImage
            imgSrc={
              props.locale === "en"
                ? project.scSocialMediaImageEn._publishUrl
                : project.scSocialMediaImageFr._publishUrl
            }
            imgAlt={
              props.locale === "en"
                ? project.scSocialMediaImageAltTextEn
                : project.scSocialMediaImageAltTextFr
            }
            imgHeight={
              project.scSocialMediaImageEn.height
                ? project.scSocialMediaImageEn.height
                : ""
            }
            imgWidth={
              project.scSocialMediaImageEn.width
                ? project.scSocialMediaImageEn.width
                : ""
            }
            description={
              props.locale === "en"
                ? project.scDescriptionEn.json[0].content[0].value
                : project.scDescriptionFr.json[0].content[0].value
            }
          />
        </li>
      );
    }
  );

  useEffect(() => {
    if (props.adobeAnalyticsUrl) {
      window.adobeDataLayer = window.adobeDataLayer || [];
      window.adobeDataLayer.push({ event: "pageLoad" });
    }
  }, []);

  return (
    <>
      <Layout
        locale={props.locale}
        langUrl={
          props.locale === "en" ? pageData.scPageNameFr : pageData.scPageNameEn
        }
        dateModifiedOverride={pageData.scDateModifiedOverwrite}
        breadcrumbItems={createBreadcrumbs(
          pageData.scBreadcrumbParentPages,
          props.locale
        )}
      >
        <PageHead locale={props.locale} pageData={pageData} />
        <div
          id="pageMainTitle"
          className="flex flex-col justify-center content-center mt-16 h-[182px] bg-multi-blue-blue70 bg-no-repeat sm:bg-right-bottom"
          style={{
            backgroundImage: `url(/updates-projectsbanner.png)`,
          }}
        >
          <div className="layout-container text-white">
            <h1 className="m-0">
              {props.locale === "en"
                ? pageData.scFragments[0].scContentEn.json[0].content[0].value
                : pageData.scFragments[0].scContentFr.json[0].content[0].value}
            </h1>
            <p>
              {" "}
              {props.locale === "en"
                ? pageData.scFragments[0].scContentEn.json[1].content[0].value
                : pageData.scFragments[0].scContentFr.json[1].content[0].value}
            </p>
          </div>
        </div>
        <div className="layout-container">
          <div className="my-12 max-w-[350px]">
            <MultiSelectField
              label={getDictionaryTerm(
                dictionary,
                "DICTIONARY-FILTER-BY-PROJECT-STATUS",
                props.locale
              )}
              placeholder={getDictionaryTerm(dictionary, "ALL", props.locale)}
              boldLabel
              options={getSelectOptionsFromProjectsData(projectsData)}
              onChange={setSelectedOptions}
              selectedOptions={selectedOptions}
            />
          </div>
          <ul className="grid grid-cols-12 gap-6 mt-20">{projectsCards}</ul>
        </div>
      </Layout>
    </>
  );
}

export const getStaticProps = async ({ locale }) => {
  // Get page data
  const { data: pageData } = await fetch(
    `${process.env.AEM_BASE_URL}/getSclProjectsV2`
  ).then((res) => res.json());
  // Get projects data
  const { data: projectsData } = await fetch(
    `${process.env.AEM_BASE_URL}/getSclAllProjectsV1`
  ).then((res) => res.json());
  // get dictionary
  const { data: dictionary } = await fetch(
    `${process.env.AEM_BASE_URL}/getSclDictionaryV1`
  ).then((res) => res.json());

  return {
    props: {
      locale: locale,
      adobeAnalyticsUrl: process.env.ADOBE_ANALYTICS_URL ?? null,
      pageData: pageData.sclabsPageV1ByPath,
      projectsData: projectsData.sclabsPageV1List.items,
      dictionary: dictionary.dictionaryV1List.items,
      ...(await serverSideTranslations(locale, ["common", "multiSelect"])),
    },
    revalidate: process.env.ISR_ENABLED === "true" ? 10 : false,
  };
};
