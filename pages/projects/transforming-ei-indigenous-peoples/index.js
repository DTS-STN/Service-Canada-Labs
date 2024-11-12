// Import Next.js core components for head management and image optimization
import Head from "next/head";
import Image from "next/image";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useEffect, useState } from "react";
import aemServiceInstance from "../../../services/aemServiceInstance";
import { Layout } from "../../../components/organisms/Layout";
import { ProjectInfo } from "../../../components/atoms/ProjectInfo";
import { Heading } from "../../../components/molecules/Heading";
import TextRender from "../../../components/text_node_renderer/TextRender";
import { ExploreUpdates } from "../../../components/organisms/ExploreUpdates";
import { ExploreProjects } from "../../../components/organisms/ExploreProjects";
import { createBreadcrumbs } from "../../../lib/utils/createBreadcrumbs";
import stageDictionary from "../../../lib/utils/stageDictionary";
import { sortUpdatesByDate } from "../../../lib/utils/sortUpdatesByDate";
import { getDictionaryTerm } from "../../../lib/utils/getDictionaryTerm";
import { shuffle } from "../../../lib/utils/shuffle";
import { filterItems } from "../../../lib/utils/filterItems";

/**
 * Component for the EI (Employment Insurance) Indigenous Overview page
 * Serves as the main landing page for Indigenous-specific EI information
 *
 * This component presents comprehensive information about EI services and programs
 * specifically designed for Indigenous communities, including:
 * - Project overview and current status
 * - Key information and updates
 * - Related projects and resources
 * - Bilingual content support (English/French)
 */
