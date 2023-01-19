import Head from "next/head";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "next-i18next";
import { Layout } from "../../../components/organisms/Layout";
import { ActionButton } from "../../../components//atoms/ActionButton";
import { useEffect, useState } from "react";
import aemServiceInstance from "../../../services/aemServiceInstance";
import Card from "../../../components/molecules/Card";
import { Alert } from "../../../components/atoms/Alert";
import { ProjectInfo } from "../../../components/atoms/ProjectInfo";
import { CallToAction } from "../../../components/molecules/CallToAction";

export default function Home(props) {
  const { t } = useTranslation(["common", "vc"]);
  const [pageData] = useState(props.pageData.item);
  const [projectUpdates] = useState(props.projectUpdates.item);
  const [filteredDictionary] = useState(
    props.dictionary.items.filter(
      (item) =>
        item.scId === "STARTED" ||
        item.scId === "ENDED" ||
        item.scId === "PROJECT-STAGE" ||
        item.scId === "SUMMARY"
    )
  );

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
        langUrl={
          props.locale === "en" ? pageData.scPageNameFr : pageData.scPageNameEn
        }
        breadcrumbItems={[
          { text: t("siteTitle"), link: t("breadCrumbsHref1") },
          { text: t("menuLink1"), link: t("breadCrumbsHref2") },
        ]}
      >
        <Head>
          {props.adobeAnalyticsUrl ? (
            <script src={props.adobeAnalyticsUrl} />
          ) : (
            ""
          )}

          {/* Primary HTML Meta Tags */}
          <title>{`${
            props.locale === "en" ? pageData.scTitleEn : pageData.scTitleFr
          } — ${t("siteTitle")}`}</title>
          <meta name="description" content={`${t("vc:metaDescription")}`} />
          <meta name="author" content="Service Canada" />
          <link rel="icon" href="/favicon.ico" />
          <link rel="canonical" href={t("vc:canonicalURL")} />
          <link rel="schema.dcterms" href="http://purl.org/dc/terms/" />
          <meta name="keywords" content={t("vc:keywords")} />

          {/* DCMI Meta Tags */}
          <meta
            name="dcterms.title"
            content={`${
              props.locale === "en" ? pageData.scTitleEn : pageData.scTitleFr
            } — ${t("siteTitle")}`}
          />
          <meta
            name="dcterms.language"
            content={props.locale === "en" ? "eng" : "fra"}
            title="ISO639-2/T"
          />
          <meta name="dcterms.creator" content="Service Canada" />
          <meta name="dcterms.accessRights" content="2" />
          <meta
            name="dcterms.service"
            content="ESDC-EDSC_SCLabs-LaboratoireSC"
          />
          <meta name="dcterms.issued" title="W3CDTF" content="2021-07-20" />

          <meta name="dcterms.modified" title="W3CDTF" content="2021-12-16" />
          <meta name="dcterms.description" content={t("vc:metaDescription")} />
          <meta
            name="dcterms.subject"
            title="gccore"
            content={`${t("vc:metaSubject")}`}
          />
          <meta name="dcterms.spatial" content="Canada" />

          {/* Open Graph / Facebook */}
          <meta property="og:type" content="website" />
          <meta property="og:locale" content={props.locale} />
          <meta property="og:url" content={t("vc:canonicalURL")} />
          <meta
            property="og:title"
            content={`${
              props.locale === "en" ? pageData.scTitleEn : pageData.scTitleFr
            } — ${t("siteTitle")}`}
          />
          <meta
            property="og:description"
            content={
              props.locale === "en"
                ? pageData.scFragments[0].scContentEn.json[0].content[0].value
                : pageData.scFragments[0].scContentFr.json[0].content[0].value
            }
          />
          <meta property="og:image" content={t("metaImage")} />
          <meta property="og:image:alt" content={t("siteTitle")} />

          {/* Twitter */}
          <meta property="twitter:card" content="summary_large_image" />
          <meta property="twitter:url" content={t("vc:canonicalURL")} />
          <meta
            property="twitter:title"
            content={`${
              props.locale === "en" ? pageData.scTitleEn : pageData.scTitleFr
            } — ${t("siteTitle")}`}
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
          <meta property="twitter:image" content={t("metaImage")} />
          <meta property="twitter:image:alt" content={t("siteTitle")} />
        </Head>

        {/* Virtual Assitant Demo section start -  with link to working prototype */}
        <section className="layout-container my-8">
          <main aria-labelledby="pageMainTitle">
            <div className="flex flex-col break-words lg:grid lg:grid-cols-2 gap-4 lg:gap-6">
              <h1 className="text-h1 border-h1-red-bar" id="pageMainTitle">
                {props.locale === "en"
                  ? pageData.scTitleEn
                  : pageData.scTitleFr}
              </h1>
              <div className="row-span-4 p-0 mx-4">
                <div className="flex justify-center">
                  <div className="object-fill h-auto w-auto max-w-450px">
                    <img
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
                      width={468}
                      height={462}
                    />
                  </div>
                </div>
              </div>
              <p className="font-body text-lg">
                {props.locale === "en"
                  ? pageData.scFragments[0].scContentEn.json[1].content[0].value
                  : pageData.scFragments[0].scContentFr.json[1].content[0]
                      .value}
              </p>
              <ProjectInfo
                termStarted={
                  props.locale === "en"
                    ? filteredDictionary[2].scTermEn
                    : filteredDictionary[2].scTermFr
                }
                termEnded={
                  props.locale === "en"
                    ? filteredDictionary[0].scTermEn
                    : filteredDictionary[0].scTermFr
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
                stage={
                  pageData.scFragments[0].scContentEn.json[4].content[0].value
                }
                dateStarted={
                  pageData.scFragments[0].scContentEn.json[2].content[0].value
                }
                dateEnded={
                  pageData.scFragments[0].scContentEn.json[3].content[0].value
                }
                term={
                  pageData.scFragments[1].scContentEn.json[0].content[0].value
                }
                definition={
                  props.locale === "en"
                    ? pageData.scFragments[1].scContentEn.json[0].content[1]
                        .value
                    : pageData.scFragments[1].scContentEn.json[0].content[1]
                        .value
                }
                summary={
                  props.locale === "en"
                    ? pageData.scFragments[0].scContentEn.json[5].content[0]
                        .value
                    : pageData.scFragments[0].scContentFr.json[5].content[0]
                        .value
                }
              />
            </div>
          </main>
          <div className="my-8">
            <h2>
              {props.locale === "en"
                ? pageData.scFragments[0].scContentEn.json[6].content[0].value
                : pageData.scFragments[0].scContentFr.json[6].content[0].value}
            </h2>
            <Card
              showDate
              datePosted={projectUpdates.scDateModifiedOverwrite}
              title={
                props.locale === "en"
                  ? projectUpdates.scTitleEn
                  : projectUpdates.scTitleFr
              }
              description={
                props.locale === "en"
                  ? projectUpdates.scFragments[0].scContentEn.json[3].content[0]
                      .value
                  : projectUpdates.scFragments[0].scContentFr.json[3].content[0]
                      .value
              }
              // TODO: Maybe move the full path URL in AEM to the application level that way content
              // managers won't need to concern themselves with multi-part URLs
              href={
                props.locale === "en"
                  ? projectUpdates.scPageNameEn
                  : projectUpdates.scPageNameFr
              }
              blog
            />
          </div>
          <div>
            <h2>
              {props.locale === "en"
                ? pageData.scFragments[3].scTitleEn
                : pageData.scFragments[3].scTitleFr}
            </h2>
            <Alert
              triangle
              title={
                props.locale === "en"
                  ? pageData.scFragments[3].scFragments[0].scTitleEn
                  : pageData.scFragments[3].scFragments[0].scTitleFr
              }
              text={
                props.locale === "en"
                  ? pageData.scFragments[3].scFragments[0].scContentEn.json[0]
                      .content[0].value
                  : pageData.scFragments[3].scFragments[0].scContentFr.json[0]
                      .content[0].value
              }
            />
            <p className="flex mb-4 text-center">
              <ActionButton
                id="signup-btn"
                custom={`py-1.5 px-3 rounded text-white text-base lg:text-p font-display bg-custom-blue-dark hover:bg-custom-blue-light border border-custom-blue-darker active:bg-custom-blue-darker hover:ring-2 hover:ring-white`}
                className=""
                href={
                  props.locale === "en"
                    ? pageData.scFragments[3].scLabsButton[0].scDestinationURLEn
                    : pageData.scFragments[3].scLabsButton[0].scDestinationURLFr
                }
                text={
                  props.locale === "en"
                    ? pageData.scFragments[3].scLabsButton[0].scTitleEn
                    : pageData.scFragments[3].scLabsButton[0].scTitleFr
                }
                ariaExpanded={props.ariaExpanded}
              />
            </p>
          </div>
        </section>
        {/* END Virtual Assistant Demo section end for working prototype */}

        <CallToAction
          title={
            props.locale === "en"
              ? pageData.scFragments[4].scTitleEn
              : pageData.scFragments[4].scTitleFr
          }
          description={
            props.locale === "en"
              ? pageData.scFragments[4].scContentEn.json[0].content[0].value
              : pageData.scFragments[4].scContentFr.json[0].content[0].value
          }
          disclaimer={
            props.locale === "en"
              ? pageData.scFragments[4].scContentEn.json[1].content[0].value
              : pageData.scFragments[4].scContentFr.json[1].content[0].value
          }
          lang={props.locale}
          href={
            props.locale === "en"
              ? pageData.scFragments[4].scLabsButton[0].scDestinationURLEn
              : pageData.scFragments[4].scLabsButton[0].scDestinationURLFr
          }
          hrefText={
            props.locale === "en"
              ? pageData.scFragments[4].scLabsButton[0].scTitleEn
              : pageData.scFragments[4].scLabsButton[0].scTitleFr
          }
        />
      </Layout>
      {props.adobeAnalyticsUrl ? (
        <script type="text/javascript">_satellite.pageBottom()</script>
      ) : (
        ""
      )}
    </>
  );
}

export const getStaticProps = async ({ locale }) => {
  // get page data from AEM
  const { data: pageData } = await aemServiceInstance.getFragment(
    "virtualAssistantQuery"
  );
  // get project updates
  const { data: projectUpdates } = await aemServiceInstance.getFragment(
    "projectUpdatesQuery"
  );
  // get dictionary
  const { data: dictionary } = await aemServiceInstance.getFragment(
    "dictionaryQuery"
  );

  return {
    props: {
      locale: locale,
      adobeAnalyticsUrl: process.env.ADOBE_ANALYTICS_URL,
      pageData: pageData.scLabsPagev1ByPath,
      projectUpdates: projectUpdates.scLabsPagev1ByPath,
      dictionary: dictionary.dictionaryV1List,
      ...(await serverSideTranslations(locale, ["common"])),
    },
  };
};
