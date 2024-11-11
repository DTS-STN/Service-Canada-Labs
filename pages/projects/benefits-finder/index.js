import Head from "next/head";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { Layout } from "../../../components/organisms/Layout";
import { useEffect, useState } from "react";
import aemServiceInstance from "../../../services/aemServiceInstance";
import { ProjectInfo } from "../../../components/atoms/ProjectInfo";
import Card from "../../../components/molecules/Card";
import { createBreadcrumbs } from "../../../lib/utils/createBreadcrumbs";
import { Heading } from "../../../components/molecules/Heading";
import Image from "next/image";
import stageDictionary from "../../../lib/utils/stageDictionary";
import { sortUpdatesByDate } from "../../../lib/utils/sortUpdatesByDate";
import FragmentRender from "../../../components/fragment_renderer/FragmentRender";
import { ExploreProjects } from "../../../components/organisms/ExploreProjects";
import { ExploreUpdates } from "../../../components/organisms/ExploreUpdates";
import { getDictionaryTerm } from "../../../lib/utils/getDictionaryTerm";
import { filterItems } from "../../../lib/utils/filterItems";
import { shuffle } from "../../../lib/utils/shuffle";

/**
 * Benefits Finder Project Overview Component
 * Displays detailed information about the Benefits Finder project
 * Includes project summary, stage information, updates, and related projects
 */
export default function BenefitsFinderOverview(props) {
  // Initialize state and data management
  const [pageData] = useState(props.pageData.item); // Core page content from AEM
  const updatesData = sortUpdatesByDate(props.updatesData); // Project updates sorted by date
  const allProjects = props.allProjects; // All SC Labs projects

  // Filter dictionary to only include terms needed for this page
  const [filteredDictionary] = useState(
    props.dictionary.filter(
      (item) =>
        item.scId === "STARTED" || // Project start date label
        item.scId === "ENDED" || // Project end date label
        item.scId === "PROJECT-STAGE" || // Project stage label
        item.scId === "SUMMARY" // Summary section label
    )
  );

  // Initialize Adobe Analytics data layer
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
        // Generate breadcrumb navigation from parent pages
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

        {/* Main Content Container */}
        <div className="layout-container">
          <section aria-labelledby="pageMainTitle">
            {/* Two-column grid layout for desktop, stack on mobile */}
            <div className="flex flex-col break-words lg:grid lg:grid-cols-2">
              {/* Page Title - spans full width */}
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

              {/* Project Image - hidden on mobile, shown in right column on desktop */}
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
                      priority // Load image with high priority
                      sizes="33vw"
                      quality={100}
                    />
                  </div>
                </div>
              </div>

              {/* Project Description Text */}
              <p className="row-start-2 font-body text-lg mb-4">
                {props.locale === "en"
                  ? pageData.scFragments[0].scContentEn.json[1].content[0].value
                  : pageData.scFragments[0].scContentFr.json[1].content[0]
                      .value}
              </p>

              {/* Project Information Component - contains key project details */}
              <div className="row-start-3">
                <ProjectInfo
                  locale={props.locale}
                  // Pass translated terms and labels
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
                  // Pass project-specific information
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

              {/* Additional Project Information */}
              <strong className="font-body text-p pt-8">
                {props.locale === "en"
                  ? pageData.scFragments[0].scContentEn.json[5].content[0].value
                  : pageData.scFragments[0].scContentFr.json[5].content[0]
                      .value}
              </strong>
            </div>
          </section>
        </div>

        {/* Render Additional Content Fragments */}
        <FragmentRender
          fragments={pageData.scFragments.slice(3)}
          locale={props.locale}
        />

        {/* Project Updates Section - Only shown if updates exist */}
        {props.updatesData.length !== 0 ? (
          <ExploreUpdates
            locale={props.locale}
            updatesData={sortUpdatesByDate(updatesData)}
            dictionary={props.dictionary}
            heading={
              props.locale === "en"
                ? `${pageData.scTitleEn} ${getDictionaryTerm(
                    props.dictionary,
                    "PROJECT-UPDATES",
                    props.locale
                  )}`
                : `${getDictionaryTerm(
                    props.dictionary,
                    "PROJECT-UPDATES",
                    props.locale
                  )} ${pageData.scTitleFr}`
            }
            linkLabel={`${getDictionaryTerm(
              props.dictionary,
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

        {/* Related Projects Section - Shows 3 random other projects */}
        <ExploreProjects
          heading={getDictionaryTerm(
            props.dictionary,
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
 * Next.js Static Site Generation (SSG) function
 * Fetches all required data at build time
 */
export const getStaticProps = async ({ locale }) => {
  // Fetch main Benefits Finder content from AEM
  const { data: pageData } = await aemServiceInstance.getFragment(
    "benefitsFinderQuery"
  );

  // Fetch translation dictionary
  const { data: dictionary } = await aemServiceInstance.getFragment(
    "dictionaryQuery"
  );

  // Fetch all projects for related projects section
  const { data: allProjects } = await aemServiceInstance.getFragment(
    "projectQuery"
  );

  // Return props for page rendering
  return {
    props: {
      locale: locale,
      adobeAnalyticsUrl: process.env.ADOBE_ANALYTICS_URL ?? null,
      pageData: pageData.sclabsPageV1ByPath,
      updatesData: pageData.sclabsPageV1ByPath.item.scLabProjectUpdates,
      dictionary: dictionary.dictionaryV1List.items,
      // Randomize project order for related projects section
      allProjects: shuffle(allProjects.sclabsPageV1List.items),
      // Include common translations
      ...(await serverSideTranslations(locale, ["common"])),
    },
    // Enable ISR if configured in environment
    revalidate: process.env.ISR_ENABLED === "true" ? 10 : false,
  };
};
