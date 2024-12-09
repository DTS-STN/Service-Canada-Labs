// Core Next.js imports for page head management and i18n (internationalization)
import Head from "next/head";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
// Custom components imports - using atomic design principles (atoms, molecules, organisms)
import { Layout } from "../components/organisms/Layout";
import { useEffect } from "react";
import Card from "../components/molecules/Card";
// Service for interacting with Adobe Experience Manager (AEM)
import aemServiceInstance from "../services/aemServiceInstance";
import { ContextualAlert } from "../components/molecules/ContextualAlert";
import { Link as LinkWrapper } from "../components/atoms/Link";
import Link from "next/link";
import { ExploreUpdates } from "../components/organisms/ExploreUpdates";
import FragmentRender from "../components/fragment_renderer/FragmentRender";
import { sortUpdatesByDate } from "../lib/utils/sortUpdatesByDate";
import { SurveyCTA } from "../components/molecules/SurveyCTA";

/**
 * Home Page Component for Service Canada Labs
 * Renders the main landing page with projects, updates, and survey CTA
 * Supports bilingual content (English/French) based on locale
 */
export default function Home(props) {
  // Extract content data from props
  const pageData = props.pageData?.item; // Core page content from AEM
  const experimentsData = props.experimentsData; // List of all projects/experiments
  const dictionary = props.dictionary; // Translation dictionary for UI elements
  const updatesData = props.updatesData; // Recent updates for projects

  // Filter to show only currently active projects
  // Projects must have a specific AEM status code to be considered "current"
  const currentProjects = experimentsData.filter((project) => {
    return (
      project.scLabProjectStatus[0] ===
      "gc:custom/decd-endc/project-status/current"
    );
  });

  /**
   * Sorts projects according to a predefined order and returns top 3
   * Order is manually maintained until content strategy is finalized
   * @param {Array} objects - Array of project objects to sort
   * @returns {Array} - Top 3 sorted projects
   */
  const sortProjects = (objects) => {
    // Predefined display order for projects
    const sortOrder = [
      "Transforming EI with Indigenous peoples",
      "Benefits Finder",
      "Making it easier to get benefits",
      "Digital Standards Playbook",
      "New dashboard for My Service Canada Account",
      "Old Age Security Benefits Estimator",
      "Benefits Navigator",
    ];
    // Create lookup object for efficient sorting
    const titleOrder = {};
    for (let i = 0; i < sortOrder.length; i++) {
      titleOrder[sortOrder[i]] = i;
    }

    // Sort projects based on predefined order
    const sorted = objects.sort((a, b) => {
      return titleOrder[a.scTitleEn] - titleOrder[b.scTitleEn];
    });
    return sorted.slice(0, 3); // Return only top 3 projects
  };

  /**
   * Maps current projects to Card components with bilingual support
   * Handles image sources, alt text, and "New update" tags
   */
  const displayCurrentProjects = sortProjects(currentProjects).map(
    (project) => (
      <li key={project.scId} className="list-none ml-0">
        <Card
          showImage
          // Show "New update" tag if project has a future expiry date
          showTag={
            project.scLabsNewExpiryDate &&
            Date.now() <= new Date(project.scLabsNewExpiryDate)
          }
          tagLabel={
            props.locale === "en" ? "New update" : "Nouvelle mise à jour"
          }
          tag="new_update"
          // Bilingual image handling
          imgSrc={
            props.locale === "en"
              ? project.scSocialMediaImageEn._publishUrl
              : project.scSocialMediaImageFr._publishUrl
          }
          imgAlt={
            props.locale === "en"
              ? project.scSocialMediaImageAltTextEn
              : project.scSocialMediaImageAltTextFr
          }
          imgHeight={
            project.scSocialMediaImageEn.height
              ? project.scSocialMediaImageEn.height
              : ""
          }
          imgWidth={
            project.scSocialMediaImageEn.width
              ? project.scSocialMediaImageEn.width
              : ""
          }
          // Bilingual content handling
          title={props.locale === "en" ? project.scTitleEn : project.scTitleFr}
          href={
            props.locale === "en" ? project.scPageNameEn : project.scPageNameFr
          }
          description={
            props.locale === "en"
              ? project.scDescriptionEn.json[0].content[0].value
              : project.scDescriptionFr.json[0].content[0].value
          }
        />
      </li>
    )
  );

  // Initialize Adobe Analytics data layer on page load
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
        // Alternate language URL for language toggle
        langUrl={
          props.locale === "en" ? pageData.scPageNameFr : pageData.scPageNameEn
        }
        dateModifiedOverride={pageData.scDateModifiedOverwrite}
      >
        {/* Page head component for meta tags */}
        <Head>
          {/* Primary HTML Meta Tags */}
          <title>
            {props.locale === "en" ? pageData.scTitleEn : pageData.scTitleFr}
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
          <meta name="dcterms.issued" title="W3CDTF" content="2021-03-18" />
          <meta name="dcterms.modified" title="W3CDTF" content="2021-12-16" />
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
                ? pageData.scDescriptionEn.json[0].content[0].value
                : pageData.scDescriptionFr.json[0].content[0].value
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

        {/* Main Page Content */}
        <div id="pageMainTitle" className="mt-24">
          <FragmentRender
            locale={props.locale}
            fragments={[pageData.scFragments[0]]}
          />
        </div>

        <div className="layout-container">
          {/* Survey Call-to-Action Section */}
          <SurveyCTA
            heading={
              props.locale === "en"
                ? pageData.scFragments[1].scTitleEn
                : pageData.scFragments[1].scTitleFr
            }
            description={
              props.locale === "en"
                ? pageData.scFragments[1].scContentEn.json[0].content[0].value
                : pageData.scFragments[1].scContentFr.json[0].content[0].value
            }
            buttonId={
              props.locale === "en"
                ? pageData.scFragments[1].scLabsButton[0].scId
                : pageData.scFragments[1].scLabsButton[0].scIdFr
            }
            buttonLabel={
              props.locale === "en"
                ? pageData.scFragments[1].scLabsButton[0].scTitleEn
                : pageData.scFragments[1].scLabsButton[0].scTitleFr
            }
            buttonLink={
              props.locale === "en"
                ? pageData.scFragments[1].scLabsButton[0].scDestinationURLEn
                : pageData.scFragments[1].scLabsButton[0].scDestinationURLFr
            }
          />

          {/* Projects Section Title */}
          <h2>
            {props.locale === "en"
              ? pageData.scFragments[2].scContentEn.json[0].content[0].value
              : pageData.scFragments[2].scContentFr.json[0].content[0]
                  .value}{" "}
          </h2>

          {/* Information Alert Section */}
          <div className="mb-8">
            <ContextualAlert
              id="info-alert"
              type="info"
              alert_icon_alt_text="info icon"
              alert_icon_id="info icon"
              message_heading={
                props.locale === "en"
                  ? pageData.scFragments[3].scTitleEn
                  : pageData.scFragments[3].scTitleFr
              }
              message_body={
                // Conditional rendering of alert message with embedded link
                props.locale === "en" ? (
                  <>
                    {
                      pageData.scFragments[3].scContentEn.json[0].content[0]
                        .value
                    }
                    <a
                      className="underline text-canada-footer-font hover:text-canada-footer-hover-font-blue"
                      href={
                        pageData.scFragments[3].scContentEn.json[0].content[1]
                          .data.href
                      }
                    >
                      {
                        pageData.scFragments[3].scContentEn.json[0].content[1]
                          .value
                      }
                    </a>
                    {
                      pageData.scFragments[3].scContentEn.json[0].content[2]
                        .value
                    }
                  </>
                ) : (
                  // French version of alert message
                  <>
                    {
                      pageData.scFragments[3].scContentFr.json[0].content[0]
                        .value
                    }
                    <a
                      className="underline text-canada-footer-font hover:text-canada-footer-hover-font-blue"
                      href={
                        pageData.scFragments[3].scContentFr.json[0].content[1]
                          .data.href
                      }
                    >
                      {
                        pageData.scFragments[3].scContentFr.json[0].content[1]
                          .value
                      }
                    </a>
                    {
                      pageData.scFragments[3].scContentEn.json[0].content[2]
                        .value
                    }
                  </>
                )
              }
            />
          </div>

          {/* Project Cards Grid Section */}
          <div className="mb-4">
            <ul className="grid lg:grid-cols-3 gap-6 list-none ml-0">
              {displayCurrentProjects}
            </ul>
            {/* "See all projects" link */}
            <div className="mt-6 flex justify-end">
              <LinkWrapper
                component={Link}
                id="projectsLink"
                href={
                  props.locale === "en"
                    ? pageData.scFragments[4].scContentEn.json[0].content[0]
                        .data.href
                    : pageData.scFragments[4].scContentFr.json[0].content[0]
                        .data.href
                }
                lang={props.locale}
                text={
                  props.locale === "en"
                    ? pageData.scFragments[4].scContentEn.json[0].content[0]
                        .value
                    : pageData.scFragments[4].scContentFr.json[0].content[0]
                        .value
                }
              />
            </div>
          </div>
        </div>

        {/* Updates Section */}
        <section>
          <ExploreUpdates
            locale={props.locale}
            updatesData={sortUpdatesByDate(updatesData).slice(0, 3)}
            dictionary={dictionary}
            heading={
              props.locale === "en"
                ? pageData.scFragments[5].scContentEn.json[0].content[0].value
                : pageData.scFragments[5].scContentFr.json[0].content[0].value
            }
            linkLabel={
              props.locale === "en"
                ? pageData.scFragments[6].scContentEn.json[0].content[0].value
                : pageData.scFragments[6].scContentFr.json[0].content[0].value
            }
            href={
              props.locale === "en"
                ? pageData.scFragments[6].scContentEn.json[0].content[0].data
                    .href
                : pageData.scFragments[6].scContentFr.json[0].content[0].data
                    .href
            }
          />
        </section>
      </Layout>
    </>
  );
}

