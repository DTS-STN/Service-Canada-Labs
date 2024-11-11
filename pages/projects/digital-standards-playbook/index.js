import Head from "next/head";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { Layout } from "../../../components/organisms/Layout";
import { useEffect, useState } from "react";
import aemServiceInstance from "../../../services/aemServiceInstance";
import { ProjectInfo } from "../../../components/atoms/ProjectInfo";
import Card from "../../../components/molecules/Card";
import { createBreadcrumbs } from "../../../lib/utils/createBreadcrumbs";
import { Heading } from "../../../components/molecules/Heading";
import { ActionButton } from "../../../components/atoms/ActionButton";
import Image from "next/image";
import stageDictionary from "../../../lib/utils/stageDictionary";
import { ExploreUpdates } from "../../../components/organisms/ExploreUpdates";
import { ExploreProjects } from "../../../components/organisms/ExploreProjects";
import { shuffle } from "../../../lib/utils/shuffle";
import { filterItems } from "../../../lib/utils/filterItems";
import { sortUpdatesByDate } from "../../../lib/utils/sortUpdatesByDate";
import { getDictionaryTerm } from "../../../lib/utils/getDictionaryTerm";

/**
 * Digital Standards Playbook Page Component
 * Main landing page for the Digital Standards Playbook project
 * Features project overview, survey integration, and related content sections
 */
