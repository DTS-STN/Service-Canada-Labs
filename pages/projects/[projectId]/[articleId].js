import PageHead from "../../../components/fragment_renderer/PageHead";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { Layout } from "../../../components/organisms/Layout";
import { useEffect, useState } from "react";
import { createBreadcrumbs } from "../../../lib/utils/createBreadcrumbs";
import FragmentRender from "../../../components/fragment_renderer/FragmentRender";
import { Heading } from "../../../components/molecules/Heading";
import { ExploreUpdates } from "../../../components/organisms/ExploreUpdates";
import { filterItems } from "../../../lib/utils/filterItems";
import { getDictionaryTerm } from "../../../lib/utils/getDictionaryTerm";
import { UpdateInfo } from "../../../components/atoms/UpdateInfo";
import { ExploreProjects } from "../../../components/organisms/ExploreProjects";
import { sortUpdatesByDate } from "../../../lib/utils/sortUpdatesByDate";
import { getAllPathParams } from "../../../lib/utils/getAllPathParams";
export default function ArticlePage({ ...props }) {
  // State management for page content and translations
  const [pageData] = useState(props.pageData); // Individual article data from AEM
  const [dictionary] = useState(props.dictionary); // Translation dictionary for UI elements

  // Initialize Adobe Analytics tracking
  useEffect(() => {
    if (props.adobeAnalyticsUrl) {
      window.adobeDataLayer = window.adobeDataLayer || [];
      window.adobeDataLayer.push({ event: "pageLoad" });
    }
  }, []);

  return (
    <>
      {/* Layout wrapper component provides consistent page structure */}
      <Layout
        locale={props.locale}
        // Alternate language URL for language switching
        langUrl={
          props.locale === "en" ? pageData.scPageNameFr : pageData.scPageNameEn
        }
        // Last modified date for the page
        dateModifiedOverride={pageData.scDateModifiedOverwrite}
        // Breadcrumb navigation generated from parent pages
        breadcrumbItems={createBreadcrumbs(
          pageData.scBreadcrumbParentPages,
          props.locale
        )}
      >
        {/* PageHead component manages meta tags */}
        <PageHead pageData={pageData} locale={props.locale} />

        {/* Main article section */}
        <section className="mb-12">
          <div className="layout-container">
            {/* Article title with accessibility support */}
            <Heading
              tabIndex="-1"
              id="pageMainTitle"
              title={
                // Bilingual title handling
                props.locale === "en" ? pageData.scTitleEn : pageData.scTitleFr
              }
            />

            {/* Article metadata component showing project context and dates */}
            <UpdateInfo
              // Project label and name with translation
              projectLabel={`${getDictionaryTerm(
                dictionary,
                "PROJECT",
                props.locale
              )}`}
              projectName={
                // Bilingual project name
                props.locale === "en"
                  ? pageData.scLabProject.scTitleEn
                  : pageData.scLabProject.scTitleFr
              }
              // Link to parent project page
              projectHref={
                props.locale === "en"
                  ? pageData.scLabProject.scPageNameEn
                  : pageData.scLabProject.scPageNameFr
              }
              // Posted date label and value
              postedOnLabel={`${getDictionaryTerm(
                dictionary,
                "POSTED-ON",
                props.locale
              )}`}
              postedOn={pageData.scDateIssued}
              // Last updated label and value
              lastUpdatedLabel={`${getDictionaryTerm(
                dictionary,
                "LAST-UPDATED",
                props.locale
              )}`}
              lastUpdated={pageData.scDateModifiedOverwrite}
            />
          </div>

          {/* Main article content rendered from AEM fragments */}
          <div id="mainContentSection">
            <FragmentRender
              fragments={props.pageData.scFragments}
              locale={props.locale}
              excludeH1={true} // Exclude H1 as it's already rendered in the Heading component
            />
          </div>
        </section>

        {/* Related Updates Section - Conditionally rendered if updates exist */}
        {filterItems(props.updatesData, pageData.scId).length !== 0 ? (
          <ExploreUpdates
            locale={props.locale}
            // Filter updates related to this article
            updatesData={sortUpdatesByDate(filterItems(props.updatesData, pageData.scId))}
            dictionary={props.dictionary}
            // Construct bilingual section heading
            heading={
              props.locale === "en"
                ? `${pageData.scLabProject.scTitleEn} ${getDictionaryTerm(
                    props.dictionary,
                    "PROJECT-UPDATES",
                    props.locale
                  )}`
                : `${getDictionaryTerm(
                    props.dictionary,
                    "PROJECT-UPDATES",
                    props.locale
                  )} ${pageData.scLabProject.scTitleFr}`
            }
            // "See all updates" link label
            linkLabel={`${getDictionaryTerm(
              props.dictionary,
              "DICTIONARY-SEE-ALL-UPDATES-PROJECT",
              props.locale
            )}`}
            // Link to filtered updates page
            href={
              props.locale === "en"
                ? `/en/updates?project=${encodeURIComponent(
                    pageData.scLabProject.scTitleEn
                  ).replace(/%20/g, "-")}`
                : `/fr/mises-a-jour?projet=${encodeURIComponent(
                    pageData.scLabProject.scTitleFr
                  ).replace(/%20/g, "-")}`
            }
          />
        ) : null}

        {/* Parent Project Information Section */}
        <ExploreProjects
          projects={[pageData.scLabProject]} // Show only the parent project
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
 * Generate static paths for all articles
 * Required for Next.js dynamic routing
 * Creates paths for both English and French versions of each article
 */
export async function getStaticPaths() {
  const articleIdLabel = "articleId";
  const projectIdLabel = "projectId";
  // Fetch all projects aarticles from AEM
  const { data: updatesData } = await fetch(
    `${process.env.AEM_BASE_URL}/getSclAllUpdatesV2${process.env.AEM_CONTENT_FOLDER}`
  ).then((res) => res.json());

  // Generate paths array for all articles in both languages
  const paths = getAllPathParams(
    [articleIdLabel, projectIdLabel],
    updatesData.sclabsPageV1List.items
  );

  return {
    paths,
    fallback: "blocking", // Show loading state for new pages being generated
  };
}

/**
 * Fetch and prepare data for page rendering at build time
 * Handles data fetching, language selection, and 404 cases
 * @param {Object} context - Contains locale and URL parameters
 */
export const getStaticProps = async ({ locale, params }) => {
  const articleIdLabel = "articleId";
  // Fetch all articles data from AEM
  const { data: updatesData } = await fetch(
    `${process.env.AEM_BASE_URL}/getSclAllUpdatesV2${process.env.AEM_CONTENT_FOLDER}`
  ).then((res) => res.json());
  // Fetch translation dictionary
  const { data: dictionary } = await fetch(
    `https://www.canada.ca/graphql/execute.json/decd-endc/getSclDictionaryV1`
  ).then((res) => res.json());

  const pages = updatesData.sclabsPageV1List.items;
  // Find the specific article based on URL parameter
  const pageData = pages.filter((page) => {
    return (
      (locale === "en" ? page.scPageNameEn : page.scPageNameFr)
        .split("/")
        .at(-1) === params[articleIdLabel]
    );
  });

  const otherUpdatesForPage = pages.filter((page) => {
    return page?.scLabProject?.scId && pageData[0]?.scLabProject?.scId
      ? page.scLabProject.scId === pageData[0].scLabProject.scId
      : false;
  });

  // Return 404 response if article not found
  if (!pageData || !pageData.length) {
    return {
      notFound: true,
    };
  }

  // Optimize other updates data to only include necessary fields
  const optimizedUpdatesData = otherUpdatesForPage.map((update) => ({
    scId: update.scId,
    scTitleEn: update.scTitleEn,
    scTitleFr: update.scTitleFr,
    scPageNameEn: update.scPageNameEn,
    scPageNameFr: update.scPageNameFr,
    scDateIssued: update.scDateIssued,
    scLabProject: {
      scId: update.scLabProject.scId,
      scTitleEn: update.scLabProject.scTitleEn,
      scTitleFr: update.scLabProject.scTitleFr,
      scPageNameEn: update.scLabProject.scPageNameEn,
      scPageNameFr: update.scLabProject.scPageNameFr
    }
  }));

  // Return props for page rendering
  return {
    props: {
      locale: locale, // Current language
      pageData: pageData[0], // Article content
      updatesData: optimizedUpdatesData, // Optimized updates for filtering
      dictionary: dictionary.dictionaryV1List.items, // Filtered translation dictionary
      adobeAnalyticsUrl: process.env.ADOBE_ANALYTICS_URL ?? null, // Analytics configuration
      ...(await serverSideTranslations(locale, ["common", "vc"])), // Load translations
    },
    // Enable Incremental Static Regeneration if configured
    revalidate: process.env.ISR_ENABLED === "true" ? 600 : false,
  };
};
