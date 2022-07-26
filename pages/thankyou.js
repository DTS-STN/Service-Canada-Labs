import { useState, useEffect } from "react";
import { Layout } from "../components/organisms/Layout";
import Head from "next/head";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "next-i18next";
import { useRouter } from "next/router";
import { ActionButton } from "../components/atoms/ActionButton";
import { Player, Controls } from "@lottiefiles/react-lottie-player";
import animatedCheckmark from "../public/animatedCheckmark.json";
import Image from "next/image";

export default function Confirmation(props) {
  const { t } = useTranslation("common");
  const { query } = useRouter();
  const maskedEmail = String(query.e);
  const referrer = query.ref || "";
  const [resent, setResent] = useState(false);
  const [email, setEmail] = useState("");

  useEffect(() => {
    if (props.adobeAnalyticsUrl) {
      window.adobeDataLayer = window.adobeDataLayer || [];
      window.adobeDataLayer.push({ event: "pageLoad" });
    }
    setEmail(sessionStorage.getItem("email"));
  }, []);

  // Send email to /thank-you api
  const handleResend = async () => {
    let response;
    if (referrer === "unsubscribe") {
      response = await fetch("/api/unsubscribe", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email: email }),
      });
    } else {
      response = await fetch("/api/thank-you", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email: email }),
      });
    }
    if (response.status === 201 || response.status === 200) {
      setResent(true);
    }
  };

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
          {props.adobeAnalyticsUrl ? (
            <script src={props.adobeAnalyticsUrl} />
          ) : (
            ""
          )}

          {/* Primary HTML Meta Tags */}
          <title>{`${t("pleaseCheckYourEmail")} — ${t("siteTitle")}`}</title>
          <meta
            name="description"
            content={
              referrer === "signup"
                ? `${t("thankyouMetaDescription1")}`
                : `${t("thankyouMetaDescription2")}`
            }
          />
          <meta name="author" content="Service Canada" />
          <link rel="icon" href="/favicon.ico" />
          <link rel="schema.dcterms" href="http://purl.org/dc/terms/" />

          {/* DCMI Meta Tags */}
          <meta
            name="dcterms.title"
            content={`${t("pleaseCheckYourEmail")} — ${t("siteTitle")}`}
          />
          <meta
            name="dcterms.language"
            content={props.locale === "en" ? "eng" : "fra"}
            title="ISO639-2/T"
          />
          <meta
            name="dcterms.description"
            content={
              referrer === "signup"
                ? `${t("thankyouMetaDescription1")}`
                : `${t("thankyouMetaDescription2")}`
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
          <meta name="dcterms.issued" title="W3CDTF" content="2021-06-15" />
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
          <meta name="twitter:creator" content="Service Canada" />
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
              <Image
                src="/circle-info.svg"
                alt="info"
                width="160"
                height="160"
              />
            </span>
            <div className="lg:w-2/3">
              <p className="mb-4 text-sm lg:text-p leading-30px">
                {t("sentEmailTo")} {maskedEmail} {t("from")}{" "}
                <a
                  className="underline hover:text-canada-footer-hover-font-blue text-canada-footer-font"
                  href={`mailto: ${props.thankYouEmailAddress}`}
                >
                  {props.thankYouEmailAddress}
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
          <div className="my-8 mb-36">
            <ActionButton
              id="resend-email"
              className={`${
                resent
                  ? "bg-custom-green-darker hover:bg-custom-green-darker active:bg-custom-green-darker"
                  : "bg-custom-blue-blue hover:bg-custom-blue-light"
              } text-base xxs:px-16 font-bold xs:px-24 py-3 rounded text-white border border-custom-blue-blue`}
              dataCy="resend-email"
              dataTestId="resend-email"
              analyticsTracking
              onClick={!resent ? handleResend : undefined}
            >
              {resent ? t("emailResent") : t("resendEmail")}
            </ActionButton>
            {resent ? (
              <div className="flex justify-start my-6">
                <Player
                  autoplay
                  keepLastFrame
                  src={animatedCheckmark}
                  style={{
                    height: "248px",
                    width: "248px",
                  }}
                >
                  <Controls
                    visible={false}
                    buttons={["play", "repeat", "frame", "debug"]}
                  />
                </Player>
              </div>
            ) : undefined}
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

export const getStaticProps = async ({ locale }) => {
  return {
    props: {
      locale: locale,
      adobeAnalyticsUrl: process.env.ADOBE_ANALYTICS_URL,
      thankYouEmailAddress: process.env.THANK_YOU_EMAIL,
      ...(await serverSideTranslations(locale, ["common"])),
    },
  };
};
