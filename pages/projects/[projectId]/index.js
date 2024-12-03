import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { Layout } from "../../../components/organisms/Layout";
import { useEffect, useState } from "react";
import aemServiceInstance from "../../../services/aemServiceInstance";
import { ProjectInfo } from "../../../components/atoms/ProjectInfo";
import { createBreadcrumbs } from "../../../lib/utils/createBreadcrumbs";
import { Heading } from "../../../components/molecules/Heading";
import { Collapse } from "../../../components/molecules/Collapse";
import Image from "next/image";
import stageDictionary from "../../../lib/utils/stageDictionary";
import { ExploreProjects } from "../../../components/organisms/ExploreProjects";
import TextRender from "../../../components/text_node_renderer/TextRender";
import { ExploreUpdates } from "../../../components/organisms/ExploreUpdates";
import { shuffle } from "../../../lib/utils/shuffle";
import { filterItems } from "../../../lib/utils/filterItems";
import { sortUpdatesByDate } from "../../../lib/utils/sortUpdatesByDate";
import { getDictionaryTerm } from "../../../lib/utils/getDictionaryTerm";
import { ContextualAlert } from "../../../components/molecules/ContextualAlert";
import { getAllUpdateIds } from "../../../lib/utils/getAllUpdateIds";
import PageHead from "../../../components/fragment_renderer/PageHead";

export default function ProjectPage({
  projectData,
  articlesData,
  dictionary,
  adobeAnalyticsUrl,
  locale,
}) {
  // Filter dictionary to only include specific terms needed for project info display
  const [filteredDictionary] = useState(
    dictionary.filter(
      (item) =>
        item.scId === "STARTED" || // Project start date label
        item.scId === "ENDED" || // Project end date label
        item.scId === "PROJECT-STAGE" || // Current stage label
        item.scId === "SUMMARY" // Summary section label
    )
  );

  // Initialize Adobe Analytics data layer
  useEffect(() => {
    if (adobeAnalyticsUrl) {
      window.adobeDataLayer = window.adobeDataLayer || [];
      window.adobeDataLayer.push({ event: "pageLoad" });
    }
  }, []);

  // Render project page content
  return (
    <Layout
      locale={locale}
      // Set alternate language URL for language toggle
      langUrl={
        locale === "en" ? projectData.scPageNameFr : projectData.scPageNameEn
      }
      dateModifiedOverride={projectData.scDateModifiedOverwrite}
      // Generate breadcrumb navigation from parent pages
      breadcrumbItems={createBreadcrumbs(
        projectData.scBreadcrumbParentPages,
        locale
      )}
    >
      <PageHead pageData={projectData} locale={locale} />
      {/* Main Content Container */}
      <div className="layout-container mb-24">
        <section aria-labelledby="pageMainTitle"></section>
      </div>
    </Layout>
  );
}

/**
 * Generate static paths for all project pages
 * Similar structure to article pages for consistency
 */
export async function getStaticPaths() {
  // const { data } = await aemServiceInstance.getFragment("allProjectsQuery");
  const idLabel = "projectId";
  // Fetch main page content from AEM
  const { data } = await fetch(
    `https://www.canada.ca/graphql/execute.json/decd-endc/getSclProjectV1%3Bproject%3DBENEFITS-NAVIGATOR-OVERVIEW%3BfolderName%3D/content/dam/decd-endc/content-fragments/preview-sclabs`
  ).then((res) => res.json());

  // Generate paths array for all projects in both languages
  const paths = getAllUpdateIds(idLabel, data.sclabsPageV1List.items);
  // Extract the project ID from the full path
  paths.map(
    (path) => (path.params[idLabel] = path.params[idLabel].split("/").at(-1))
  );

  return {
    paths,
    fallback: "blocking",
  };
}

export const getStaticProps = async ({ locale, params }) => {
  const idLabel = "projectId";
  // Fetch main page content from AEM
  // TODO: If AEM returns error, pass error to page for debugging
  const { data: projectsData } = await fetch(
    `https://www.canada.ca/graphql/execute.json/decd-endc/getSclProjectV1%3Bproject%3DBENEFITS-NAVIGATOR-OVERVIEW%3BfolderName%3D/content/dam/decd-endc/content-fragments/preview-sclabs`
  ).then((res) => res.json());

  // Fetch translation dictionary
  const { data: dictionary } = await aemServiceInstance.getFragment(
    "dictionaryQuery"
  );

  const pages = projectsData.sclabsPageV1List.items;

  // Find the specific article based on URL parameter
  const pageData = pages.filter((page) => {
    return (
      (locale === "en" ? page.scPageNameEn : page.scPageNameFr)
        .split("/")
        .at(-1) === params[idLabel]
    );
  });

  // Return 404 response if article not found
  if (!pageData || !pageData.length) {
    return {
      notFound: true,
    };
  }

  // Return props for page rendering
  return {
    props: {
      locale: locale,
      adobeAnalyticsUrl: process.env.ADOBE_ANALYTICS_URL ?? null,
      projectData: pageData[0],
      articlesData: pageData[0].scLabProjectUpdates,
      dictionary: dictionary.dictionaryV1List.items,
      // Randomize projects order for variety
      allProjects: shuffle(projectsData.sclabsPageV1List.items),
      // Include common translations
      ...(await serverSideTranslations(locale, ["common"])),
    },
    // Enable ISR if configured in environment
    revalidate: process.env.ISR_ENABLED === "true" ? 10 : false,
  };
};
