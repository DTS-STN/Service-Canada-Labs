import { Layout } from "../components/organisms/Layout";
import Head from "next/head";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "next-i18next";
import { useRouter } from "next/router";
import { useEffect } from "react";

export default function Confirmation(props) {
  const { t } = useTranslation("common");
  const { query } = useRouter();
  const maskedEmail = String(query.e);
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
        langUrl={t("thankyouPath")}
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
          <title>{`${t("pleaseCheckYourEmail")} — ${t("siteTitle")}`}</title>
          <meta
            name="title"
            content={`${t("pleaseCheckYourEmail")} — ${t("siteTitle")}`}
          />
          <meta
            name="description"
            content={
              referrer === "signup"
                ? `${t("thankyouMetaDescription1")}`
                : `${t("thankyouMetaDescription2")}`
            }
          />
          <link rel="icon" href="/favicon.ico" />

          {/* DCMI Meta Tags */}
          <meta
            name="dcterms.title"
            content={`${t("pleaseCheckYourEmail")} — ${t("siteTitle")}`}
          />
          <meta
            name="dcterms.language"
            content={props.locale === "en" ? "eng" : "fra"}
          />
          <meta name="dcterms.creator" content={t("creator")} />
          <meta name="dcterms.accessRights" content="2" />
          <meta
            name="dcterms.service"
            content="ESDC-EDSC_SCLabs-LaboratoireSC"
          />
          <meta name="dcterms.issued" content="2021-06-15" />

          {/* Open Graph / Facebook */}
          <meta property="og:type" content="website" />
          <meta property="og:locale" content={props.locale} />
          <meta
            property="og:url"
            content={
              "https://alpha.service.canada.ca/" +
              `${props.locale}` +
              `${t("thankyouRedirect")}`
            }
          />
          <meta
            property="og:title"
            content={`${t("pleaseCheckYourEmail")} — ${t("siteTitle")}`}
          />
          <meta
            property="og:description"
            content={
              referrer === "signup"
                ? `${t("thankyouMetaDescription1")}`
                : `${t("thankyouMetaDescription2")}`
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
              `${t("thankyouRedirect")}`
            }
          />
          <meta
            property="twitter:title"
            content={`${t("pleaseCheckYourEmail")} — ${t("siteTitle")}`}
          />
          <meta name="twitter:creator" content={t("creator")} />
          <meta
            property="twitter:description"
            content={
              referrer === "signup"
                ? `${t("thankyouMetaDescription1")}`
                : `${t("thankyouMetaDescription2")}`
            }
          />
          <meta property="twitter:image" content={`${t("metaImage")}`} />
          <meta property="twitter:image:alt" content={`${t("siteTitle")}`} />
        </Head>
        <section className="layout-container mb-12">
          <h1 id="pageMainTitle" className="mb-10 text-h1l" tabIndex="-1">
            {t("pleaseCheckYourEmail")}
          </h1>
          <div className="lg:flex lg:flex-row-reverse">
            <span className="w-full flex justify-center lg:w-1/3">
              <img
                className="w-80px mb-10 lg:mb-0 lg:ml-24 lg:w-160px"
                src="/circle-info.svg"
                alt=""
              />
            </span>
            <div className="lg:w-2/3">
              <p className="mb-4 text-sm lg:text-p leading-30px">
                {t("sentEmailTo")} {maskedEmail} {t("from")}{" "}
                <a
                  className="underline hover:text-canada-footer-hover-font-blue text-canada-footer-font"
                  href={`mailto: ${process.env.NEXT_PUBLIC_THANK_YOU_EMAIL}`}
                >
                  {process.env.NEXT_PUBLIC_THANK_YOU_EMAIL}
                </a>{" "}
                {t("toCheckEmail")}
              </p>
              <p className="mb-4 text-sm lg:text-p leading-30px">
                {referrer === "signup"
                  ? t("confirmationP2")
                  : t("unsubscribeConfirmation")}
              </p>
              <p className="mb-4 text-sm lg:text-p leading-30px">
                {referrer === "signup"
                  ? t("confirmationP3")
                  : t("unsubscribeConfirmationP1")}
              </p>
              {referrer === "signup" ? (
                <p className="mb-4 text-sm lg:text-p leading-30px">
                  {t("confirmationP4")}
                </p>
              ) : (
                ""
              )}
            </div>
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
