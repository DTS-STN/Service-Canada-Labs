import { Layout } from "../components/organisms/Layout";
import Head from "next/head";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "next-i18next";
import { List } from "../components/molecules/List";
import { CallToAction } from "../components/molecules/CallToAction";
import { useEffect } from "react";
import strapiServiceInstance from "./api/StrapiServiceInstance";

export default function About(props) {
  const { t } = useTranslation("common");
  const contents = props.data.filter(
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
      {contents &&
        contents.map((content, index) => (
          <Layout
            locale={props.locale}
            langUrl={content.attributes.url}
            breadcrumbItems={[
              {
                text: content.attributes.navigation.sclabsTitle,
                link: content.attributes.navigation.home,
              },
            ]}
            key={index}
          >
            <Head>
              {process.env.NEXT_PUBLIC_ADOBE_ANALYTICS_URL ? (
                <script src={process.env.NEXT_PUBLIC_ADOBE_ANALYTICS_URL} />
              ) : (
                ""
              )}

              {/* Primary HTML Meta Tags */}
              <title>{`${t("aboutTitle")} — ${t("siteTitle")}`}</title>
              <meta
                name="description"
                content={`${t("aboutMetaDescription")}`}
              />
              <meta name="author" content="Service Canada" />
              <link rel="icon" href="/favicon.ico" />
              <link rel="schema.dcterms" href="http://purl.org/dc/terms/" />
              <meta name="keywords" content={t("homeKeywords")} />

              {/* DCMI Meta Tags */}
              <meta
                name="dcterms.title"
                content={`${t("aboutTitle")} — ${t("siteTitle")}`}
              />
              <meta
                name="dcterms.language"
                content={props.locale === "en" ? "eng" : "fra"}
                title="ISO639-2/T"
              />
              <meta
                name="dcterms.description"
                content={t("aboutMetaDescription")}
              />
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
              <meta name="dcterms.issued" title="W3CDTF" content="2021-05-11" />
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
                  `${t("aboutRedirect")}`
                }
              />
              <meta
                property="og:title"
                content={`${t("aboutTitle")} — ${t("siteTitle")}`}
              />
              <meta
                property="og:description"
                content={`${t("aboutMetaDescription")}`}
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
                  `${t("aboutRedirect")}`
                }
              />
              <meta
                property="twitter:title"
                content={`${t("aboutTitle")} — ${t("siteTitle")}`}
              />
              <meta name="twitter:creator" content="Service Canada" />
              <meta
                property="twitter:description"
                content={`${t("aboutMetaDescription")}`}
              />
              <meta property="twitter:image" content={`${t("metaImage")}`} />
              <meta
                property="twitter:image:alt"
                content={`${t("siteTitle")}`}
              />
            </Head>
            <section className="layout-container relative mb-10">
              <h1 id="pageMainTitle" className="mb-10 text-h1l" tabIndex="-1">
                {content.attributes.textField[0].heading}
              </h1>
              <div className="xl:w-2/3">
                <p className="whitespace-pre-line">
                  {content.attributes.textField[0].paragraph}
                </p>
              </div>
            </section>
            <section className="bg-gray-light-200 pb-14">
              <div className="layout-container">
                <h2 className="mb-5 pt-10 text-h1l">
                  {content.attributes.textField[1].heading}
                </h2>
                <div className="flex flex-col-reverse pt-8 xl:grid xl:grid-cols-2 xl:gap-8">
                  <List
                    items={[
                      content.attributes.textField[2].paragraph,
                      content.attributes.textField[3].paragraph,
                      content.attributes.textField[4].paragraph,
                      content.attributes.textField[5].paragraph,
                    ]}
                  />
                </div>
              </div>
            </section>
            <section className="layout-container" id="contact-us">
              <h2 className="mb-5 pt-10 text-h1l">
                {content.attributes.textField[6].heading}
              </h2>
              <p className="mb-8 mt-10 xl:w-2/3">
                {content.attributes.textField[6].paragraph}&nbsp;
                <a
                  className="underline hover:text-canada-footer-hover-font-blue text-canada-footer-font break-words"
                  href={`mailto:${process.env.NEXT_PUBLIC_NOTIFY_REPORT_A_PROBLEM_EMAIL}`}
                >
                  {process.env.NEXT_PUBLIC_NOTIFY_REPORT_A_PROBLEM_EMAIL}
                </a>
                .
              </p>
              <p className="mb-12 xl:w-2/3">
                {content.attributes.textField[7].paragraph}
              </p>
            </section>
            <CallToAction
              title={content.attributes.callToAction.title}
              html={t("becomeAParticipantDescription")}
              lang={props.locale}
              href={content.attributes.callToAction.href}
              hrefText={content.attributes.callToAction.text}
            />
          </Layout>
        ))}

      {process.env.NEXT_PUBLIC_ADOBE_ANALYTICS_URL ? (
        <script type="text/javascript">_satellite.pageBottom()</script>
      ) : (
        ""
      )}
    </>
  );
}

export const getStaticProps = async ({ locale }) => {
  const query = "/page-contents?populate=%2A&locale=all";
  const res = await strapiServiceInstance.getFragment(query);
  const data = res.data.data;
  const pageContent = data.filter((data) => data.attributes.title === "about");

  return {
    props: {
      locale: locale,
      data: pageContent,
      ...(await serverSideTranslations(locale, ["common"])),
    },
  };
};
