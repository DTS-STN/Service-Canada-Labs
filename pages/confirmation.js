import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "next-i18next";
import { useRouter } from "next/router";
import { Layout } from "../components/organisms/Layout";
import Head from "next/head";
import { TextButtonField } from "../components/molecules/TextButtonField";
import { useEffect } from "react";

export default function Confirmation(props) {
  const { t } = useTranslation("common");
  const { asPath, query } = useRouter();
  const referrer = query.ref || "";

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
        langUrl={asPath}
        breadcrumbItems={[
          { text: t("siteTitle"), link: t("breadCrumbsHref1") },
        ]}
      >
        <Head>
          {process.env.NEXT_PUBLIC_ADOBE_ANALYTICS_URL ? (
            <script src={process.env.NEXT_PUBLIC_ADOBE_ANALYTICS_URL} />
          ) : (
            ""
          )}
          {/* Primary HTML Meta Tags */}
          <title>
            {referrer === "unsubscribe"
              ? `${t("unsubscribeConfirmationTitle")} — ${t("siteTitle")}`
              : `${t("emailConfirmationTitle")} — ${t("siteTitle")}`}
          </title>
          <meta
            name="description"
            content={
              referrer === "unsubscribe"
                ? `${t("confirmationMetaDescription2")}`
                : `${t("confirmationMetaDescription1")}`
            }
          />
          <meta name="author" content="Service Canada" />
          <link rel="icon" href="/favicon.ico" />
          <link rel="schema.dcterms" href="http://purl.org/dc/terms/" />

          {/* DCMI Meta Tags */}
          <meta
            name="dcterms.title"
            content={
              referrer === "unsubscribe"
                ? `${t("unsubscribeConfirmationTitle")} — ${t("siteTitle")}`
                : `${t("emailConfirmationTitle")} — ${t("siteTitle")}`
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
              referrer === "unsubscribe"
                ? `${t("confirmationMetaDescription2")}`
                : `${t("confirmationMetaDescription1")}`
            }
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
          <meta name="dcterms.issued" title="W3CDTF" content="2021-06-22" />
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
              "/confirmation"
            }
          />
          <meta
            property="og:title"
            content={
              referrer === "unsubscribe"
                ? `${t("unsubscribeConfirmationTitle")} — ${t("siteTitle")}`
                : `${t("emailConfirmationTitle")} — ${t("siteTitle")}`
            }
          />
          <meta
            property="og:description"
            content={
              referrer === "unsubscribe"
                ? `${t("confirmationMetaDescription2")}`
                : `${t("confirmationMetaDescription1")}`
            }
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
              "/confirmation"
            }
          />
          <meta
            property="twitter:title"
            content={
              referrer === "unsubscribe"
                ? `${t("unsubscribeConfirmationTitle")} — ${t("siteTitle")}`
                : `${t("emailConfirmationTitle")} — ${t("siteTitle")}`
            }
          />
          <meta name="twitter:creator" content="Service Canada" />
          <meta
            property="twitter:description"
            content={
              referrer === "unsubscribe"
                ? `${t("confirmationMetaDescription2")}`
                : `${t("confirmationMetaDescription1")}`
            }
          />
          <meta property="twitter:image" content={`${t("metaImage")}`} />
          <meta property="twitter:image:alt" content={`${t("siteTitle")}`} />
        </Head>
        <section className="layout-container mb-12">
          <h1
            id="pageMainTitle"
            className="mb-10 text-p xl:text-h1l lg:w-2/3"
            tabIndex="-1"
          >
            {referrer === "unsubscribe"
              ? t("unsubscribeConfirmationTitle")
              : t("emailConfirmationTitle")}
          </h1>
          <div className="lg:flex lg:flex-row-reverse">
            <span className="w-full flex justify-center lg:w-1/3">
              <img
                className="w-80px mb-10 lg:mb-0 lg:ml-24 lg:w-160px"
                src="/circle-check.svg"
                alt=""
              />
            </span>
            {referrer === "unsubscribe" ? (
              <div className="lg:w-2/3">
                <p className="mb-4 text-sm lg:text-p leading-30px">
                  {t("unsubscribeConfirmationP1")}
                </p>
                <p className="mb-4 text-sm lg:text-p leading-30px">
                  {t("unsubscribeConfirmationP2")}
                </p>
              </div>
            ) : (
              <div className="lg:w-2/3">
                <p className="mb-4 text-sm lg:text-p leading-30px">
                  {t("emailConfirmationP1")}
                </p>
                <p className="mb-4 text-sm lg:text-p leading-30px">
                  {t("emailConfirmationP2")}
                </p>
                <TextButtonField
                  href={t("projectRedirect")}
                  buttonText={t("menuLink1")}
                  idButton="ExperimentsButton"
                  dataCyButton="ExperimentsButton"
                  className="flex mt-5"
                />
              </div>
            )}
          </div>
        </section>
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
  return {
    props: {
      locale: locale,
      ...(await serverSideTranslations(locale, ["common"])),
    },
  };
};
