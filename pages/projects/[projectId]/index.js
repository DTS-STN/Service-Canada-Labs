import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { Layout } from "../../../components/organisms/Layout";
import { useEffect, useState } from "react";
import { ProjectInfo } from "../../../components/atoms/ProjectInfo";
import { createBreadcrumbs } from "../../../lib/utils/createBreadcrumbs";
import { Heading } from "../../../components/molecules/Heading";
import Image from "next/image";
import { ExploreProjects } from "../../../components/organisms/ExploreProjects";
import TextRender from "../../../components/text_node_renderer/TextRender";
import { ExploreUpdates } from "../../../components/organisms/ExploreUpdates";
import { shuffle } from "../../../lib/utils/shuffle";
import { filterItems } from "../../../lib/utils/filterItems";
import { sortUpdatesByDate } from "../../../lib/utils/sortUpdatesByDate";
import { getDictionaryTerm } from "../../../lib/utils/getDictionaryTerm";
import { ContextualAlert } from "../../../components/molecules/ContextualAlert";
import PageHead from "../../../components/fragment_renderer/PageHead";
import FragmentRender from "../../../components/fragment_renderer/FragmentRender";
import { getAllPathParams } from "../../../lib/utils/getAllPathParams";

export default function ProjectPage({
  projectData,
  articlesData,
  otherProjects,
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

  // Check if any fragment is an alert and if so, show closed project alert
  const showClosedProjectAlert = projectData.scFragments.some(
    (fragment) => fragment._path && fragment._path.includes("/project-closed")
  );

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
      <div className="layout-container mb-12">
        {/* Main Content Section with ARIA labelledby */}
        <section aria-labelledby="pageMainTitle">
          {/* Two-column layout for desktop, single column for mobile */}
          <div className="flex flex-col break-words lg:grid lg:grid-cols-2">
            {/* Page Title and Alert Section - Full Width */}
            <div className="col-span-2">
              <Heading
                tabIndex="-1"
                id="pageMainTitle"
                title={
                  locale === "en"
                    ? projectData.scTitleEn
                    : projectData.scTitleFr
                }
              />

              {/* Conditionally render the warning alert */}
              {showClosedProjectAlert && (
                <div className="mb-10 max-w-[76ch]">
                  <ContextualAlert
                    id="alert"
                    type="warning"
                    message_heading={
                      locale === "en"
                        ? projectData.scFragments[0].scTitleEn
                        : projectData.scFragments[0].scTitleFr
                    }
                    message_body={
                      <TextRender
                        data={
                          locale === "en"
                            ? projectData.scFragments[0].scContentEn.json
                            : projectData.scFragments[0].scContentFr.json
                        }
                      />
                    }
                    alert_icon_alt_text=""
                    alert_icon_id="project-status-cta-icon"
                  />
                </div>
              )}
            </div>

            {/* Project Image - Hidden on mobile, shown in right column on desktop */}
            <div className="hidden lg:grid row-span-2 row-start-2 col-start-2 p-0 mx-4">
              <div className="flex justify-center">
                <div className="object-fill max-w-350px">
                  <Image
                    src={
                      locale === "en"
                        ? projectData.scSocialMediaImageEn._publishUrl
                        : projectData.scSocialMediaImageFr._publishUrl
                    }
                    alt={
                      projectData.scSocialMediaImageEn
                        .scSocialMediaImageAltTextEn
                        ? locale === "en"
                          ? projectData.scSocialMediaImageEn
                              .scSocialMediaImageAltTextEn
                          : projectData.scSocialMediaImageFr
                              .scSocialMediaImageAltTextFr
                        : ""
                    }
                    width={projectData.scSocialMediaImageEn.width}
                    height={projectData.scSocialMediaImageEn.height}
                    priority // Load image with high priority
                    sizes="33vw"
                    quality={100}
                  />
                </div>
              </div>
            </div>

            {/* Project Description Text */}
            <div className="row-start-2 mb-4">
              <TextRender
                data={
                  locale === "en"
                    ? projectData.scIntroEn.json
                    : projectData.scIntroFr.json
                }
              />
            </div>

            {/* Project Information Component - Contains key project details */}
            <div className="row-start-3">
              <ProjectInfo
                locale={locale}
                // Pass translated terms and labels
                termStarted={
                  locale === "en"
                    ? filteredDictionary[2].scTermEn
                    : filteredDictionary[2].scTermFr
                }
                termStage={
                  locale === "en"
                    ? filteredDictionary[1].scTermEn
                    : filteredDictionary[1].scTermFr
                }
                termSummary={
                  locale === "en"
                    ? filteredDictionary[3].scTermEn
                    : filteredDictionary[3].scTermFr
                }
                dateStarted={projectData.scDateStarted}
                stage={
                  locale === "en"
                    ? projectData.scLabProjectStagev2.scTermEn
                    : projectData.scLabProjectStagev2.scTermFr
                }
                definition={
                  <TextRender
                    data={
                      locale === "en"
                        ? projectData.scLabProjectStagev2.scDescriptionEn.json
                        : projectData.scLabProjectStagev2.scDescriptionFr.json
                    }
                  />
                }
                summary={
                  <TextRender
                    data={
                      locale === "en"
                        ? projectData.scLabProjectSummaryEn.json
                        : projectData.scLabProjectSummaryFr.json
                    }
                  />
                }
              />
            </div>
          </div>
        </section>
      </div>
      <div id="mainContentSection">
        <FragmentRender
          fragments={projectData.scFragments}
          locale={locale}
          excludeH1={true} // Exclude H1 as it's already rendered in the Heading component
        />
      </div>
      {articlesData.length !== 0 ? (
        <ExploreUpdates
          isOnProjectPage={true}
          projectName={
            locale === "en" ? projectData.scTitleEn : projectData.scTitleFr
          }
          locale={locale}
          updatesData={sortUpdatesByDate(articlesData)}
          dictionary={dictionary}
          heading={
            locale === "en"
              ? `${projectData.scTitleEn} ${getDictionaryTerm(
                  dictionary,
                  "PROJECT-UPDATES",
                  locale
                )}`
              : `${getDictionaryTerm(dictionary, "PROJECT-UPDATES", locale)} ${
                  projectData.scTitleFr
                }`
          }
          linkLabel={`${getDictionaryTerm(
            dictionary,
            "DICTIONARY-SEE-ALL-UPDATES-PROJECT",
            locale
          )}`}
          href={
            locale === "en"
              ? `/en/updates?project=${encodeURIComponent(
                  projectData.scTitleEn
                ).replace(/%20/g, "-")}`
              : `/fr/mises-a-jour?projet=${encodeURIComponent(
                  projectData.scTitleFr
                ).replace(/%20/g, "-")}`
          }
        />
      ) : null}
      <ExploreProjects
        heading={getDictionaryTerm(
          dictionary,
          "EXPLORE-OTHER-PROJECTS",
          locale
        )}
        locale={locale}
        projects={otherProjects}
      />
    </Layout>
  );
}

