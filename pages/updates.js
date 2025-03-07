// Import required dependencies for internationalization and routing
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { Layout } from "../components/organisms/Layout";
import { useEffect, useState } from "react";
import Card from "../components/molecules/Card";
import { sortUpdatesByDate } from "../lib/utils/sortUpdatesByDate";
import PageHead from "../components/fragment_renderer/PageHead";
import { MultiSelectField } from "../components/atoms/MultiSelectField";
import { createBreadcrumbs } from "../lib/utils/createBreadcrumbs";
import { getDictionaryTerm } from "../lib/utils/getDictionaryTerm";
import { useRouter } from "next/router";

/**
 * Updates Page Component
 * Displays a filterable list of project updates
 * Supports bilingual content and project-based filtering
 */
export default function UpdatesPage(props) {
  const router = useRouter(); // Next.js router for query params
  const pageData = props.pageData; // Page content from AEM
  const updatesData = props.updatesData; // Updates data for all projects
  const dictionary = props.dictionary; // Translation dictionary
  // State for managing selected filter options
  const [selectedOptions, setSelectedOptions] = useState([]);

  /**
   * Extracts unique project IDs and creates select options for filtering
   * @param {Array} arr - Array of update objects
   * @returns {Array} Array of formatted options for MultiSelectField
   */
  const getSelectOptionsFromUpdateData = (arr) => {
    // Use Set to track unique project IDs
    const seen = new Set();
    // Reduce array to unique project entries
    let reducedArray = arr.reduce((acc, obj) => {
      if (!seen.has(obj.scLabProject.scId)) {
        seen.add(obj.scLabProject.scId);
        acc.push(obj);
      }
      return acc;
    }, []);
    // Format options for the MultiSelectField component with bilingual labels
    let optionsArray = reducedArray.map((option) => {
      return {
        id: option.scLabProject.scId,
        label:
          props.locale === "en"
            ? option.scLabProject.scTitleEn
            : option.scLabProject.scTitleFr,
        value: option.scLabProject.scId,
      };
    });
    return optionsArray;
  };

  /**
   * Filters updates based on selected project options
   * @param {Array} updates - Array of all updates
   * @param {Array} selectedOptions - Array of selected filter options
   * @returns {Array} Filtered updates array
   */
  const filterUpdates = (updates, selectedOptions) => {
    // If no filters selected, return all updates
    if (selectedOptions.length === 0) return updates;
    // Create Set of selected project IDs for efficient lookup
    const selectedIds = new Set(selectedOptions.map((option) => option.id));
    // Return updates matching selected projects
    return updates.filter((update) =>
      selectedIds.has(update.scLabProject.scId)
    );
  };

  /**
   * Maps filtered and sorted updates to Card components
   * Includes project name and posting date for each update
   */
  const updatesCards = filterUpdates(
    sortUpdatesByDate(updatesData),
    selectedOptions
  ).map((update) => {
    return (
      <li key={update.scId} className="grid col-span-12 bg-white list-none">
        <Card
          customStyling="py-8 border-x-0 border-t-0 border-b-2 !shadow-none rounded-none"
          cardHeadingStyling="!text-mobileh2 lg:!text-h2l pl-0 no-underline !pt-0 !mt-0"
          // Bilingual title and link handling
          title={props.locale === "en" ? update.scTitleEn : update.scTitleFr}
          href={
            props.locale === "en" ? update.scPageNameEn : update.scPageNameFr
          }
          // Custom HTML description with project name and date
          htmlDesc={
            <div className="flex flex-col lg:pt-5">
              <span className="flex flex-row">
                <p className="text-multi-neutrals-grey100 font-semibold whitespace-nowrap">
                  {props.locale === "en" ? "Project:" : "Projet :"}
                </p>
                <p className="mt-0 pl-1">
                  {props.locale === "en"
                    ? update.scLabProject.scTitleEn
                    : update.scLabProject.scTitleFr}
                </p>
              </span>
              <span className="flex flex-row">
                <p className="text-multi-neutrals-grey100 font-semibold">
                  {getDictionaryTerm(dictionary, "POSTED-ON", props.locale)}
                </p>
                <p className="mt-0 pl-1">{`${update.scDateModifiedOverwrite}`}</p>
              </span>
            </div>
          }
        />
      </li>
    );
  });

  /**
   * Effect to handle Adobe Analytics and URL query parameters
   * Sets initial filter based on URL query if present
   */
  useEffect(() => {
    // Initialize Adobe Analytics if configured
    if (props.adobeAnalyticsUrl) {
      window.adobeDataLayer = window.adobeDataLayer || [];
      window.adobeDataLayer.push({ event: "pageLoad" });
    }
    // Get available filter options
    const options = getSelectOptionsFromUpdateData(updatesData);
    // Handle URL query parameters once router is ready
    if (router.isReady) {
      // Get project query parameter based on language
      const routerQuery =
        props.locale === "en" ? router.query.project : router.query.projet;
      // Find matching options for the query parameter
      const routerQueryFormatted = routerQuery?.replaceAll("-", " ");
      const selectedOptionsFromQueryString = options.filter(
        (option) => option.label === routerQueryFormatted
      );
      console.log(
        "Selected options from query string:",
        selectedOptionsFromQueryString
      );
      // Set initial filter state based on URL query
      setSelectedOptions(selectedOptionsFromQueryString);
    }
  }, [router.isReady, setSelectedOptions]);

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
          {/* Project filter dropdown */}
          <div className="my-12 max-w-[350px]">
            <MultiSelectField
              label={getDictionaryTerm(dictionary, "FILTER-BY", props.locale)}
              placeholder={getDictionaryTerm(dictionary, "ALL", props.locale)}
              boldLabel
              options={getSelectOptionsFromUpdateData(updatesData)}
              onChange={setSelectedOptions}
              selectedOptions={selectedOptions}
            />
          </div>
          {/* Updates list */}
          <div className="grid grid-cols-12">
            <ul className="col-span-12 xl:col-span-8">{updatesCards}</ul>
          </div>
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
    `${process.env.AEM_BASE_URL}/getSclUpdatesPageV1${process.env.AEM_CONTENT_FOLDER}`
  ).then((res) => res.json());

  // Fetch all updates data
  const { data: updatesData } = await fetch(
    `${process.env.AEM_BASE_URL}/getSclAllUpdatesV2${process.env.AEM_CONTENT_FOLDER}`
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
      pageData: pageData.sclabsPageV1List.items[0],
      updatesData: updatesData.sclabsPageV1List.items,
      dictionary: dictionary.dictionaryV1List.items,
      // Include translations for common terms and multiSelect component
      ...(await serverSideTranslations(locale, ["common", "multiSelect"])),
    },
    // Enable ISR if configured in environment
    revalidate: process.env.ISR_ENABLED === "true" ? 600 : false,
  };
};
