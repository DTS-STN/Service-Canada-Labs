import { Layout } from "../components/organisms/Layout";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useRouter } from "next/router";
import { useTranslation } from "next-i18next";
import { HTMList } from "../components/atoms/HTMList";
import { useEffect } from "react";
import { ActionButton } from "../components/atoms/ActionButton";
import Link from "next/link";
import Head from "next/head";

export default function SignupInfo(props) {
  const { t } = useTranslation("common");
  const { push } = useRouter();
  const fr = props.locale === "fr";

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
        langUrl={t("signupPath")}
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
          {/* <title>{`${t("signupTitle")} — ${t("siteTitle")}`}</title>
          <meta name="description" content={`${t("signupMetaDescription")}`} />
          <meta name="author" content="Service Canada" />
          <link rel="icon" href="/favicon.ico" /> */}

          {/* DCMI Meta Tags */}
          {/* <meta
            name="dcterms.title"
            content={`${t("signupTitle")} — ${t("siteTitle")}`}
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
          <meta name="dcterms.issued" content="2021-06-08" /> */}

          {/* Open Graph / Facebook */}
          {/* <meta property="og:type" content="website" />
          <meta property="og:locale" content={props.locale} />
          <meta
            property="og:url"
            content={
              "https://alpha.service.canada.ca/" +
              `${props.locale}` +
              `${t("signupRedirect")}`
            }
          />
          <meta
            property="og:title"
            content={`${t("signupTitle")} — ${t("siteTitle")}`}
          />
          <meta
            property="og:description"
            content={`${t("signupMetaDescription")}`}
          />
          <meta property="og:image" content={`${t("metaImage")}`} />
          <meta property="og:image:alt" content={`${t("siteTitle")}`} /> */}

          {/* Twitter */}
          {/* <meta property="twitter:card" content="summary_large_image" />
          <meta
            property="twitter:url"
            content={
              "https://alpha.service.canada.ca/" +
              `${props.locale}` +
              `${t("signupRedirect")}`
            }
          />
          <meta
            property="twitter:title"
            content={`${t("signupTitle")} — ${t("siteTitle")}`}
          />
          <meta name="twitter:creator" content={t("creator")} />
          <meta
            property="twitter:description"
            content={`${t("signupMetaDescription")}`}
          />
          <meta property="twitter:image" content={`${t("metaImage")}`} />
          <meta property="twitter:image:alt" content={`${t("siteTitle")}`} />  */}
        </Head>
        <section className="layout-container mb-2 mt-12">
          <div className="xl:w-2/3 ">
            <h1 className="mb-12" id="pageMainTitle" tabIndex="-1">
              {t("signupInfoTitle")}
            </h1>
            <p className="mb-5 text-sm lg:text-p">{t("signupP1")}</p>
            <HTMList
              listClassName={"list-disc text-sm lg:text-p pl-10 mb-5"}
              content={t("signupList1")}
              liClassName={"mb-3"}
            />
            <p className="mb-5 text-sm lg:text-p">{t("signupP1.1")}</p>
            <h2 className="mb-5 text-h3 lg:text-h2">{t("signupInfoTitle2")}</h2>
            <p className="mb-3">{t("signupInfoP1")}</p>
            <p className="mb-3">{t("signupInfoP2")}</p>
            <ul className="list-disc list-outside pl-4 mb-10 text-sm lg:text-p ml-6">
              <li className="whitespace-pre-line mb-3">
                <b>{t("signupInfoUsabilityTitle")}</b>
                <p>{t("signupInfoUsabilityContent")}</p>
              </li>
              <li className="whitespace-pre-line mb-3">
                <b>{t("signupInfoInterviewsTitle")}</b>
                <p>{t("signupInfoInterviewsContent")}</p>
              </li>
              <li className="whitespace-pre-line mb-3">
                <b>{t("signupInfoSurveysTitle")}</b>
                <p>{t("signupInfoSurveysContent")}</p>
              </li>
            </ul>
            <h2 className="mb-5 text-h3 lg:text-h2">{t("signupTitle2")}</h2>
            <HTMList
              listClassName={
                "list-disc list-outside pl-2 mb-10 font-body text-sm lg:text-p ml-6"
              }
              liClassName={"mb-3"}
              content={t("signupList2")}
            />

            <Link href={t("privacyRedirect")} locale={props.locale}>
              <a className="block font-body hover:text-canada-footer-hover-font-blue text-canada-footer-font underline mb-10 text-sm lg:text-p">
                {t("privacy")}
              </a>
            </Link>

            <h2 className="mb-5 text-h3 lg:text-h2">{t("signupTitle3")}</h2>
            <p className="mb-3">{t("signupP3")}</p>
            <HTMList
              listClassName={
                "list-disc list-outside pl-2 mb-5 font-body ml-6 text-sm lg:text-p"
              }
              content={t("privacyPolicyList1")}
              liClassName={"mb-3"}
            />
            <p className="mb-3 text-sm lg:text-p">{t("signupP4")}</p>
            <HTMList
              listClassName={
                "list-disc list-outside pl-2 font-body ml-6 text-sm lg:text-p"
              }
              content={t("privacyPolicyList2")}
              liClassName={"mb-3"}
            />

            <p className="mt-2 mb-4 text-sm lg:text-p">{t("signupP3.1")}</p>
          </div>
          <div className="my-16 mb-36">
            <ActionButton
              id="signupInfo-continue"
              className="text-base font-bold px-24 py-3 rounded bg-custom-blue-blue text-white border border-custom-blue-blue active:bg-custom-blue-dark hover:bg-custom-blue-light"
              dataCy="signupInfo-continue"
              dataTestId="signupInfo-continue"
              href="/signup"
              analyticsTracking
            >
              {t("signupInfoContinue")}
            </ActionButton>
          </div>
        </section>
      </Layout>
    </>
  );
}

export const getStaticProps = async ({ locale }) => {
  return {
    props: {
      locale,
      ...(await serverSideTranslations(locale, ["common"])),
    },
  };
};
