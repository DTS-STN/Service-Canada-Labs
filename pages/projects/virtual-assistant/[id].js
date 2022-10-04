import Head from "next/head";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "next-i18next";
import { Layout } from "../../../components/organisms/Layout";
import { CallToAction } from "../../../components/molecules/CallToAction";
import { useEffect, useState } from "react";
import aemServiceInstance from "../../../services/aemServiceInstance";
import { getAllUpdateIds } from "../../../lib/utils/getAllUpdateIds";
import ReactMarkdown from "react-markdown";
import remarkBreaks from "remark-breaks";

export default function VAUpdatePage(props) {
  const { t } = useTranslation("common");
  const [pageData] = useState(props.pageData);

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
        </section>
        <CallToAction
          title={t("signupTitleCallToAction")}
          html={t("becomeAParticipantDescription")}
          lang={props.locale}
          href={t("signupInfoRedirect")}
          hrefText={t("signupBtn")}
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

export async function getStaticPaths() {
  const { data } = await aemServiceInstance.getFragment(
    "virtualAssistantUpdatePagesQuery"
  );
  const paths = getAllUpdateIds(data.vaUpdatePageModelv1List.items);
  return {
    paths,
    fallback: false,
  };
}

export const getStaticProps = async ({ locale, params }) => {
  const { data } = await aemServiceInstance.getFragment(
    "virtualAssistantUpdatePagesQuery"
  );
  const pages = data.vaUpdatePageModelv1List.items;
  const pageData = pages.filter((page) => {
    return page.scPageNameEn === params.id || page.scPageNameFr === params.id;
  });
  console.log(pageData[0].scFragments[0].scContentEn);
  return {
    props: {
      locale: locale,
      pageData: pageData[0],
      adobeAnalyticsUrl: process.env.ADOBE_ANALYTICS_URL,
      ...(await serverSideTranslations(locale, ["common"])),
    },
  };
};
