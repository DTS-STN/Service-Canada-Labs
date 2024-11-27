import Head from "next/head";
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

export default function ProjectPage({ projectData, articlesData, ...props }) {
  // Render project page content
  return (
    <div></div>
    // <Layout>
    //   <h1>{projectData.scTitleEn}</h1>
    //   <ul>
    //     {articlesData.map((article) => (
    //       <li key={article.scId}>
    //         <Link
    //           href={`/projects/${projectId}/${article.scPageNameEn
    //             .split("/")
    //             .pop()}`}
    //         >
    //           {article.scTitleEn}
    //         </Link>
    //       </li>
    //     ))}
    //   </ul>
    //   {props.updatesData.length !== 0 ? (
    //     <ExploreUpdates
    //       locale={props.locale}
    //       updatesData={sortUpdatesByDate(updatesData)}
    //       dictionary={props.dictionary}
    //       heading={
    //         props.locale === "en"
    //           ? `${pageData.scTitleEn} ${getDictionaryTerm(
    //               props.dictionary,
    //               "PROJECT-UPDATES",
    //               props.locale
    //             )}`
    //           : `${getDictionaryTerm(
    //               props.dictionary,
    //               "PROJECT-UPDATES",
    //               props.locale
    //             )} ${pageData.scTitleFr}`
    //       }
    //       linkLabel={`${getDictionaryTerm(
    //         props.dictionary,
    //         "DICTIONARY-SEE-ALL-UPDATES-PROJECT",
    //         props.locale
    //       )}`}
    //       href={
    //         props.locale === "en"
    //           ? `/en/updates?project=${pageData.scTitleEn}`
    //           : `/fr/mises-a-jour?projet=${pageData.scTitleFr}`
    //       }
    //     />
    //   ) : null}
    //   <ExploreProjects
    //     heading={getDictionaryTerm(
    //       props.dictionary,
    //       "EXPLORE-OTHER-PROJECTS",
    //       props.locale
    //     )}
    //     locale={props.locale}
    //     projects={filterItems(allProjects, pageData.scId).slice(0, 3)}
    //   />
    // </Layout>
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
    `https://www.canada.ca/graphql/execute.json/decd-endc/getSclAllProjectsV2%3Bproject%3DBENEFITS-NAVIGATOR-OVERVIEW%3BfolderName%3D/content/dam/decd-endc/content-fragments/preview-sclabs`
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
  const { data: projectsData } = await fetch(
    `https://www.canada.ca/graphql/execute.json/decd-endc/getSclAllProjectsV2%3Bproject%3DBENEFITS-NAVIGATOR-OVERVIEW%3BfolderName%3D/content/dam/decd-endc/content-fragments/preview-sclabs`
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
      pageData: pageData[0],
      // articlesData: pageData[0].scLabProjectUpdates,
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
