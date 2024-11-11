// Import necessary Next.js internationalization utilities
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "next-i18next";

// Import components from project structure
import PageHead from "../../../components/fragment_renderer/PageHead";
import { Layout } from "../../../components/organisms/Layout";
import { useEffect, useState } from "react";
import aemServiceInstance from "../../../services/aemServiceInstance";
import { getAllUpdateIds } from "../../../lib/utils/getAllUpdateIds";
import { createBreadcrumbs } from "../../../lib/utils/createBreadcrumbs";
import FragmentRender from "../../../components/fragment_renderer/FragmentRender";
import { Heading } from "../../../components/molecules/Heading";
import { filterItems } from "../../../lib/utils/filterItems";
import { ExploreUpdates } from "../../../components/organisms/ExploreUpdates";
import { sortUpdatesByDate } from "../../../lib/utils/sortUpdatesByDate";
import { getDictionaryTerm } from "../../../lib/utils/getDictionaryTerm";
import { UpdateInfo } from "../../../components/atoms/UpdateInfo";
import { ExploreProjects } from "../../../components/organisms/ExploreProjects";

/**
 * Component for displaying OAS Benefits Estimator article pages
 * Handles bilingual content (English/French) and displays project updates and related information
 * This is a dynamic page that renders different articles based on the URL parameter
 */
export default function OASBenefitsEstimatorArticles({ key, ...props }) {
  // Initialize translation hook for common terms
  const { t } = useTranslation("common");

  // Initialize state with props data, using array destructuring for read-only values
  const [pageData] = useState(props.pageData);
  const [projectData] = useState(props.projectData);
  const [dictionary] = useState(props.dictionary);

  // Initialize Adobe Analytics on page load if URL is provided
  useEffect(() => {
    if (props.adobeAnalyticsUrl) {
      window.adobeDataLayer = window.adobeDataLayer || [];
      window.adobeDataLayer.push({ event: "pageLoad" });
    }
  }, []);

  return (
    <>
      {/* Main layout wrapper with language-specific configuration */}
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
        {/* Page metadata component */}
        <PageHead pageData={pageData} locale={props.locale} />

        {/* Main article section */}
        <section className="mb-12">
          <div className="layout-container">
            {/* Page title */}
            <Heading
              tabIndex="-1"
              id="pageMainTitle"
              title={
                props.locale === "en" ? pageData.scTitleEn : pageData.scTitleFr
              }
            />

            {/* Article metadata (project info, posting date, last updated) */}
            <UpdateInfo
              projectLabel={`${getDictionaryTerm(
                dictionary,
                "PROJECT",
                props.locale
              )}`}
              projectName={
                props.locale === "en"
                  ? pageData.scLabProject.scTermEn
                  : pageData.scLabProject.scTermFr
              }
              projectHref={
                props.locale === "en"
                  ? pageData.scLabProject.scDestinationURLEn
                  : pageData.scLabProject.scDestinationURLFr
              }
              postedOnLabel={`${getDictionaryTerm(
                dictionary,
                "POSTED-ON",
                props.locale
              )}`}
              postedOn={pageData.scDateModifiedOverwrite}
              lastUpdatedLabel={`${getDictionaryTerm(
                dictionary,
                "LAST-UPDATED",
                props.locale
              )}`}
              lastUpdated={pageData.scDateModifiedOverwrite}
            />
          </div>

          {/* Main content area rendering AEM fragments */}
          <div id="mainContentSection">
            <FragmentRender
              fragments={props.pageData.scFragments}
              locale={props.locale}
              excludeH1={true}
            />
          </div>
        </section>

        {/* Conditional rendering of updates section if updates exist */}
        {filterItems(props.updatesData, pageData.scId).length !== 0 ? (
          <ExploreUpdates
            locale={props.locale}
            updatesData={filterItems(props.updatesData, pageData.scId)}
            dictionary={props.dictionary}
            heading={
              props.locale === "en"
                ? `${projectData.scTitleEn} ${getDictionaryTerm(
                    props.dictionary,
                    "PROJECT-UPDATES",
                    props.locale
                  )}`
                : `${getDictionaryTerm(
                    props.dictionary,
                    "PROJECT-UPDATES",
                    props.locale
                  )} ${projectData.scTitleFr}`
            }
            linkLabel={`${getDictionaryTerm(
              props.dictionary,
              "DICTIONARY-SEE-ALL-UPDATES-PROJECT",
              props.locale
            )}`}
            href={
              props.locale === "en"
                ? `/en/updates?project=${pageData.scLabProject.scTermEn}`
                : `/fr/mises-a-jour?projet=${pageData.scLabProject.scTermFr}`
            }
          />
        ) : null}

        {/* Related project exploration section */}
        <ExploreProjects
          projects={[projectData]}
          heading={getDictionaryTerm(
            dictionary,
            "EXPLORE-THE-PROJECT",
            props.locale
          )}
          locale={props.locale}
        />
      </Layout>
    </>
  );
}

/**
 * Next.js getStaticPaths function to specify dynamic routes
 * Generates paths for all OAS Benefits Estimator articles at build time
 * @returns {Object} Contains paths for all article pages and fallback behavior
 */
export async function getStaticPaths() {
  // Fetch all OAS Benefits Estimator articles data from AEM
  const { data } = await aemServiceInstance.getFragment(
    "oasBenefitsEstimatorArticlesQuery"
  );

  // Generate paths for each article
  const paths = getAllUpdateIds(data.sclabsPageV1List.items);

  // Extract the final segment of the URL for use as the dynamic parameter
  // Example: "/en/projects/oas-benefits-estimator/what-we-learned" -> "what-we-learned"
  paths.map((path) => (path.params.id = path.params.id.split("/").at(-1)));

  return {
    paths,
    // Use blocking fallback for server-side rendering of new paths
    fallback: "blocking",
  };
}

/**
 * Next.js getStaticProps function to fetch data at build time
 * Retrieves specific article data, project info, and dictionary terms from AEM
 * @param {Object} context Contains locale and URL parameters
 * @returns {Object} Props for the page component or notFound flag
 */
export const getStaticProps = async ({ locale, params }) => {
  // Fetch all necessary data from AEM
  const { data: updatesData } = await aemServiceInstance.getFragment(
    "oasBenefitsEstimatorArticlesQuery"
  );
  const { data: projectData } = await aemServiceInstance.getFragment(
    "oasBenefitsEstimatorQuery"
  );
  const { data: dictionary } = await aemServiceInstance.getFragment(
    "dictionaryQuery"
  );

  const pages = updatesData.sclabsPageV1List.items;

  // Find the specific page data matching the current URL parameter
  const pageData = pages.filter((page) => {
    return (
      (locale === "en" ? page.scPageNameEn : page.scPageNameFr)
        .split("/")
        .at(-1) === params.id
    );
  });

  // Return 404 if page data isn't found
  if (!pageData || !pageData.length) {
    return {
      notFound: true,
    };
  }

  // Return props object with all necessary data
  return {
    props: {
      key: params.id,
      locale: locale,
      pageData: pageData[0],
      updatesData: updatesData.sclabsPageV1List.items,
      projectData: projectData.sclabsPageV1ByPath.item,
      dictionary: dictionary.dictionaryV1List.items,
      adobeAnalyticsUrl: process.env.ADOBE_ANALYTICS_URL ?? null,
      ...(await serverSideTranslations(locale, ["common"])),
    },
    // Configure ISR (Incremental Static Regeneration) if enabled
    revalidate: process.env.ISR_ENABLED === "true" ? 10 : false,
  };
};
