import PageHead from "../../../components/fragment_renderer/PageHead";
import { Layout } from "../../../components/organisms/Layout";
import { Heading } from "../../../components/molecules/Heading";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useEffect, useState } from "react";
import aemServiceInstance from "../../../services/aemServiceInstance";
import { getAllUpdateIds } from "../../../lib/utils/getAllUpdateIds";
import { createBreadcrumbs } from "../../../lib/utils/createBreadcrumbs";
import FragmentRender from "../../../components/fragment_renderer/FragmentRender";

/**
 * Component for displaying Indigenous EI (Employment Insurance) related articles
 * This is a dynamic page component that renders different articles based on the URL parameter
 * Handles bilingual content (English/French) and provides metadata about posting/update dates
 *
 * Part of the Indigenous EI content series, which provides information about EI services
 * specifically tailored for Indigenous communities and their unique needs
 */
export default function IndigenousEiArticles({ key, ...props }) {
  // Initialize state with props data
  // pageData contains the specific article content and metadata
  const [pageData] = useState(props.pageData);
  // dictionary contains translation terms used throughout the application
  const [dictionary] = useState(props.dictionary.items);

  // Initialize Adobe Analytics tracking
  // This helps track page views and user interactions for analytics purposes
  useEffect(() => {
    if (props.adobeAnalyticsUrl) {
      window.adobeDataLayer = window.adobeDataLayer || [];
      window.adobeDataLayer.push({ event: "pageLoad" });
    }
  }, []);

  return (
    <>
      {/* Main layout wrapper with language-specific configuration
          Handles the overall page structure and navigation elements */}
      <Layout
        locale={props.locale}
        langUrl={
          // Set up language toggle URL based on current locale
          props.locale === "en" ? pageData.scPageNameFr : pageData.scPageNameEn
        }
        dateModifiedOverride={pageData.scDateModifiedOverwrite}
        // Generate breadcrumb navigation based on page hierarchy
        breadcrumbItems={createBreadcrumbs(
          pageData.scBreadcrumbParentPages,
          props.locale
        )}
      >
        {/* Page metadata component for SEO and document structure */}
        <PageHead pageData={pageData} locale={props.locale} />

        {/* Main content section containing the article */}
        <section className="mb-12">
          <div className="layout-container">
            {/* Article title */}
            <Heading
              tabIndex="-1"
              id="pageMainTitle"
              title={
                props.locale === "en" ? pageData.scTitleEn : pageData.scTitleFr
              }
            />

            {/* Article metadata grid showing posting and update dates
                Uses a responsive grid layout that adjusts based on screen size */}
            <div id="postedOnUpdatedOnSection" className="grid grid-cols-12">
              {/* "Posted On" label - width adjusts based on language and screen size */}
              <p
                className={`col-span-6 sm:col-span-4 ${
                  // French labels typically need more space due to longer text
                  props.locale === "en" ? "lg:col-span-2" : "lg:col-span-3"
                } font-bold`}
              >
                {getDictionaryTerm(dictionary, "POSTED-ON", props.locale)}
              </p>
              {/* Posted date display */}
              <p className="col-span-6 col-start-7 sm:col-start-5 lg:col-span-2 md:col-start-5 mt-0">
                {pageData.scDateModifiedOverwrite}
              </p>

              {/* "Last Updated" label - follows same responsive pattern */}
              <p
                className={`row-start-2 col-span-6 sm:col-span-4 mt-0 ${
                  props.locale === "en" ? "lg:col-span-2" : "lg:col-span-3"
                } font-bold`}
              >
                {getDictionaryTerm(dictionary, "LAST-UPDATED", props.locale)}
              </p>
              {/* Last updated date display */}
              <p className="row-start-2 col-span-6 col-start-7 sm:col-start-5 lg:col-span-2 md:col-start-5 mt-auto">
                {pageData.scDateModifiedOverwrite}
              </p>
            </div>
          </div>

          {/* Main article content section
              Renders the AEM content fragments that make up the article body */}
          <div id="mainContentSection">
            <FragmentRender
              fragments={props.pageData.scFragments}
              locale={props.locale}
            />
          </div>
        </section>
      </Layout>
    </>
  );
}

/**
 * Next.js getStaticPaths function to specify dynamic routes
 * Generates paths for all Indigenous EI articles at build time
 * This function is crucial for static site generation with dynamic routes
 *
 * @returns {Object} Contains paths for all article pages and fallback behavior
 */
export async function getStaticPaths() {
  // Fetch all Indigenous EI articles data from AEM
  const { data } = await aemServiceInstance.getFragment(
    "indigenousEiArticlesQuery"
  );

  // Generate paths for each article using their unique identifiers
  const paths = getAllUpdateIds(data.sclabsPageV1List.items);

  // Extract the final segment of the URL for use as the dynamic parameter
  // Example: "/en/services/indigenous-ei/article-name" -> "article-name"
  paths.map((path) => (path.params.id = path.params.id.split("/").at(-1)));

  return {
    paths,
    // Use blocking fallback for server-side rendering of new paths
    // This ensures SEO-friendly content delivery and proper handling of new articles
    fallback: "blocking",
  };
}

/**
 * Next.js getStaticProps function to fetch data at build time
 * Retrieves specific article data and dictionary terms from AEM
 * This function runs at build time for each page in getStaticPaths
 *
 * @param {Object} context Contains locale and URL parameters
 * @returns {Object} Props for the page component or notFound flag
 */
export const getStaticProps = async ({ locale, params }) => {
  // Fetch all articles data from AEM content repository
  const { data } = await aemServiceInstance.getFragment(
    "indigenousEiArticlesQuery"
  );

  // Fetch dictionary terms for translations
  // These terms are used throughout the site for consistent language
  const { data: dictionary } = await aemServiceInstance.getFragment(
    "dictionaryQuery"
  );

  const pages = data.sclabsPageV1List.items;

  // Find the specific page data matching the current URL parameter
  // Filters the full page list to find the matching article
  const pageData = pages.filter((page) => {
    return (
      (locale === "en" ? page.scPageNameEn : page.scPageNameFr)
        .split("/")
        .at(-1) === params.id
    );
  });

  // Return 404 if page data isn't found
  // This handles cases where an invalid article ID is requested
  if (!pageData || !pageData.length) {
    return {
      notFound: true,
    };
  }

  // Return props object with all necessary data for page rendering
  return {
    props: {
      key: params.id,
      locale: locale,
      pageData: pageData[0],
      dictionary: dictionary.dictionaryV1List,
      adobeAnalyticsUrl: process.env.ADOBE_ANALYTICS_URL ?? null,
      // Include necessary translation namespaces for the page
      ...(await serverSideTranslations(locale, ["common", "vc"])),
    },
    // Configure ISR (Incremental Static Regeneration) if enabled
    // Allows pages to be regenerated after deployment when content changes
    revalidate: process.env.ISR_ENABLED === "true" ? 10 : false,
  };
};
