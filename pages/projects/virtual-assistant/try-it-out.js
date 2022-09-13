import Head from "next/head";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "next-i18next";
import { Layout } from "../../../components/organisms/Layout";
import { useEffect, useState } from "react";
import styles from "./index.module.css";
import { Alert } from "../../../components/atoms/Alert";
import { CallToAction } from "../../../components/molecules/CallToAction";
import queryGraphQL from "../../../graphql/client";
import getTryItOutPage from "../../../graphql/queries/tryVirtualAssistantQuery.graphql";

export default function Home(props) {
  const { t } = useTranslation(["common", "vc"]);
  const [pageData] = useState(props.pageData.item);
  const language = props.locale === "en" ? "en" : "fr";

  useEffect(() => {
    if (process.env.NEXT_PUBLIC_ADOBE_ANALYTICS_URL) {
      window.adobeDataLayer = window.adobeDataLayer || [];
      window.adobeDataLayer.push({ event: "pageLoad" });
    }
  }, []);

  return (
    <>
      <Layout
        locale={props.locale}
        dateModifiedOverride={pageData.scDateModifiedOverwrite}
        langUrl={t("virtualAssistantTryItPath")}
        breadcrumbItems={[
          { text: t("siteTitle"), link: t("breadCrumbsHref1") },
          { text: t("menuLink1"), link: t("breadCrumbsHref2") },
        ]}
      >
        <Head>
          {process.env.NEXT_PUBLIC_ADOBE_ANALYTICS_URL ? (
            <script src={process.env.NEXT_PUBLIC_ADOBE_ANALYTICS_URL} />
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
            content={`${t("vc:virtualAssistantTitleStatic")} — ${t(
              "siteTitle"
            )}`}
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
            content={`${t("vc:virtualAssistantTitleStatic")} — ${t(
              "siteTitle"
            )}`}
          />
          <meta
            property="og:description"
            content={t("vc:virtualAssistantBioStatic")}
          />
          <meta property="og:image" content={t("metaImage")} />
          <meta property="og:image:alt" content={t("siteTitle")} />

          {/* Twitter */}
          <meta property="twitter:card" content="summary_large_image" />
          <meta property="twitter:url" content={t("vc:canonicalURL")} />
          <meta
            property="twitter:title"
            content={`${t("vc:virtualAssistantTitleStatic")} — ${t(
              "siteTitle"
            )}`}
          />
          <meta name="twitter:creator" content="Service Canada" />
          <meta
            property="twitter:description"
            content={t("vc:virtualAssistantBioStatic")}
          />
          <meta property="twitter:image" content={t("metaImage")} />
          <meta property="twitter:image:alt" content={t("siteTitle")} />
        </Head>

        {/* Virtual Assitant Demo section start -  with link to working prototype */}

        <div className="w-auto py-1" id="pageMainTitle">
          <section className="layout-container my-6">
            <div className="w-auto h-auto">
              <div className="flex flex-col break-words lg:grid lg:grid-cols-2 gap-4 lg:gap-6">
                <h1 className="text-h1 border-h1-red-bar">
                  {props.locale === "en"
                    ? pageData.scFragments[0].scContentEn.json[0].content[0]
                        .value
                    : pageData.scFragments[0].scContentFr.json[0].content[0]
                        .value}
                </h1>
                <div className="row-span-4 p-0 mx-4">
                  <div className="flex justify-center">
                    <div className="object-fill h-auto w-auto max-w-450px">
                      <img
                        src={
                          props.locale === "en"
                            ? pageData.scFragments[1].scImageEn._publishUrl
                            : pageData.scFragments[1].scImageFr._publishUrl
                        }
                        width={468}
                        height={462}
                        alt=""
                      />
                    </div>
                  </div>
                </div>
                <p className="font-body text-lg">
                  {props.locale === "en"
                    ? pageData.scFragments[0].scContentEn.json[1].content[0]
                        .value
                    : pageData.scFragments[0].scContentFr.json[1].content[0]
                        .value}
                </p>
                <p className="text-lg font-body">
                  {props.locale === "en"
                    ? pageData.scFragments[0].scContentEn.json[2].content[0]
                        .value
                    : pageData.scFragments[0].scContentFr.json[2].content[0]
                        .value}
                </p>
                <ul className="list-outside list-disc font-body text-lg leading-tight -mt-9">
                  {(props.locale === "en"
                    ? pageData.scFragments[0].scContentEn.json[3]
                    : pageData.scFragments[0].scContentFr.json[3]
                  ).content.map((item) => (
                    <li key={item.content[0].value}>{item.content[0].value}</li>
                  ))}
                </ul>
              </div>
            </div>
          </section>
        </div>

        <section className="layout-container my-6 pb-4">
          <div className="w-auto mb-6">
            <h2 className={`mb-8 mt-2  ${styles.h2}`}>
              {props.locale === "en"
                ? pageData.scFragments[0].scContentEn.json[4].content[0].value
                : pageData.scFragments[0].scContentFr.json[4].content[0].value}
            </h2>
            <Alert
              title={
                props.locale === "en"
                  ? pageData.scFragments[2].scTitleEn
                  : pageData.scFragments[2].scTitleFr
              }
              text={
                props.locale === "en" ? (
                  <>
                    {
                      pageData.scFragments[2].scContentEn.json[0].content[0]
                        .value
                    }
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
                  </>
                ) : (
                  <>
                    {
                      pageData.scFragments[2].scContentFr.json[0].content[0]
                        .value
                    }
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
                  </>
                )
              }
            />
            <div className="flex flex-col lg:grid lg:grid-cols-2 gap-4 lg:gap-6">
              <a
                className={`p-8 mr-4 inline-block rounded-[24px] border-2 focus:ring-1 focus:ring-black focus:ring-offset-2 active:border-custom-blue-hover hover:border-custom-blue-hover ${styles.card}`}
                data-testid={pageData.scFragments[3].scId}
                id={pageData.scFragments[3].scId}
                data-cy={pageData.scFragments[3].scId}
                role="button"
                draggable="false"
                href={
                  props.locale === "en"
                    ? pageData.scFragments[3].scLabsButton[0].scDestinationURLEn
                    : pageData.scFragments[3].scLabsButton[0].scDestinationURLFr
                }
              >
                <h3 className={`mb-1 ${styles.h3}`}>
                  {props.locale === "en"
                    ? pageData.scFragments[3].scTitleEn
                    : pageData.scFragments[3].scTitleFr}
                </h3>
                <p className="w-auto mb-8 text-[17px]">
                  {props.locale === "en"
                    ? pageData.scFragments[3].scContentEn.json[0].content[0]
                        .value
                    : pageData.scFragments[3].scContentFr.json[0].content[0]
                        .value}
                </p>
                <div className="flex justify-center">
                  <div className="object-fill w-auto h-auto mx-auto mb-8 mt-9">
                    <img
                      src={
                        props.locale === "en"
                          ? pageData.scFragments[3].scImageEn._publishUrl
                          : pageData.scFragments[3].scImageFr._publishUrl
                      }
                      alt=""
                      width={284}
                      height={203}
                    />
                  </div>
                </div>
                <div className="w-auto flex justify-center">
                  <p className="text-center font-bold underline text-sm text-page-navigation-link">
                    {props.locale === "en"
                      ? pageData.scFragments[3].scLabsButton[0].scTitleEn
                      : pageData.scFragments[3].scLabsButton[0].scTitleFr}
                  </p>
                </div>
              </a>

              <a
                className={`p-8 mr-4 inline-block rounded-[24px] border-2 focus:ring-1 focus:ring-black focus:ring-offset-2 active:border-custom-blue-hover hover:border-custom-blue-hover ${styles.card}`}
                data-testid={pageData.scFragments[4].scId}
                id={pageData.scFragments[4].scId}
                data-cy={pageData.scFragments[4].scId}
                role="button"
                draggable="false"
                href={
                  props.locale === "en"
                    ? pageData.scFragments[4].scLabsButton[0].scDestinationURLEn
                    : pageData.scFragments[4].scLabsButton[0].scDestinationURLFr
                }
              >
                <h3 className={`mb-1 ${styles.h3}`}>
                  {props.locale === "en"
                    ? pageData.scFragments[4].scTitleEn
                    : pageData.scFragments[4].scTitleFr}
                </h3>
                <p
                  className={`${
                    props.locale === "fr" ? "xxl:pb-8" : ""
                  } w-auto mb-8 text-[17px]`}
                >
                  {props.locale === "en"
                    ? pageData.scFragments[4].scContentEn.json[0].content[0]
                        .value
                    : pageData.scFragments[4].scContentFr.json[0].content[0]
                        .value}
                </p>
                <div className="flex justify-center">
                  <div className="object-fill w-auto h-auto mx-auto mb-8 mt-9">
                    <img
                      src={
                        props.locale === "en"
                          ? pageData.scFragments[4].scImageEn._publishUrl
                          : pageData.scFragments[4].scImageFr._publishUrl
                      }
                      alt=""
                      width={284}
                      height={203}
                    />
                  </div>
                </div>
                <div className="w-auto flex justify-center">
                  <p className="text-center font-bold underline text-sm text-page-navigation-link">
                    {props.locale === "en"
                      ? pageData.scFragments[4].scLabsButton[0].scTitleEn
                      : pageData.scFragments[4].scLabsButton[0].scTitleFr}
                  </p>
                </div>
              </a>

              <a
                className={`p-8 mr-4 inline-block rounded-[24px] border-2 focus:ring-1 focus:ring-black focus:ring-offset-2 active:border-custom-blue-hover hover:border-custom-blue-hover ${styles.card}`}
                data-testid={pageData.scFragments[5].scId}
                id={pageData.scFragments[5].scId}
                data-cy={pageData.scFragments[5].scId}
                role="button"
                draggable="false"
                href={
                  props.locale === "en"
                    ? pageData.scFragments[5].scLabsButton[0].scDestinationURLEn
                    : pageData.scFragments[5].scLabsButton[0].scDestinationURLFr
                }
              >
                <h3 className={`mb-1 ${styles.h3}`}>
                  {props.locale === "en"
                    ? pageData.scFragments[5].scTitleEn
                    : pageData.scFragments[5].scTitleFr}
                </h3>
                <p className="w-auto mb-8 text-[17px]">
                  {props.locale === "en"
                    ? pageData.scFragments[5].scContentEn.json[0].content[0]
                        .value
                    : pageData.scFragments[5].scContentFr.json[0].content[0]
                        .value}
                </p>
                <div className="flex justify-center">
                  <div className="object-fill w-auto h-auto mx-auto mb-8 mt-9">
                    <img
                      src={
                        props.locale === "en"
                          ? pageData.scFragments[5].scImageEn._publishUrl
                          : pageData.scFragments[5].scImageFr._publishUrl
                      }
                      alt=""
                      width={284}
                      height={203}
                    />
                  </div>
                </div>
                <div className="w-auto flex justify-center">
                  <p className="text-center font-bold underline text-sm text-page-navigation-link">
                    {props.locale === "en"
                      ? pageData.scFragments[5].scLabsButton[0].scTitleEn
                      : pageData.scFragments[5].scLabsButton[0].scTitleFr}
                  </p>
                </div>
              </a>

              <a
                className={`p-8 mr-4 inline-block rounded-[24px] border-2 focus:ring-1 focus:ring-black focus:ring-offset-2 active:border-custom-blue-hover hover:border-custom-blue-hover ${styles.card}`}
                data-testid={pageData.scFragments[6].scId}
                id={pageData.scFragments[6].scId}
                data-cy={pageData.scFragments[6].scId}
                role="button"
                draggable="false"
                href={
                  props.locale === "en"
                    ? pageData.scFragments[6].scLabsButton[0].scDestinationURLEn
                    : pageData.scFragments[6].scLabsButton[0].scDestinationURLFr
                }
              >
                <h3 className={`mb-1 ${styles.h3}`}>
                  {props.locale === "en"
                    ? pageData.scFragments[6].scTitleEn
                    : pageData.scFragments[6].scTitleFr}
                </h3>
                <p
                  className={`${
                    props.locale === "fr" ? "xxl:pb-8" : ""
                  } w-auto mb-8 text-[17px]`}
                >
                  {props.locale === "en"
                    ? pageData.scFragments[6].scContentEn.json[0].content[0]
                        .value
                    : pageData.scFragments[6].scContentFr.json[0].content[0]
                        .value}
                </p>
                <div className="flex justify-center">
                  <div className="object-fill w-auto h-auto mx-auto mb-8 mt-9">
                    <img
                      src={
                        props.locale === "en"
                          ? pageData.scFragments[6].scImageEn._publishUrl
                          : pageData.scFragments[6].scImageFr._publishUrl
                      }
                      alt=""
                      width={284}
                      height={203}
                    />
                  </div>
                </div>
                <div className="w-auto flex justify-center">
                  <p className="text-center font-bold underline text-sm text-page-navigation-link">
                    {props.locale === "en"
                      ? pageData.scFragments[6].scLabsButton[0].scTitleEn
                      : pageData.scFragments[6].scLabsButton[0].scTitleFr}
                  </p>
                </div>
              </a>
            </div>
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
      {process.env.NEXT_PUBLIC_ADOBE_ANALYTICS_URL ? (
        <script type="text/javascript">_satellite.pageBottom()</script>
      ) : (
        ""
      )}
    </>
  );
}

export const getStaticProps = async ({ locale }) => {
  // get page data from AEM
  const res = await queryGraphQL(getTryItOutPage).then((result) => {
    return result;
  });

  const data = res.data.scLabsPagev1ByPath;
  return {
    props: {
      locale: locale,
      adobeAnalyticsUrl: process.env.ADOBE_ANALYTICS_URL,
      pageData: data,
      ...(await serverSideTranslations(locale, ["common"])),
    },
  };
};
