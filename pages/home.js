import Head from "next/head";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "next-i18next";
import { Layout } from "../components/organisms/Layout";
import { ActionButton } from "../components/atoms/ActionButton";
import { useEffect, useState } from "react";
import Card from "../components/molecules/Card";
import aemServiceInstance from "../services/aemServiceInstance";

export default function Home(props) {
  const { t } = useTranslation("common");
  const [pageData] = useState(props.pageData.item);

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
        langUrl={t("homePath")}
        dateModifiedOverride={pageData.scDateModifiedOverwrite}
      >
        <Head>
          {props.adobeAnalyticsUrl ? (
            <script src={props.adobeAnalyticsUrl} />
          ) : (
            ""
          )}

          {/* Primary HTML Meta Tags */}
          <title>{`${t("scLabsHome")} — ${t("siteTitle")}`}</title>
          <meta name="description" content={`${t("homeMetaDescription")}`} />
          <meta name="author" content="Service Canada" />
          <link rel="icon" href="/favicon.ico" />
          <link rel="schema.dcterms" href="http://purl.org/dc/terms/" />
          <meta name="keywords" content={t("homeKeywords")} />

          {/* DCMI Meta Tags */}
          <meta
            name="dcterms.title"
            content={`${t("scLabsHome")} — ${t("siteTitle")}`}
          />
          <meta
            name="dcterms.language"
            content={props.locale === "en" ? "eng" : "fra"}
            title="ISO639-2/T"
          />
          <meta name="dcterms.description" content={t("homeMetaDescription")} />
          <meta
            name="dcterms.subject"
            title="gccore"
            content={t("metaSubject")}
          />
          <meta name="dcterms.creator" content="Service Canada" />
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
              "https://alpha.service.canada.ca/" +
              `${props.locale}` +
              `${t("homeMetaPath")}`
            }
          />
          <meta
            property="og:title"
            content={`${t("scLabsHome")} — ${t("siteTitle")}`}
          />
          <meta
            property="og:description"
            content={`${t("homeMetaDescription")}`}
          />
          <meta property="og:image" content={`${t("metaImage")}`} />
          <meta property="og:image:alt" content={`${t("siteTitle")}`} />

          {/* Twitter */}
          <meta property="twitter:card" content="summary_large_image" />
          <meta
            property="twitter:url"
            content={
              "https://alpha.service.canada.ca/" +
              `${props.locale}` +
              `${t("homeMetaPath")}`
            }
          />
          <meta
            property="twitter:title"
            content={`${t("scLabsHome")} — ${t("siteTitle")}`}
          />
          <meta name="twitter:creator" content="Service Canada" />
          <meta
            property="twitter:description"
            content={`${t("homeMetaDescription")}`}
          />
          <meta property="twitter:image" content={`${t("metaImage")}`} />
          <meta property="twitter:image:alt" content={`${t("siteTitle")}`} />
        </Head>
        <section className="layout-container mb-12 mt-8">
          <h1
            className="font-display pb-4 text-h1xl font-bold"
            tabIndex="-1"
            id="pageMainTitle"
          >
            {props.locale === "en"
              ? pageData.scFragments[0].scContentEn.json[0].content[0].value
              : pageData.scFragments[0].scContentFr.json[0].content[0].value}
          </h1>
          <p className="font-body">
            {props.locale === "en"
              ? pageData.scFragments[0].scContentEn.json[1].content[0].value
              : pageData.scFragments[0].scContentFr.json[1].content[0].value}
          </p>
          <div className="flex pt-8">
            <div>
              <h2 className="mt-4 text-h1l">
                {props.locale === "en"
                  ? pageData.scFragments[0].scContentEn.json[2].content[0].value
                  : pageData.scFragments[0].scContentFr.json[2].content[0]
                      .value}
              </h2>
              <div className="mb-20 lg:flex">
                <span className="w-full">
                  <p className="mt-4">
                    {props.locale === "en"
                      ? pageData.scFragments[0].scContentEn.json[3].content[0]
                          .value
                      : pageData.scFragments[0].scContentFr.json[3].content[0]
                          .value}{" "}
                  </p>
                  <br />
                  <span className="flex pt-2">
                    <ActionButton
                      className="bg-[#26374A] text-[20px]"
                      href={
                        props.locale === "en"
                          ? pageData.scFragments[2].scDestinationURLEn
                          : pageData.scFragments[2].scDestinationURLFr
                      }
                      text={
                        props.locale === "en"
                          ? pageData.scFragments[2].scTitleEn
                          : pageData.scFragments[2].scTitleFr
                      }
                      id={pageData.scFragments[2].scId}
                      dataCy="AboutButton"
                    />
                  </span>
                </span>
              </div>
            </div>
            <span
              className="hidden xl:flex w-full mt-4 lg:ml-8"
              style={{ height: "347px", width: "500px", minWidth: "500px" }}
              role="presentation"
            >
              <img
                src={
                  props.locale === "en"
                    ? pageData.scFragments[1].scImageEn._publishUrl
                    : pageData.scFragments[1].scImageFr._publishUrl
                }
                alt=""
              />
            </span>
          </div>
          <div className="grid lg:grid-cols-2 gap-x-8 lg:gap-y-12">
            <Card
              showImage
              imgSrc={
                props.locale === "en"
                  ? pageData.scFragments[3].scImageEn._publishUrl
                  : pageData.scFragments[3].scImageFr._publishUrl
              }
              imgAlt=""
              title={
                props.locale === "en"
                  ? pageData.scFragments[3].scTitleEn
                  : pageData.scFragments[3].scTitleFr
              }
              href={
                props.locale === "en"
                  ? pageData.scFragments[3].scLabsButton[0].scDestinationURLEn
                  : pageData.scFragments[3].scLabsButton[0].scDestinationURLFr
              }
              description={
                props.locale === "en"
                  ? pageData.scFragments[3].scContentEn.json[0].content[0].value
                  : pageData.scFragments[3].scContentFr.json[0].content[0].value
              }
              btnId={pageData.scFragments[3].scLabsButton[0].scId}
            />
            <Card
              showImage
              imgSrc={
                props.locale === "en"
                  ? pageData.scFragments[4].scImageEn._publishUrl
                  : pageData.scFragments[4].scImageFr._publishUrl
              }
              imgAlt=""
              title={
                props.locale === "en"
                  ? pageData.scFragments[4].scTitleEn
                  : pageData.scFragments[4].scTitleFr
              }
              href={
                props.locale === "en"
                  ? pageData.scFragments[4].scLabsButton[0].scDestinationURLEn
                  : pageData.scFragments[4].scLabsButton[0].scDestinationURLFr
              }
              description={
                props.locale === "en"
                  ? pageData.scFragments[4].scContentEn.json[0].content[0].value
                  : pageData.scFragments[4].scContentFr.json[0].content[0].value
              }
            />
          </div>
        </section>
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
  const { data } = await aemServiceInstance.getFragment("homePageQuery");

  return {
    props: {
      locale: locale,
      adobeAnalyticsUrl: process.env.ADOBE_ANALYTICS_URL,
      pageData: data.scLabsPagev1ByPath,
      ...(await serverSideTranslations(locale, ["common"])),
    },
  };
};