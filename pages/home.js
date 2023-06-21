import Head from "next/head";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { Layout } from "../components/organisms/Layout";
import { useEffect, useState } from "react";
import Card from "../components/molecules/Card";
import { Alert } from "../components/atoms/Alert";
import aemServiceInstance from "../services/aemServiceInstance";

export default function Home(props) {
  const [pageData] = useState(props.pageData.item);
  const [experimentsData] = useState(props.experimentsData);

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
        dateModifiedOverride={pageData.scDateModifiedOverwrite}
      >
        <Head>
          {props.adobeAnalyticsUrl ? (
            <script src={props.adobeAnalyticsUrl} />
          ) : (
            ""
          )}

          {/* Primary HTML Meta Tags */}
          <title>
            {props.locale === "en"
              ? pageData.scShortTitleEn
              : pageData.scShortTitleFr}
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
              props.locale === "en"
                ? pageData.scShortTitleEn
                : pageData.scShortTitleFr
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
              props.locale === "en"
                ? pageData.scShortTitleEn
                : pageData.scShortTitleFr
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
              props.locale === "en"
                ? pageData.scShortTitleEn
                : pageData.scShortTitleFr
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
        <section className="layout-container mb-24 mt-8">
          <div className="flex">
            <div id="header-text">
              <h1
                className="font-display text-h1 font-bold"
                tabIndex="-1"
                id="pageMainTitle"
              >
                {props.locale === "en"
                  ? pageData.scFragments[0].scContentEn.json[0].content[0].value
                  : pageData.scFragments[0].scContentFr.json[0].content[0]
                      .value}
              </h1>
              <p className="font-body">
                {props.locale === "en"
                  ? pageData.scFragments[0].scContentEn.json[1].content[0].value
                  : pageData.scFragments[0].scContentFr.json[1].content[0]
                      .value}
              </p>
              <p className="font-body pt-6">
                {props.locale === "en"
                  ? pageData.scFragments[0].scContentEn.json[2].content[0].value
                  : pageData.scFragments[0].scContentFr.json[2].content[0]
                      .value}
              </p>
            </div>
            <span
              className="hidden xl:flex w-full lg:ml-8"
              style={{ height: "320px", width: "500px", minWidth: "500px" }}
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
          <div className="lg:flex">
            <span className="w-full">
              <h2 className="mt-12 text-h1l">
                {props.locale === "en"
                  ? pageData.scFragments[0].scContentEn.json[3].content[0].value
                  : pageData.scFragments[0].scContentFr.json[3].content[0]
                      .value}{" "}
              </h2>
              <p className="font-body">
                {props.locale === "en"
                  ? pageData.scFragments[0].scContentEn.json[4].content[0].value
                  : pageData.scFragments[0].scContentFr.json[4].content[0]
                      .value}{" "}
              </p>
              <ul>
                <li>
                  <p className="font-body">
                    {props.locale === "en"
                      ? pageData.scFragments[0].scContentEn.json[5].content[0]
                          .content[0].value
                      : pageData.scFragments[0].scContentFr.json[5].content[0]
                          .content[0].value}{" "}
                  </p>
                </li>
                <li>
                  <p className="font-body">
                    {props.locale === "en"
                      ? pageData.scFragments[0].scContentEn.json[5].content[1]
                          .content[0].value
                      : pageData.scFragments[0].scContentFr.json[5].content[1]
                          .content[0].value}{" "}
                  </p>
                </li>
              </ul>
            </span>
          </div>
          <h2 className="text-h1l mt-12">
            {props.locale === "en"
              ? pageData.scFragments[0].scContentEn.json[6].content[0].value
              : pageData.scFragments[0].scContentFr.json[6].content[0]
                  .value}{" "}
          </h2>
          <div className="grid lg:grid-cols-2 gap-x-8 lg:gap-y-12">
            <Card
              showImage
              imgSrc={
                props.locale === "en"
                  ? `https://www.canada.ca${experimentsData.scSocialMediaImageEn._path}`
                  : `https://www.canada.ca${experimentsData.scSocialMediaImageFr._path}`
              }
              imgAlt={
                props.locale === "en"
                  ? experimentsData.scSocialMediaImageAltTextEn
                  : experimentsData.scSocialMediaImageAltTextFr
              }
              title={
                props.locale === "en"
                  ? experimentsData.scTitleEn
                  : experimentsData.scTitleFr
              }
              href={
                props.locale === "en"
                  ? experimentsData.scPageNameEn
                  : experimentsData.scPageNameFr
              }
              description={
                props.locale === "en"
                  ? experimentsData.scDescriptionEn.json[0].content[0].value
                  : experimentsData.scDescriptionFr.json[0].content[0].value
              }
            />
          </div>
          <Alert
            title={
              props.locale === "en"
                ? pageData.scFragments[2].scTitleEn
                : pageData.scFragments[2].scTitleFr
            }
            text={
              props.locale === "en" ? (
                <>
                  {pageData.scFragments[2].scContentEn.json[0].content[0].value}
                  <a
                    className="underline text-canada-footer-font hover:text-canada-footer-hover-font-blue"
                    href={
                      pageData.scFragments[2].scContentEn.json[0].content[1]
                        .data.href
                    }
                  >
                    {
                      pageData.scFragments[2].scContentEn.json[0].content[1]
                        .value
                    }
                  </a>
                  {pageData.scFragments[2].scContentEn.json[0].content[2].value}
                </>
              ) : (
                <>
                  {pageData.scFragments[2].scContentFr.json[0].content[0].value}
                  <a
                    className="underline text-canada-footer-font hover:text-canada-footer-hover-font-blue"
                    href={
                      pageData.scFragments[2].scContentFr.json[0].content[1]
                        .data.href
                    }
                  >
                    {
                      pageData.scFragments[2].scContentFr.json[0].content[1]
                        .value
                    }
                  </a>
                  {pageData.scFragments[2].scContentEn.json[0].content[2].value}
                </>
              )
            }
          />
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
  const { data: pageData } = await aemServiceInstance.getFragment(
    "homePageQuery"
  );
  const { data: experimentsData } = await aemServiceInstance.getFragment(
    "projectQuery"
  );

  return {
    props: {
      locale: locale,
      adobeAnalyticsUrl: process.env.ADOBE_ANALYTICS_URL,
      pageData: pageData.scLabsPagev1ByPath,
      experimentsData: experimentsData.scLabsPagev1List.items[2],
      ...(await serverSideTranslations(locale, ["common"])),
    },
    revalidate: 10,
  };
};