/**
 * Generate static paths for all project pages
 * Similar structure to article pages for consistency
 */
export async function getStaticPaths() {
  const idLabel = "projectId";
  // Fetch main page content from AEM
  const { data } = await fetch(
    `https://www.canada.ca/graphql/execute.json/decd-endc/getSclAllProjectsV2${process.env.AEM_CONTENT_FOLDER}`
  ).then((res) => res.json());

  // Generate paths array for all projects in both languages
  const paths = getAllPathParams([idLabel], data.sclabsPageV1List.items);
  // Extract the project ID from the full path
  paths.map(
    (path) => (path.params[idLabel] = path.params[idLabel].split("/").at(-1))
  );

  return {
    paths,
    fallback: "blocking",
  };
}

/**
 * Fetch and prepare data for page rendering at build time
 * Handles data fetching, language selection, and 404 cases
 * @param {Object} context - Contains locale and URL parameters
 */
export const getStaticProps = async ({ locale, params }) => {
  const idLabel = "projectId";
  // Fetch main page content from AEM

  const { data: allProjectsData } = await fetch(
    `https://www.canada.ca/graphql/execute.json/decd-endc/getSclAllProjectsV2${process.env.AEM_CONTENT_FOLDER}`
  ).then((res) => res.json());

  // Fetch translation dictionary
  const { data: dictionary } = await fetch(
    `https://www.canada.ca/graphql/execute.json/decd-endc/getSclDictionaryV1`
  ).then((res) => res.json());

  const pages = allProjectsData.sclabsPageV1List.items;

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

  // Only get 3 random projects excluding current one
  const otherProjects = shuffle(
    pages.filter((project) => project.scId !== pageData[0].scId)
  ).slice(0, 3);

  // Only include necessary fields for related projects
  const projectsToInclude = otherProjects.map((project) => ({
    scId: project.scId,
    scTitleEn: project.scTitleEn,
    scTitleFr: project.scTitleFr,
    scPageNameEn: project.scPageNameEn,
    scPageNameFr: project.scPageNameFr,
    scLabProjectStagev2: {
      scTermEn: project.scLabProjectStagev2.scTermEn,
      scTermFr: project.scLabProjectStagev2.scTermFr,
    },
    scSocialMediaImageEn: {
      _path: project.scSocialMediaImageEn._path,
      _publishUrl: project.scSocialMediaImageEn._publishUrl,
      width: project.scSocialMediaImageEn.width,
      height: project.scSocialMediaImageEn.height,
      scSocialMediaImageAltTextEn: project.scSocialMediaImageAltTextEn,
    },
    scSocialMediaImageFr: {
      _path: project.scSocialMediaImageFr._path,
      _publishUrl: project.scSocialMediaImageFr._publishUrl,
      width: project.scSocialMediaImageFr.width,
      height: project.scSocialMediaImageFr.height,
      scSocialMediaImageAltTextFr: project.scSocialMediaImageAltTextFr,
    },
    scDescriptionEn: project.scDescriptionEn,
    scDescriptionFr: project.scDescriptionFr,
  }));

  // Optimize articlesData to only include necessary fields
  const optimizedArticlesData = pageData[0].scLabProjectUpdates.map(
    (article) => ({
      scId: article.scId,
      scTitleEn: article.scTitleEn,
      scTitleFr: article.scTitleFr,
      scPageNameEn: article.scPageNameEn,
      scPageNameFr: article.scPageNameFr,
      scDateIssued: article.scDateIssued,
    })
  );

  // Return props for page rendering
  return {
    props: {
      locale: locale,
      adobeAnalyticsUrl: process.env.ADOBE_ANALYTICS_URL ?? null,
      projectData: pageData[0],
      articlesData: optimizedArticlesData,
      dictionary: dictionary.dictionaryV1List.items,
      otherProjects: filterItems(projectsToInclude, pageData[0].scId).slice(
        0,
        3
      ),
      // Include common translations
      ...(await serverSideTranslations(locale, ["common"])),
    },
    // Enable ISR if configured in environment
    revalidate: process.env.ISR_ENABLED === "true" ? 600 : false,
  };
};
