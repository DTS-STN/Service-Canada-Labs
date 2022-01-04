import { useState, useRef } from "react";
import { Layout } from "../components/organisms/Layout";
import Head from "next/head";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "next-i18next";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { ActionButton } from "../components/atoms/ActionButton";
import { submitEmail } from "../lib/notify/submitEmail";
import { Player, Controls } from "@lottiefiles/react-lottie-player";
import animatedCheckmark from "../public/animatedCheckmark.json";

export default function Confirmation(props) {
  const { t } = useTranslation("common");
  const { query } = useRouter();
  const maskedEmail = String(query.e);
  const referrer = query.ref || "";
  const [resent, setResent] = useState(false);

  useEffect(() => {
    if (process.env.NEXT_PUBLIC_ADOBE_ANALYTICS_URL) {
      window.adobeDataLayer = window.adobeDataLayer || [];
      window.adobeDataLayer.push({ event: "pageLoad" });
    }
  }, []);

  const handleResend = () => {
    setResent(true);
  };

  //attempt to send validation email through notify
  // try {
  //   const validationUrl =
  //     origin + `/api/validate?id=${userCuid}&lang=${data.language}`;
  //   const unsubUrl = origin + `/api/unsubscribe?id=${userCuid}`;
  //   const [status, json] = await submitEmail(
  //     {
  //       validation_url: validationUrl,
  //       unsubscribe_url: unsubUrl,
  //     },
  //     {},
  //     data.language === "fr"
  //       ? process.env.USER_SIGNUP_FRENCH_TEMPLATE_ID
  //       : process.env.USER_SIGNUP_ENGLISH_TEMPLATE_ID,
  //     data.email,
  //     process.env.NOTIFY_BASE_API_URL + "/v2/notifications/email",
  //     process.env.NOTIFY_API_KEY
  //   );

  //   // non okay status code return 500
  //   if (status >= 300) {
  //     await conn.db.collection("users").deleteOne({
  //       cuid: userCuid,
  //     });
  //     return res.status(500).json({
  //       reason: "Notify",
  //       explanation:
  //         "Notify failed to send the validation email: " + JSON.stringify(json),
  //     });
  //   }
  // } catch (e) {
  //   await conn.db.collection("users").deleteOne({
  //     cuid: userCuid,
  //   });
  //   return res.status(500).json({
  //     reason: "Notify",
  //     explanation: e.message,
  //   });
  // }

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
