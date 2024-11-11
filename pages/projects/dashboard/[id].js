import PageHead from "../../../components/fragment_renderer/PageHead";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
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
 * MSCA Dashboard Articles Component
 * Displays individual article pages for the My Service Canada Account Dashboard project
 * Supports bilingual content, project context, and related updates
 */
export default function MscaDashboardArticles({ key, ...props }) {
  // Initialize state with content data
  const [pageData] = useState(props.pageData); // Current article content
  const [dictionary] = useState(props.dictionary.items); // Translation dictionary
  const [projectData] = useState(props.projectData); // Parent project data

  // Initialize Adobe Analytics
  useEffect(() => {
    if (props.adobeAnalyticsUrl) {
      window.adobeDataLayer = window.adobeDataLayer || [];
      window.adobeDataLayer.push({ event: "pageLoad" });
    }
  }, []);

  return (
    <>
      {/* Main Layout Component - Provides consistent page structure */}
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
        {/* Head component for meta tags */}
        <PageHead pageData={pageData} locale={props.locale} />

        {/* Main Article Section */}
        <section className="mb-12">
          <div className="layout-container">
            {/* Article Title with accessibility support */}
            <Heading
              tabIndex="-1"
              id="pageMainTitle"
              title={
                props.locale === "en" ? pageData.scTitleEn : pageData.scTitleFr
              }
            />

            {/* Article Metadata Component */}
            <UpdateInfo
              // Project context labels and links
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
              // Publishing dates
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

          {/* Main Article Content */}
          <div id="mainContentSection">
            <FragmentRender
              fragments={props.pageData.scFragments}
              locale={props.locale}
              excludeH1={true} // Exclude H1 as it's already rendered in Heading
            />
          </div>
        </section>

        {/* Related Updates Section - Conditionally rendered if updates exist */}
        {filterItems(props.updatesData, pageData.scId).length !== 0 ? (
          <ExploreUpdates
            locale={props.locale}
            // Filter updates related to this article
            updatesData={filterItems(props.updatesData, pageData.scId)}
            dictionary={dictionary}
            // Construct bilingual section heading
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
            // "See all updates" link label
            linkLabel={`${getDictionaryTerm(
              dictionary,
              "DICTIONARY-SEE-ALL-UPDATES-PROJECT",
              props.locale
            )}`}
            // Link to filtered updates page
            href={
              props.locale === "en"
                ? `/en/updates?project=${pageData.scLabProject.scTermEn}`
                : `/fr/mises-a-jour?projet=${pageData.scLabProject.scTermFr}`
            }
          />
        ) : null}

        {/* Parent Project Information Section */}
        <ExploreProjects
          projects={[projectData]} // Show only the parent project
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
 * Generate static paths for all MSCA Dashboard articles
 * Required for Next.js dynamic routing
 * Creates paths for both English and French versions
 */
export async function getStaticPaths() {
  // Fetch all MSCA Dashboard articles from AEM
  const { data } = await aemServiceInstance.getFragment(
    "getMSCADashboardArticles"
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
  // Fetch all MSCA Dashboard articles
  const { data: updatesData } = await aemServiceInstance.getFragment(
    "getMSCADashboardArticles"
  );
  // Fetch parent project data
  const { data: projectData } = await aemServiceInstance.getFragment(
    "getMSCADashBoardPage"
  );
  // Fetch translation dictionary
  const { data: dictionary } = await aemServiceInstance.getFragment(
    "dictionaryQuery"
  );

  const pages = updatesData.sclabsPageV1List.items;
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
      updatesData: updatesData.sclabsPageV1List.items,
      projectData: projectData.sclabsPageV1ByPath.item,
      dictionary: dictionary.dictionaryV1List,
      adobeAnalyticsUrl: process.env.ADOBE_ANALYTICS_URL ?? null,
      ...(await serverSideTranslations(locale, ["common", "vc"])),
    },
    // Enable ISR if configured in environment
    revalidate: process.env.ISR_ENABLED === "true" ? 10 : false,
  };
};
