// Import required dependencies
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { Layout } from "../components/organisms/Layout";
import { useEffect, useState } from "react";
import Card from "../components/molecules/Card";
import PageHead from "../components/fragment_renderer/PageHead";
import { MultiSelectField } from "../components/atoms/MultiSelectField";
// Utility functions for breadcrumb generation and dictionary term lookup
import { createBreadcrumbs } from "../lib/utils/createBreadcrumbs";
import { getDictionaryTerm } from "../lib/utils/getDictionaryTerm";
import { useTranslation } from "next-i18next";

/**
 * Projects Page Component
 * Displays a filterable grid of all Service Canada Lab projects
 * Supports bilingual content and project status filtering
 */
export default function ProjectsPage(props) {
  // Extract data from props
  const pageData = props.pageData?.item; // Page content from AEM
  const projectsData = props.projectsData; // All projects data
  const dictionary = props.dictionary; // Translation dictionary
  // State for managing selected filter options
  const [selectedOptions, setSelectedOptions] = useState([]);

  /**
   * Extracts unique project statuses and converts them to select options
   * @param {Array} arr - Array of project objects
   * @returns {Array} Array of formatted options for MultiSelectField
   */
  const getSelectOptionsFromProjectsData = (arr) => {
    let locale = props.locale === "en" ? "scTermEn" : "scTermFr";
    // Use Set to track unique status values
    const seen = new Set();
    // Reduce array to unique status entries
    let reducedArray = arr.reduce((acc, obj) => {
      if (!seen.has(obj.scLabProjectStagev2[`${locale}`])) {
        seen.add(obj.scLabProjectStagev2[`${locale}`]);
        acc.push(obj);
      }
      return acc;
    }, []);
    // Format options for the MultiSelectField component
    let optionsArray = reducedArray.map((option) => {
      return {
        id: option.scLabProjectStagev2[`${locale}`],
        // Translate status labels using i18n
        label: option.scLabProjectStagev2[`${locale}`],
        value: option.scLabProjectStagev2[`${locale}`],
      };
    });
    return optionsArray;
  };

  /**
   * Filters projects based on selected status options
   * @param {Array} projects - Array of all projects
   * @param {Array} selectedOptions - Array of selected filter options
   * @returns {Array} Filtered projects array
   */
  const filterProjects = (projects, selectedOptions) => {
    let locale = props.locale === "en" ? "scTermEn" : "scTermFr";
    // If no filters selected, return all projects
    if (selectedOptions.length === 0) return projects;
    // Create Set of selected status IDs for efficient lookup
    const selectedIds = new Set(selectedOptions.map((option) => option.id));
    // Return projects matching selected statuses
    return projects.filter((project) =>
      selectedIds.has(project.scLabProjectStagev2[`${locale}`])
    );
  };

  /**
   * Maps filtered projects to Card components
   * Handles bilingual content for each project card
   */
  const projectsCards = filterProjects(projectsData, selectedOptions).map(
    (project) => {
      return (
        <li
          key={project.scId}
          className="grid col-span-12 md:col-span-6 xl:col-span-4 list-none"
        >
          <Card
            // Bilingual title handling
            title={
              props.locale === "en" ? project.scTitleEn : project.scTitleFr
            }
            href={
              props.locale === "en"
                ? project.scPageNameEn
                : project.scPageNameFr
            }
            showImage
            // Bilingual image handling
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
            // Bilingual description handling
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

  // Initialize Adobe Analytics
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
        // Alternate language URL for language toggle
        langUrl={
          props.locale === "en" ? pageData.scPageNameFr : pageData.scPageNameEn
        }
        dateModifiedOverride={pageData.scDateModifiedOverwrite}
        // Generate breadcrumb navigation
        breadcrumbItems={createBreadcrumbs(
          pageData.scBreadcrumbParentPages,
          props.locale
        )}
      >
        {/* Page head component for meta tags */}
        <PageHead locale={props.locale} pageData={pageData} />

        {/* Hero section with background image */}
        <div
          id="pageMainTitle"
          className="flex flex-col justify-center content-center mt-16 h-[182px] bg-multi-blue-blue70 bg-no-repeat sm:bg-right-bottom"
          style={{
            backgroundImage: `url(/981A606F-CEBD-4DD1-BDF5-FC7DD4834CCA_4_5005_c.jpeg)`,
            backgroundSize: "cover",
          }}
        >
          <div className="layout-container text-white">
            {/* Bilingual page title and description */}
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
          {/* Project status filter dropdown
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
          </div> */}
          {/* Grid of project cards */}
          <ul className="grid grid-cols-12 gap-6 mt-20">{projectsCards}</ul>
        </div>
      </Layout>
    </>
  );
}

/**
 * Next.js Static Site Generation (SSG) function
 * Fetches all required data at build time
 * Enables Incremental Static Regeneration (ISR) if configured
 */
export const getStaticProps = async ({ locale }) => {
  // Fetch main page content from AEM
  const { data: pageData } = await fetch(
    `${process.env.AEM_BASE_URL}/getSclProjectsV2`
  ).then((res) => res.json());

  // Fetch all projects data
  const { data: projectsData } = await fetch(
    `${process.env.AEM_BASE_URL}/getSclAllProjectsV2${process.env.AEM_CONTENT_FOLDER}`
  ).then((res) => res.json());

  // Fetch translation dictionary
  const { data: dictionary } = await fetch(
    `${process.env.AEM_BASE_URL}/getSclDictionaryV1`
  ).then((res) => res.json());

  // Return props for page rendering
  return {
    props: {
      locale: locale,
      adobeAnalyticsUrl: process.env.ADOBE_ANALYTICS_URL ?? null,
      pageData: pageData.sclabsPageV1ByPath,
      projectsData: projectsData.sclabsPageV1List.items,
      dictionary: dictionary.dictionaryV1List.items,
      // Include translations for common terms and multiSelect component
      ...(await serverSideTranslations(locale, ["common", "multiSelect"])),
    },
    // Enable ISR if configured in environment
    revalidate: process.env.ISR_ENABLED === "true" ? 600 : false,
  };
};
