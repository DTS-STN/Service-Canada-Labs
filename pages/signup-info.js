import { Layout } from "../components/organisms/Layout";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "next-i18next";
import { useEffect } from "react";
import { ActionButton } from "../components/atoms/ActionButton";
import Link from "next/link";
import Head from "next/head";
import strapiServiceInstance from "./api/StrapiServiceInstance";
import ReactMarkdown from "react-markdown";

export default function SignupInfo(props) {
  const { t } = useTranslation("common");
  const pageContent = props.data.filter(
    (data) => data.attributes.locale === props.locale
  );

  useEffect(() => {
    if (process.env.NEXT_PUBLIC_ADOBE_ANALYTICS_URL) {
      window.adobeDataLayer = window.adobeDataLayer || [];
      window.adobeDataLayer.push({ event: "pageLoad" });
    }
  }, []);

  return (
    <>
      {pageContent &&
        pageContent.map((content) => (
          <Layout
            locale={props.locale}
            langUrl={content.attributes.url}
            breadcrumbItems={[
              {
                text: content.attributes.navigation.sclabsTitle,
                link: content.attributes.navigation.home,
              },
            ]}
          >
            <Head>
              {process.env.NEXT_PUBLIC_ADOBE_ANALYTICS_URL ? (
                <script src={process.env.NEXT_PUBLIC_ADOBE_ANALYTICS_URL} />
              ) : (
                ""
              )}

              {/* Primary HTML Meta Tags */}
              <title>{`${t("signupInfoTitle")} — ${t("siteTitle")}`}</title>
              <meta
                name="description"
                content={t("signupInfoMetaDescription")}
              />
              <meta name="author" content="Service Canada" />
              <link rel="icon" href="/favicon.ico" />
              <link rel="schema.dcterms" href="http://purl.org/dc/terms/" />
              <meta name="keywords" content={t("signupInfoKeywords")} />

              {/* DCMI Meta Tags */}
              <meta
                name="dcterms.title"
                content={`${t("signupInfoTitle")} — ${t("siteTitle")}`}
              />
              <meta
                name="dcterms.description"
                content={t("signupInfoMetaDescription")}
              />
              <meta
                name="dcterms.subject"
                title="gccore"
                content={t("metaSubject")}
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
              <meta name="dcterms.issued" title="W3CDTF" content="2021-12-10" />
              <meta
                name="dcterms.modified"
                title="W3CDTF"
                content="2021-12-16"
              />
              <meta name="dcterms.spatial" content="Canada" />

              {/* Open Graph / Facebook */}
              <meta property="og:type" content="website" />
              <meta property="og:locale" content={props.locale} />
              <meta
                property="og:url"
                content={
                  "https://alpha.service.canada.ca/" +
                  `${props.locale}` +
                  `${t("signupInfoRedirect")}`
                }
              />
              <meta
                property="og:title"
                content={`${t("signupInfoTitle")} — ${t("siteTitle")}`}
              />
              <meta
                property="og:description"
                content={`${t("signupInfoMetaDescription")}`}
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
                  `${t("signupInfoRedirect")}`
                }
              />
              <meta
                property="twitter:title"
                content={`${t("signupInfoTitle")} — ${t("siteTitle")}`}
              />
              <meta name="twitter:creator" content="Service Canada" />
              <meta
                property="twitter:description"
                content={`${t("signupInfoMetaDescription")}`}
              />
              <meta property="twitter:image" content={`${t("metaImage")}`} />
              <meta
                property="twitter:image:alt"
                content={`${t("siteTitle")}`}
              />
            </Head>
            <section className="layout-container mb-2 mt-12">
              <div className="xl:w-2/3 ">
                <h1 className="mb-12" id="pageMainTitle" tabIndex="-1">
                  {content.attributes.textField[0].heading}
                </h1>
                <ReactMarkdown className="mb-5 text-sm lg:text-p">
                  {content.attributes.textField[0].paragraph}
                </ReactMarkdown>
                <h2 className="mb-5 text-h3 lg:text-h2">
                  {content.attributes.textField[1].heading}
                </h2>
                <ReactMarkdown className="mb-5 text-sm lg:text-p">
                  {content.attributes.textField[1].paragraph}
                </ReactMarkdown>
                <h2 className="mb-5 text-h3 lg:text-h2">
                  {content.attributes.textField[2].heading}
                </h2>
                <ReactMarkdown className="mb-5 text-sm lg:text-p">
                  {content.attributes.textField[2].paragraph}
                </ReactMarkdown>

                <Link
                  href={content.attributes.actionButton[1].href}
                  locale={props.locale}
                >
                  <a className="block font-body hover:text-canada-footer-hover-font-blue text-canada-footer-font underline mb-10 text-sm lg:text-p">
                    {content.attributes.actionButton[1].text}
                  </a>
                </Link>

                <h2 className="mb-5 text-h3 lg:text-h2">
                  {content.attributes.textField[3].heading}
                </h2>
                <ReactMarkdown className="mb-5 text-sm lg:text-p">
                  {content.attributes.textField[3].paragraph}
                </ReactMarkdown>
              </div>
              <div className="my-16 mb-36">
                <ActionButton
                  id="signupInfo-continue"
                  className="text-base xxs:px-16 font-bold xs:px-24 py-3 rounded bg-custom-blue-blue text-white border border-custom-blue-blue active:bg-custom-blue-dark hover:bg-custom-blue-light"
                  dataCy="signupInfo-continue"
                  dataTestId="signupInfo-continue"
                  href={content.attributes.actionButton[0].href}
                  analyticsTracking
                >
                  {content.attributes.actionButton[0].text}
                </ActionButton>
              </div>
            </section>
          </Layout>
        ))}
    </>
  );
}

export const getStaticProps = async ({ locale }) => {
  const query = "/page-contents?populate=%2A&locale=all";
  const res = await strapiServiceInstance.getFragment(query);
  const data = res.data.data;
  const pageContent = data.filter(
    (data) => data.attributes.title === "signup-info"
  );

  return {
    props: {
      locale: locale,
      data: pageContent,
      ...(await serverSideTranslations(locale, ["common"])),
    },
  };
};