export default function EiIndigenousOverview(props) {
  // Initialize primary page data state
  // Contains main content, metadata, and project information from AEM
  const [pageData] = useState(props.pageData.item);

  // Sort updates by date for chronological display
  // Updates don't need state as they don't change after initial sort
  const updatesData = sortUpdatesByDate(props.updatesData);

  // Initialize state for all related projects
  const [allProjects] = useState(props.allProjects);

  // Filter dictionary to only include status-related terms
  // These terms are used in the ProjectInfo component to display project status
  const [filteredDictionary] = useState(
    props.dictionary.items.filter(
      (item) =>
        item.scId === "STARTED" ||
        item.scId === "ENDED" ||
        item.scId === "PROJECT-STAGE" ||
        item.scId === "SUMMARY"
    )
  );

  // Initialize Adobe Analytics tracking
  // Tracks page views and user interactions for analytics reporting
  useEffect(() => {
    if (props.adobeAnalyticsUrl) {
      window.adobeDataLayer = window.adobeDataLayer || [];
      window.adobeDataLayer.push({ event: "pageLoad" });
    }
  }, []);

  return (
    <>
      {/* Main layout wrapper with language-specific configuration
          Provides consistent site structure and navigation */}
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
        <Head>
          {/* Primary HTML Meta Tags */}
          <title>
            {props.locale === "en"
              ? `${pageData.scTitleEn} - Service Canada Labs`
              : `${pageData.scTitleFr} - Laboratoires de Service Canada`}
          </title>
          <meta
            name="description"
            content={
              props.locale === "en"
                ? pageData.scDescriptionEn.json[0].content[0].value
                : pageData.scDescriptionFr.json[0].content[0].value
            }
          />
          <meta name="author" content="Service Canada" />
          <link rel="icon" href="/favicon.ico" />
          <link
            rel="canonical"
            href={
              "https://alpha.service.canada.ca" +
              `${
                props.locale === "en"
                  ? pageData.scPageNameEn
                  : pageData.scPageNameFr
              }`
            }
          />
          <link rel="schema.dcterms" href="http://purl.org/dc/terms/" />
          <meta
            name="keywords"
            content={
              props.locale === "en"
                ? pageData.scKeywordsEn
                : pageData.scKeywordsFr
            }
          />

          {/* DCMI Meta Tags */}
          <meta
            name="dcterms.title"
            content={
              props.locale === "en" ? pageData.scTitleEn : pageData.scTitleFr
            }
          />
          <meta
            name="dcterms.language"
            content={props.locale === "en" ? "eng" : "fra"}
            title="ISO639-2/T"
          />
          <meta
            name="dcterms.creator"
            content={
              props.locale === "en"
                ? "Employment and Social Development Canada"
                : "Emploi et Développement social Canada"
            }
          />
          <meta name="dcterms.accessRights" content="2" />
          <meta
            name="dcterms.service"
            content="ESDC-EDSC_SCLabs-LaboratoireSC"
          />
          <meta name="dcterms.issued" title="W3CDTF" content="2021-07-20" />

          <meta name="dcterms.modified" title="W3CDTF" content="2021-12-16" />
          <meta
            name="dcterms.description"
            content={
              props.locale === "en"
                ? pageData.scDescriptionEn.json[0].content[0].value
                : pageData.scDescriptionFr.json[0].content[0].value
            }
          />
          <meta
            name="dcterms.subject"
            title="gccore"
            content={pageData.scSubject}
          />
          <meta name="dcterms.spatial" content="Canada" />

          {/* Open Graph / Facebook */}
          <meta property="og:type" content="website" />
          <meta property="og:locale" content={props.locale} />
          <meta
            property="og:url"
            content={
              "https://alpha.service.canada.ca" +
              `${
                props.locale === "en"
                  ? pageData.scPageNameEn
                  : pageData.scPageNameFr
              }`
            }
          />
          <meta
            property="og:title"
            content={
              props.locale === "en" ? pageData.scTitleEn : pageData.scTitleFr
            }
          />
          <meta
            property="og:description"
            content={
              props.locale === "en"
                ? pageData.scDescriptionEn.json[0].content[0].value
                : pageData.scDescriptionFr.json[0].content[0].value
            }
          />
          <meta
            property="og:image"
            content={pageData.scFragments[2].scImageEn._publishUrl}
          />
          <meta
            property="og:image:alt"
            content={
              props.locale === "en"
                ? pageData.scFragments[2].scImageAltTextEn
                : pageData.scFragments[2].scImageAltTextFr
            }
          />

          {/* Twitter */}
          <meta property="twitter:card" content="summary_large_image" />
          <meta
            property="twitter:url"
            content={
              "https://alpha.service.canada.ca" +
              `${
                props.locale === "en"
                  ? pageData.scPageNameEn
                  : pageData.scPageNameFr
              }`
            }
          />
          <meta
            property="twitter:title"
            content={
              props.locale === "en" ? pageData.scTitleEn : pageData.scTitleFr
            }
          />
          <meta name="twitter:creator" content="Service Canada" />
          <meta
            property="twitter:description"
            content={
              props.locale === "en"
                ? pageData.scDescriptionEn.json[0].content[0].value
                : pageData.scDescriptionFr.json[0].content[0].value
            }
          />
          <meta
            property="twitter:image"
            content={pageData.scFragments[2].scImageEn._publishUrl}
          />
          <meta
            property="twitter:image:alt"
            content={
              props.locale === "en"
                ? pageData.scFragments[2].scImageAltTextEn
                : pageData.scFragments[2].scImageAltTextFr
            }
          />
        </Head>

        {/* Main content container with hero section */}
        <div className="layout-container">
          <section aria-labelledby="pageMainTitle">
            {/* Two-column grid layout for desktop view */}
            <div className="flex flex-col break-words lg:grid lg:grid-cols-2">
              {/* Page title spanning both columns */}
              <div className="col-span-2">
                <Heading
                  tabIndex="-1"
                  id="pageMainTitle"
                  title={
                    props.locale === "en"
                      ? pageData.scTitleEn
                      : pageData.scTitleFr
                  }
                />
              </div>

              {/* Feature image - hidden on mobile, shown on desktop */}
              <div className="hidden lg:grid row-span-2 row-start-2 col-start-2 p-0 mx-4">
                <div className="flex justify-center">
                  <div className="object-fill max-w-350px">
                    <Image
                      src={
                        props.locale === "en"
                          ? pageData.scFragments[2].scImageEn._publishUrl
                          : pageData.scFragments[2].scImageFr._publishUrl
                      }
                      alt={
                        props.locale === "en"
                          ? pageData.scFragments[2].scImageAltTextEn
                          : pageData.scFragments[2].scImageAltTextFr
                      }
                      width={pageData.scFragments[2].scImageEn.width}
                      height={pageData.scFragments[2].scImageEn.height}
                      priority // Load image with high priority for above-the-fold content
                      sizes="33vw"
                      quality={100}
                    />
                  </div>
                </div>
              </div>

              {/* Introduction paragraph */}
              <p className="row-start-2 font-body text-lg mb-4">
                {props.locale === "en"
                  ? pageData.scFragments[0].scContentEn.json[1].content[0].value
                  : pageData.scFragments[0].scContentFr.json[1].content[0]
                      .value}
              </p>

              {/* Project information component displaying key project details */}
              <div className="row-start-3">
                <ProjectInfo
                  locale={props.locale}
                  termStarted={
                    props.locale === "en"
                      ? filteredDictionary[2].scTermEn
                      : filteredDictionary[2].scTermFr
                  }
                  termStage={
                    props.locale === "en"
                      ? filteredDictionary[1].scTermEn
                      : filteredDictionary[1].scTermFr
                  }
                  termSummary={
                    props.locale === "en"
                      ? filteredDictionary[3].scTermEn
                      : filteredDictionary[3].scTermFr
                  }
                  dateStarted={
                    pageData.scFragments[0].scContentEn.json[2].content[0].value
                  }
                  term={
                    props.locale === "en"
                      ? pageData.scFragments[0].scContentEn.json[0].content[0]
                          .value + " "
                      : pageData.scFragments[0].scContentFr.json[0].content[0]
                          .value + " "
                  }
                  definition={
                    props.locale === "en"
                      ? pageData.scFragments[1].scContentEn.json[0].content[1]
                          .value
                      : pageData.scFragments[1].scContentFr.json[0].content[1]
                          .value
                  }
                  information={
                    props.locale === "en"
                      ? pageData.scFragments[1].scTitleEn
                      : pageData.scFragments[1].scTitleFr
                  }
                  stage={
                    props.locale === "en"
                      ? stageDictionary.en[pageData.scLabProjectStage]
                      : stageDictionary.fr[pageData.scLabProjectStage]
                  }
                  summary={
                    props.locale === "en"
                      ? pageData.scLabProjectSummaryEn.json[0].content[0].value
                      : pageData.scLabProjectSummaryFr.json[0].content[0].value
                  }
                />
              </div>
            </div>
          </section>
        </div>

        {/* Main content text section
            Uses grid layout for responsive column sizing */}
        <div className="layout-container mt-[48px] mb-24 grid grid-cols-12">
          <div className="col-span-12 lg:col-span-7">
            <TextRender
              data={
                props.locale === "en"
                  ? pageData.scFragments[0].scContentEn.json.slice(5)
                  : pageData.scFragments[0].scContentFr.json.slice(5)
              }
            />
          </div>
        </div>

        {/* Conditional rendering of updates section if updates exist */}
        {props.updatesData.length !== 0 ? (
          <ExploreUpdates
            locale={props.locale}
            updatesData={sortUpdatesByDate(updatesData)}
            dictionary={props.dictionary}
            heading={
              props.locale === "en"
                ? `${pageData.scTitleEn} ${getDictionaryTerm(
                    props.dictionary.items,
                    "PROJECT-UPDATES",
                    props.locale
                  )}`
                : `${getDictionaryTerm(
                    props.dictionary.items,
                    "PROJECT-UPDATES",
                    props.locale
                  )} ${pageData.scTitleFr}`
            }
            linkLabel={`${getDictionaryTerm(
              props.dictionary.items,
              "DICTIONARY-SEE-ALL-UPDATES-PROJECT",
              props.locale
            )}`}
            href={
              props.locale === "en"
                ? `/en/updates?project=${pageData.scTitleEn}`
                : `/fr/mises-a-jour?projet=${pageData.scTitleFr}`
            }
          />
        ) : null}

        {/* Related projects section
            Shows up to 3 related projects, excluding the current project */}
        <ExploreProjects
          heading={getDictionaryTerm(
            props.dictionary.items,
            "EXPLORE-OTHER-PROJECTS",
            props.locale
          )}
          locale={props.locale}
          projects={filterItems(allProjects, pageData.scId).slice(0, 3)}
        />
      </Layout>
    </>
  );
}