/**
 * Next.js Static Site Generation (SSG) function
 * Fetches all required data at build time for static page generation
 * Enables Incremental Static Regeneration (ISR) if configured
 */
export const getStaticProps = async ({ locale }) => {
  // Fetch main page content from AEM
  const { data: pageData } = await fetch(
    `${process.env.AEM_BASE_URL}/getSclHomeV2`
  ).then((res) => res.json());

  // Fetch projects/experiments data
  const { data: experimentsData } = await fetch(
    `${process.env.AEM_BASE_URL}/getSclAllProjectsV2%3BfolderName%3D/content/dam/decd-endc/content-fragments/preview-sclabs`
  ).then((res) => res.json());

  // Fetch updates data for all projects
  const { data: updatesData } = await fetch(
    `${process.env.AEM_BASE_URL}/getSclAllUpdatesV2%3BfolderName%3D/content/dam/decd-endc/content-fragments/preview-sclabs`
  ).then((res) => res.json());

  // Fetch translation dictionary
  const { data: dictionary } = await aemServiceInstance.getFragment(
    "dictionaryQuery"
  );

  // Return all props needed for page rendering
  return {
    props: {
      locale: locale,
      adobeAnalyticsUrl: process.env.ADOBE_ANALYTICS_URL ?? null,
      pageData: pageData.sclabsPageV1ByPath,
      experimentsData: experimentsData.sclabsPageV1List.items,
      updatesData: updatesData.sclabsPageV1List.items,
      dictionary: dictionary.dictionaryV1List.items,
      ...(await serverSideTranslations(locale, ["common"])),
    },
    // Enable ISR if configured in environment
    revalidate: process.env.ISR_ENABLED === "true" ? 10 : false,
  };
};