export default function DigitalStandardsPlaybookPage(props) {
  // Initialize state with content data
  const [pageData] = useState(props.pageData.item); // Page content from AEM
  const [updatesData] = useState(props.updatesData); // Project updates
  const [allProjects] = useState(props.allProjects); // All SC Labs projects

  // Filter dictionary to include only terms needed for project information
  const filteredDictionary = props.dictionary?.filter(
    (item) =>
      item.scId === "STARTED" || // Project start date label
      item.scId === "ENDED" || // Project end date label
      item.scId === "PROJECT-STAGE" || // Project stage label
      item.scId === "SUMMARY" // Summary section label
  );

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
        // Page last modified date with fallback
        dateModifiedOverride={pageData.scDateModifiedOverwrite ?? "2023-11-24"}
        // Generate breadcrumb navigation
        breadcrumbItems={createBreadcrumbs(
          pageData.scBreadcrumbParentPages,
          props.locale
        )}
      >
        {/* Page Head meta tags */}
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
                ? pageData.scFragments[0].scContentEn.json[0].content[0].value
                : pageData.scFragments[0].scContentFr.json[0].content[0].value
            }
          />
          <meta
            property="og:image"
            content={pageData.scSocialMediaImageEn._publishUrl}
          />
          <meta
            property="og:image:alt"
            content={
              props.locale === "en" ? pageData.scTitleEn : pageData.scTitleFr
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
                ? pageData.scFragments[0].scContentEn.json[1].content[0].value
                : pageData.scFragments[0].scContentFr.json[1].content[0].value
            }
          />
          <meta
            property="twitter:image"
            content={pageData.scSocialMediaImageEn._publishUrl}
          />
          <meta
            property="twitter:image:alt"
            content={
              props.locale === "en" ? pageData.scTitleEn : pageData.scTitleFr
            }
          />
        </Head>

        {/* Main Content Container */}
        <div className="layout-container mb-24">
          {/* Hero Section */}
          <section aria-labelledby="pageMainTitle">
            {/* Two-column layout for desktop */}
            <div className="flex flex-col break-words lg:grid lg:grid-cols-2">
              {/* Page Title - Full width */}
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

              {/* Feature Image - Hidden on mobile, shown in right column on desktop */}
              <div className="hidden lg:grid row-span-2 row-start-2 col-start-2 p-0 mx-4">
                <div className="flex justify-center">
                  <div className="object-fill h-auto w-auto max-w-450px">
                    <Image
                      src={
                        props.locale === "en"
                          ? pageData.scFragments[2].scImageEn._publishUrl
                          : pageData.scFragments[2].scImageFr._publishUrl
                      }
                      alt={
                        (props.locale === "en"
                          ? pageData.scFragments[2].scImageAltTextEn
                          : pageData.scFragments[2].scImageAltTextFr) ?? ""
                      }
                      height={pageData.scFragments[2].scImageEn.height}
                      width={pageData.scFragments[2].scImageEn.width}
                      priority // Load image with high priority
                      sizes="33vw"
                      quality={100}
                    />
                  </div>
                </div>
              </div>

              {/* Project Description */}
              <p className="row-start-2 mb-4">
                {props.locale === "en"
                  ? pageData.scFragments[0].scContentEn.json[1].content[0].value
                  : pageData.scFragments[0].scContentFr.json[1].content[0]
                      .value}
              </p>

              {/* Project Information Component */}
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
                      ? pageData.scFragments[1].scContentEn.json[0].content[0]
                          .value
                      : pageData.scFragments[1].scContentFr.json[0].content[0]
                          .value
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
                      ? pageData.scFragments[2].scTitleEn
                      : pageData.scFragments[2].scTitleFr
                  }
                  stage={
                    props.locale === "en"
                      ? stageDictionary.en[pageData.scLabProjectStage]
                      : stageDictionary.fr[pageData.scLabProjectStage]
                  }
                  summary={
                    props.locale === "en"
                      ? pageData.scFragments[0].scContentEn.json[4].content[0]
                          .value
                      : pageData.scFragments[0].scContentFr.json[4].content[0]
                          .value
                  }
                />
              </div>
            </div>
          </section>

          {/* Main Content Section */}
          <section id="pageMainContent">
            <div className="grid grid-cols-12">
              {/* First Content Block */}
              <h2 className="col-span-12">{/* Bilingual heading */}</h2>
              {/* Content paragraphs - 8 columns on desktop */}
              <p className="col-span-12 xl:col-span-8">
                {/* First paragraph */}
              </p>
              <p className="col-span-12 xl:col-span-8">
                {/* Second paragraph */}
              </p>

              {/* Second Content Block */}
              <h2 className="col-span-12">{/* Bilingual heading */}</h2>
              <p className="col-span-12 xl:col-span-8">
                {/* Content paragraph */}
              </p>

              {/* Survey Call-to-Action Button */}
              <ActionButton
                id="take-survey"
                style="primary"
                custom="col-span-12 my-6"
                href={
                  props.locale === "en"
                    ? pageData.scFragments[3].scDestinationURLEn
                    : pageData.scFragments[3].scDestinationURLFr
                }
                text={
                  props.locale === "en"
                    ? pageData.scFragments[3].scTitleEn
                    : pageData.scFragments[3].scTitleFr
                }
                ariaExpanded={props.ariaExpanded}
              />

              {/* Additional Content with Link */}
              <p className="col-span-12 xl:col-span-8">
                {/* Text before link */}
                <a
                  className="underline underline-offset-[6px]"
                  href={
                    props.locale === "en"
                      ? pageData.scFragments[4].scContentEn.json[0].content[1]
                          .data.href
                      : pageData.scFragments[4].scContentFr.json[0].content[1]
                          .data.href
                  }
                >
                  {/* Link text */}
                </a>
                {/* Text after link */}
              </p>
              {/* Final paragraph */}
              <p className="col-span-12 xl:col-span-8">{/* Content */}</p>
            </div>
          </section>
        </div>

        {/* Updates Section - Conditionally rendered if updates exist */}
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

        {/* Related Projects Section */}
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
  // Fetch Digital Standards page content from AEM
  const { data: pageData } = await aemServiceInstance.getFragment(
    "getDigitalStandardsPlaybookPage"
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
      // Randomize projects order for related projects
      allProjects: shuffle(allProjects.sclabsPageV1List.items),
      // Include common translations
      ...(await serverSideTranslations(locale, ["common"])),
    },
    // Enable ISR if configured in environment
    revalidate: process.env.ISR_ENABLED === "true" ? 10 : false,
  };
};
