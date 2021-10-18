import { Layout } from "../components/organisms/Layout";
import Head from "next/head";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "next-i18next";
import { List } from "../components/molecules/List";
import { CallToAction } from "../components/molecules/CallToAction";
import { useEffect } from "react";

export default function About(props) {
  const { t } = useTranslation("common");

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
        langUrl={t("aboutPath")}
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
          <title>{`${t("aboutTitle")} — ${t("siteTitle")}`}</title>
          <meta
            name="title"
            content={`${t("aboutTitle")} — ${t("siteTitle")}`}
          />
          <meta name="description" content={`${t("aboutMetaDescription")}`} />
          <link rel="icon" href="/favicon.ico" />

          {/* DCMI Meta Tags */}
          <meta
            name="dcterms.title"
            content={`${t("aboutTitle")} — ${t("siteTitle")}`}
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
          <meta name="dcterms.issued" content="2021-05-11" />

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
          <meta name="twitter:creator" content={t("creator")} />
          <meta
            property="twitter:description"
            content={`${t("aboutMetaDescription")}`}
          />
          <meta property="twitter:image" content={`${t("metaImage")}`} />
          <meta property="twitter:image:alt" content={`${t("siteTitle")}`} />
        </Head>
        <section className="layout-container relative mb-10">
          <h1 id="pageMainTitle" className="mb-10 text-h1l" tabIndex="-1">
            {t("aboutTitle")}
          </h1>
          <div className="xl:w-2/3">
            <p className="mb-4">{t("aboutThisSiteContent1")}</p>
            <p className="mb-4">{t("aboutThisSiteContent2")}</p>
            <p className="mb-4">{t("aboutThisSiteContent3")}</p>
            <p className="mb-4">{t("projectsDisclaimerBody")}</p>
          </div>
        </section>
        <section className="bg-gray-light-200 pb-14">
          <div className="layout-container">
            <h2 className="mb-5 pt-10 text-h1l">{t("howWeWork")}</h2>
            <div className="flex flex-col-reverse pt-8 xl:grid xl:grid-cols-2 xl:gap-8">
              <List
                items={[
                  t("circleTxt1/4"),
                  t("circleTxt2/4"),
                  t("circleTxt3/4"),
                  t("circleTxt4/4"),
                ]}
              />
            </div>
          </div>
        </section>
        <section className="layout-container" id="contact-us">
          <h2 className="mb-5 pt-10 text-h1l">{t("contactUsHeading")}</h2>
          <p className="mb-8 mt-10 xl:w-2/3">
            {t("getInTouch")}&nbsp;
            <a
              className="underline hover:text-canada-footer-hover-font-blue text-canada-footer-font break-words"
              href={`mailto:${process.env.NEXT_PUBLIC_NOTIFY_REPORT_A_PROBLEM_EMAIL}`}
            >
              {process.env.NEXT_PUBLIC_NOTIFY_REPORT_A_PROBLEM_EMAIL}
            </a>
            .
          </p>
          <p className="mb-12 xl:w-2/3">{t("contactUsResponse")}</p>
        </section>
        <CallToAction
          title={t("signupTitleCallToAction")}
          html={t("becomeAParticipantDescription")}
          lang={props.locale}
          href={t("signupRedirect")}
          hrefText={t("signupBtn")}
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
  return {
    props: {
      locale: locale,
      ...(await serverSideTranslations(locale, ["common"])),
    },
  };
};
