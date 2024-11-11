import PageHead from "../../../components/fragment_renderer/PageHead";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { Layout } from "../../../components/organisms/Layout";
import { useEffect, useState } from "react";
import aemServiceInstance from "../../../services/aemServiceInstance";
import { getAllUpdateIds } from "../../../lib/utils/getAllUpdateIds";
import { createBreadcrumbs } from "../../../lib/utils/createBreadcrumbs";
import FragmentRender from "../../../components/fragment_renderer/FragmentRender";
import { Heading } from "../../../components/molecules/Heading";
import { getDictionaryTerm } from "../../../lib/utils/getDictionaryTerm";

/**
 * Benefits Finder Articles Component
 * Displays individual article pages for the Benefits Finder project
 * Handles dynamic routing and bilingual content
 */
export default function BenefitFinderArticles({ key, ...props }) {
  // Initialize state with page data and dictionary
  const [pageData] = useState(props.pageData); // Current article content
  const [dictionary] = useState(props.dictionary.items); // Translation dictionary

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
        // Set alternate language URL for language toggle
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
        <PageHead pageData={pageData} locale={props.locale} />

        <section className="mb-12">
          <div className="layout-container">
            {/* Article Title */}
            <Heading
              tabIndex="-1"
              id="pageMainTitle"
              title={
                props.locale === "en" ? pageData.scTitleEn : pageData.scTitleFr
              }
            />

            {/* Article Metadata Grid - Posted and Updated dates */}
            <div id="postedOnUpdatedOnSection" className="grid grid-cols-12">
              {/* Posted On Label - Responsive column widths */}
              <p
                className={`col-span-6 sm:col-span-4 ${
                  props.locale === "en" ? "lg:col-span-2" : "lg:col-span-3"
                } font-bold`}
              >
                {getDictionaryTerm(dictionary, "POSTED-ON", props.locale)}
              </p>
              {/* Posted Date */}
              <p className="col-span-6 col-start-7 sm:col-start-5 lg:col-span-2 md:col-start-5 mt-0">
                {pageData.scDateModifiedOverwrite}
              </p>

              {/* Last Updated Label - Responsive column widths */}
              <p
                className={`row-start-2 col-span-6 sm:col-span-4 mt-0 ${
                  props.locale === "en" ? "lg:col-span-2" : "lg:col-span-3"
                } font-bold`}
              >
                {getDictionaryTerm(dictionary, "LAST-UPDATED", props.locale)}
              </p>
              {/* Updated Date */}
              <p className="row-start-2 col-span-6 col-start-7 sm:col-start-5 lg:col-span-2 md:col-start-5 mt-auto">
                {pageData.scDateModifiedOverwrite}
              </p>
            </div>
          </div>

          {/* Main Article Content */}
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
 * Generate static paths for all article pages
 * Required for dynamic routing in Next.js
 * Creates paths for both English and French versions
 */
export async function getStaticPaths() {
  // Fetch all Benefits Navigator articles from AEM
  const { data } = await aemServiceInstance.getFragment(
    "benefitsNavigatorArticlesQuery"
  );
  // Generate paths for dynamic routes using page names
  const paths = getAllUpdateIds(data.sclabsPageV1List.items);
  // Extract the last segment of the URL for the ID parameter
  paths.map((path) => (path.params.id = path.params.id.split("/").at(-1)));

  return {
    paths,
    fallback: "blocking", // Show loading state while generating new pages
  };
}

/**
 * Fetch page data at build time
 * Handles data fetching for both languages and 404 cases
 */
export const getStaticProps = async ({ locale, params }) => {
  // Fetch all Benefits Finder articles
  const { data } = await aemServiceInstance.getFragment(
    "benefitsFinderArticlesQuery"
  );
  // Fetch translation dictionary
  const { data: dictionary } = await aemServiceInstance.getFragment(
    "dictionaryQuery"
  );

  const pages = data.sclabsPageV1List.items;
  // Filter for the current article based on URL parameter
  const pageData = pages.filter((page) => {
    return (
      (locale === "en" ? page.scPageNameEn : page.scPageNameFr)
        .split("/")
        .at(-1) === params.id
    );
  });

  // Return 404 if page not found
  if (!pageData || !pageData.length) {
    return {
      notFound: true,
    };
  }

  // Return props for page rendering
  return {
    props: {
      key: params.id,
      locale: locale,
      pageData: pageData[0],
      dictionary: dictionary.dictionaryV1List,
      adobeAnalyticsUrl: process.env.ADOBE_ANALYTICS_URL ?? null,
      // Include translations for common terms and virtual clinic
      ...(await serverSideTranslations(locale, ["common", "vc"])),
    },
    // Enable ISR if configured in environment
    revalidate: process.env.ISR_ENABLED === "true" ? 10 : false,
  };
};
