import Head from "next/head";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "next-i18next";
import { Layout } from "../../../components/organisms/Layout";
import { Alert } from "../../../components/atoms/Alert";
import { ActionButton } from "../../../components/atoms/ActionButton";
import { useEffect, useState } from "react";
import aemServiceInstance from "../../../services/aemServiceInstance";
import { getAllUpdateIds } from "../../../lib/utils/getAllUpdateIds";
import ReactMarkdown from "react-markdown";
import remarkBreaks from "remark-breaks";

export default function VAUpdatePage(props) {
  const { t } = useTranslation("common", "vc");
  const [pageData] = useState(props.pageData);
  const [actionButtonData] = useState(props.actionButtonData);

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
          props.locale === "en"
            ? `/projets/assistant-virtuel/${pageData.scPageNameFr}`
            : pageData.scPageNameEn
        }
        breadcrumbItems={[
          {
            text:
              props.locale === "en"
                ? pageData.scBreadcrumbParentPages[0].scTitleEn
                : pageData.scBreadcrumbParentPages[0].scTitleFr,
            link:
              props.locale === "en"
                ? pageData.scBreadcrumbParentPages[0].scPageNameEn
                : pageData.scBreadcrumbParentPages[0].scPageNameFr,
          },
          {
            text:
              props.locale === "en"
                ? pageData.scBreadcrumbParentPages[1].scTitleEn
                : pageData.scBreadcrumbParentPages[1].scTitleFr,
            link:
              props.locale === "en"
                ? pageData.scBreadcrumbParentPages[1].scPageNameEn
                : pageData.scBreadcrumbParentPages[1].scPageNameFr,
          },
          {
            text:
              props.locale === "en"
                ? pageData.scBreadcrumbParentPages[2].scTitleEn
                : pageData.scBreadcrumbParentPages[2].scTitleFr,
            link:
              props.locale === "en"
                ? pageData.scBreadcrumbParentPages[2].scPageNameEn
                : pageData.scBreadcrumbParentPages[2].scPageNameFr,
          },
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
          <link rel="schema.dcterms" href="http://purl.org/dc/terms/" />
          <meta name="keywords" content={t("vc:keywords")} />

          {/* DCMI Meta Tags */}
          <meta
            name="dcterms.title"
            content={`${t("vc:virtualAssistantTitle")} — ${t("siteTitle")}`}
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
          <meta name="dcterms.modified" title="W3CDTF" content="2022-10-05" />
          <meta name="dcterms.description" content={t("vc:metaDescription")} />
          <meta
            name="dcterms.subject"
            title="gccore"
            content={`${t("vc:metaSubject")}`}
          />

          {/* Open Graph / Facebook */}
          <meta property="og:type" content="website" />
          <meta property="og:locale" content={props.locale} />
          <meta property="og:url" content={t("vc:canonicalURL")} />
          <meta
            property="og:title"
            content={`${t("vc:virtualAssistantTitle")} — ${t("siteTitle")}`}
          />
          <meta
            property="og:description"
            content={t("vc:virtualAssistantBioBody")}
          />
          <meta property="og:image" content={t("metaImage")} />
          <meta property="og:image:alt" content={t("siteTitle")} />

          {/* Twitter */}
          <meta property="twitter:card" content="summary_large_image" />
          <meta property="twitter:url" content={t("vc:canonicalURL")} />
          <meta
            property="twitter:title"
            content={
              props.locale === "en" ? pageData.scTitleEn : pageData.scTitleFr
            }
          />
          <meta name="twitter:creator" content="Service Canada" />
          <meta
            property="twitter:description"
            content={t("vc:virtualAssistantBioBody")}
          />
          <meta property="twitter:image" content={t("metaImage")} />
          <meta property="twitter:image:alt" content={t("siteTitle")} />
        </Head>
        <section className="layout-container my-12">
          <ReactMarkdown
            remarkPlugins={[remarkBreaks]}
            children={
              props.locale === "en"
                ? pageData.scFragments[0].scContentEn.markdown.replace(
                    /\n/gi,
                    "&nbsp; \n\n"
                  )
                : pageData.scFragments[0].scContentFr.markdown.replace(
                    /\n/gi,
                    "&nbsp; \n\n"
                  )
            }
          ></ReactMarkdown>
          <div className="mt-40">
            <h2>
              {props.locale === "en"
                ? actionButtonData.scFragments[3].scTitleEn
                : actionButtonData.scFragments[3].scTitleFr}
            </h2>
            <Alert
              triangle
              title={
                props.locale === "en"
                  ? actionButtonData.scFragments[3].scFragments[0].scTitleEn
                  : actionButtonData.scFragments[3].scFragments[0].scTitleFr
              }
              text={
                props.locale === "en"
                  ? actionButtonData.scFragments[3].scFragments[0].scContentEn
                      .json[0].content[0].value
                  : actionButtonData.scFragments[3].scFragments[0].scContentFr
                      .json[0].content[0].value
              }
            />
            <p className="flex mb-4 text-center">
              <ActionButton
                id="become-a-participant-btn"
                custom={`py-1.5 px-3 rounded text-white text-base lg:text-p font-display bg-custom-blue-dark hover:bg-custom-blue-light border border-custom-blue-darker active:bg-custom-blue-darker hover:ring-2 hover:ring-white`}
                className=""
                href={
                  props.locale === "en"
                    ? actionButtonData.scFragments[3].scLabsButton[0]
                        .scDestinationURLEn
                    : actionButtonData.scFragments[3].scLabsButton[0]
                        .scDestinationURLFr
                }
                text={
                  props.locale === "en"
                    ? actionButtonData.scFragments[3].scLabsButton[0].scTitleEn
                    : actionButtonData.scFragments[3].scLabsButton[0].scTitleFr
                }
                ariaExpanded={props.ariaExpanded}
              />
            </p>
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

export async function getStaticPaths() {
  // Get pages data
  const { data } = await aemServiceInstance.getFragment(
    "virtualAssistantUpdatePagesQuery"
  );
  // Get paths for dynamic routes from the page name data
  const paths = getAllUpdateIds(data.scLabsPagev1List.items);
  return {
    paths,
    fallback: false,
  };
}

export const getStaticProps = async ({ locale, params }) => {
  // Get data for action prompt
  const actionButtonData = await aemServiceInstance.getFragment(
    "virtualAssistantQuery"
  );
  // Get pages data
  const { data } = await aemServiceInstance.getFragment(
    "virtualAssistantUpdatePagesQuery"
  );
  const pages = data.scLabsPagev1List.items;
  // Return page data that matches the current page being built
  const pageData = pages.filter((page) => {
    return page.scPageNameEn === params.id || page.scPageNameFr === params.id;
  });
  // In production, redirect this page to a 404
  if (process.env.ENVIRONMENT === "production") {
    return {
      notFound: true,
    };
  }
  return {
    props: {
      locale: locale,
      pageData: pageData[0],
      actionButtonData: actionButtonData.data.scLabsPagev1ByPath.item,
      adobeAnalyticsUrl: process.env.ADOBE_ANALYTICS_URL,
      ...(await serverSideTranslations(locale, ["common", "vc"])),
    },
  };
};
