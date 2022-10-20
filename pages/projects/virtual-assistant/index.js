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
//  On hold for now
//  import { VirtualConcierge } from "../../../components/organisms/VirtualConcierge";
// import { CallToAction } from "../../../components/molecules/CallToAction";

export default function Home(props) {
  const { t } = useTranslation(["common", "vc"]);
  const [pageData] = useState(props.pageData.item);
  const [projectUpdates] = useState(props.projectUpdates.items);

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
                ? pageData.scFragments[0].scContentEn.json[0].content[0].value
                : pageData.scFragments[0].scContentFr.json[0].content[0].value
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
                  ? pageData.scFragments[0].scContentEn.json[0].content[0].value
                  : pageData.scFragments[0].scContentFr.json[0].content[0]
                      .value}
              </p>
              <ProjectInfo
                stage={
                  props.locale === "en"
                    ? pageData.scFragments[1].projectStageEn
                    : pageData.scFragments[1].projectStageFr
                }
                stageInfo={
                  props.locale === "en"
                    ? pageData.scFragments[5].scContentEn.json[0].content[0]
                        .value
                    : pageData.scFragments[5].scContentFr.json[0].content[0]
                        .value
                }
                info={
                  props.locale === "en"
                    ? pageData.scFragments[5].scContentEn.json[0].content[1]
                        .value
                    : pageData.scFragments[5].scContentFr.json[0].content[1]
                        .value
                }
                dateStarted={pageData.scFragments[1].dateStarted}
                dateEnded={pageData.scFragments[1].dateEnded}
                projectStage={
                  props.locale === "en"
                    ? pageData.scFragments[1].projectStageEn
                    : pageData.scFragments[1].projectStageFr
                }
                status={
                  props.locale === "en"
                    ? pageData.scFragments[1].statusEn
                    : pageData.scFragments[1].statusFr
                }
              />
            </div>
          </main>
          <div className="my-8">
            <h2>
              {props.locale === "en"
                ? pageData.scFragments[0].scContentEn.json[1].content[0].value
                : pageData.scFragments[0].scContentFr.json[1].content[0].value}
            </h2>
            {projectUpdates.map((data, index) => (
              <Card
                showDate
                key={index}
                title={props.locale === "en" ? data.scTitleEn : data.scTitleFr}
                datePosted={data.datePosted}
                description={
                  props.locale === "en"
                    ? data.scDescriptionEn.json[0].content[0].value
                    : data.scDescriptionFr.json[0].content[0].value
                }
                // TODO: Maybe move the full path URL in AEM to the application level that way content
                // managers won't need to concern themselves with multi-part URLs
                href={
                  props.locale === "en"
                    ? data.scFragments.scDestinationURLEn
                    : data.scFragments.scDestinationURLFr
                }
                blog
              />
            ))}
          </div>
          <div>
            <h2>
              {props.locale === "en"
                ? pageData.scFragments[0].scContentEn.json[2].content[0].value
                : pageData.scFragments[0].scContentFr.json[2].content[0].value}
            </h2>
            <Alert
              triangle
              title={
                props.locale === "en"
                  ? pageData.scFragments[3].scTitleEn
                  : pageData.scFragments[3].scTitleFr
              }
              text={
                props.locale === "en"
                  ? pageData.scFragments[3].scContentEn.json[0].content[0].value
                  : pageData.scFragments[3].scContentFr.json[0].content[0].value
              }
            />
            <p className="flex mb-4 text-center">
              <ActionButton
                id="signup-btn"
                custom={`py-1.5 px-3 rounded text-white text-base lg:text-p font-display bg-custom-blue-dark hover:bg-custom-blue-light border border-custom-blue-darker active:bg-custom-blue-darker hover:ring-2 hover:ring-white`}
                className=""
                href={
                  props.locale === "en"
                    ? pageData.scFragments[4].scDestinationURLEn
                    : pageData.scFragments[4].scDestinationURLFr
                }
                text={
                  props.locale === "en"
                    ? pageData.scFragments[4].scTitleEn
                    : pageData.scFragments[4].scTitleFr
                }
                ariaExpanded={props.ariaExpanded}
              />
            </p>
          </div>
        </section>
        {/* END Virtual Assistant Demo section end for working prototype */}

        <CallToAction
          title={t("signupHomeButton")}
          description={t("signupBannerDescription")}
          disclaimer={t("signupBannerDisclaimer")}
          lang={props.locale}
          href={t("signupInfoRedirect")}
          hrefText={t("signupBannerBtnText")}
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

  return {
    props: {
      locale: locale,
      adobeAnalyticsUrl: process.env.ADOBE_ANALYTICS_URL,
      pageData: pageData.sCLabsPageByPath,
      projectUpdates: projectUpdates.sCLabsProjectUpdateList,
      ...(await serverSideTranslations(locale, ["common"])),
    },
  };
};