/**
 * Next.js getStaticProps function to fetch data at build time
 * Retrieves all necessary page data from AEM content repository
 *
 * @param {Object} context Contains locale information for internationalization
 * @returns {Object} Props for the page component including all required data
 */
export const getStaticProps = async ({ locale }) => {
  // Fetch main page content and structure from AEM
  const { data: pageData } = await aemServiceInstance.getFragment(
    "indigenousEiQuery"
  );

  // Fetch dictionary terms for consistent translations across the site
  const { data: dictionary } = await aemServiceInstance.getFragment(
    "dictionaryQuery"
  );

  // Fetch all projects data for the related projects section
  const { data: allProjects } = await aemServiceInstance.getFragment(
    "projectQuery"
  );

  // Return props object with all necessary data and configuration
  return {
    props: {
      locale: locale,
      adobeAnalyticsUrl: process.env.ADOBE_ANALYTICS_URL ?? null,
      pageData: pageData.sclabsPageV1ByPath,
      updatesData: pageData.sclabsPageV1ByPath.item.scLabProjectUpdates,
      dictionary: dictionary.dictionaryV1List,
      allProjects: shuffle(allProjects.sclabsPageV1List.items),
      // Include necessary translation configuration
      ...(await serverSideTranslations(locale, ["common"])),
    },
    // Configure ISR (Incremental Static Regeneration) if enabled
    revalidate: process.env.ISR_ENABLED === "true" ? 10 : false,
  };
};
