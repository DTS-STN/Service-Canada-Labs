import PropTypes from "prop-types";
import Head from "next/head";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "next-i18next";
import { HTMList } from "../../components/atoms/HTMList";
import { Layout } from "../../components/organisms/Layout";
import { CallToAction } from "../../components/molecules/CallToAction";
import { FeedbackWidget } from "../../components/molecules/FeedbackWidget";
import { useEffect, useState, useRef } from "react";

function ThumbnailWithCaption({
  title = "Image 1",
  src = "https://uhdwallpapers.org/uploads/converted/20/01/14/the-mandalorian-5k-1920x1080_477555-mm-90.jpg",
  alt = "",
  children,
}) {
  return (
    <div className="flex justify-center flex-col">
      <h3 className=" mt-3">{title}</h3>
      <figure className="shadow-experiment-shadow">
        <img src={src} alt={alt} className="border-b-2" />
        <figcaption className="text-base p-6">{children}</figcaption>
      </figure>
    </div>
  );
}

ThumbnailWithCaption.propTypes = {
  title: PropTypes.string,
  src: PropTypes.string,
  caption: PropTypes.string,
};

export default function DigitalCenter(props) {
  const { t } = useTranslation(["common", "dc"]);
  const [feedbackActive] = useState(false);
  const [showFeedback, setShowFeedback] = useState(false);
  const toggle = useRef("Collapsed");

  useEffect(() => {
    if (process.env.NEXT_PUBLIC_ADOBE_ANALYTICS_URL) {
      window.adobeDataLayer = window.adobeDataLayer || [];
      window.adobeDataLayer.push({ event: "pageLoad" });
    }
  }, []);

  let toggleForm = async (e) => {
    if (showFeedback) {
      toggle.current = "Collapsed";
    } else {
      toggle.current = "Expanded";
    }

    srSpeak(toggle.current);
    setShowFeedback(!showFeedback);
  };

  function srSpeak(text, priority) {
    var el = document.createElement("div");
    var id = "speak-" + Date.now();
    el.setAttribute("id", id);
    el.setAttribute("aria-live", priority || "polite");
    el.classList.add("sr-only");
    document.body.appendChild(el);

    window.setTimeout(function () {
      document.getElementById(id).innerHTML = text;
    }, 100);

    window.setTimeout(function () {
      document.body.removeChild(document.getElementById(id));
    }, 1000);
  }

  return (
    <>
      <FeedbackWidget showFeedback={showFeedback} toggleForm={toggleForm} />
      <Layout
        locale={props.locale}
        langUrl={t("digitalCentrePath")}
        breadcrumbItems={[
          { text: t("siteTitle"), link: t("breadCrumbsHref1") },
          { text: t("menuLink1"), link: t("breadCrumbsHref2") },
        ]}
        feedbackActive={feedbackActive}
      >
        <Head>
          {process.env.NEXT_PUBLIC_ADOBE_ANALYTICS_URL ? (
            <script src={process.env.NEXT_PUBLIC_ADOBE_ANALYTICS_URL} />
          ) : (
            ""
          )}

          {/* Primary HTML Meta Tags */}
          <title>{`${t("dc:OverviewTitle")} — ${t("siteTitle")}`}</title>
          <meta name="description" content={`${t("dc:ProductGoal1")}`} />
          <meta name="author" content="Service Canada" />
          <link rel="icon" href="/favicon.ico" />

          {/* DCMI Meta Tags */}
          <meta
            name="dcterms.title"
            content={`${t("dc:OverviewTitle")} — ${t("siteTitle")}`}
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
          <meta name="dcterms.issued" content="2021-07-21" />

          {/* Open Graph / Facebook */}
          <meta property="og:type" content="website" />
          <meta property="og:locale" content={props.locale} />
          <meta
            property="og:url"
            content={
              "https://alpha.service.canada.ca/" +
              `${props.locale}` +
              `${t("projectRedirect")}` +
              "/digital-centre"
            }
          />
          <meta
            property="og:title"
            content={`${t("dc:OverviewTitle")} — ${t("siteTitle")}`}
          />
          <meta property="og:description" content={`${t("dc:ProductGoal1")}`} />
          <meta property="og:image" content={`${t("metaImage")}`} />
          <meta property="og:image:alt" content={`${t("siteTitle")}`} />

          {/* Twitter */}
          <meta property="twitter:card" content="summary_large_image" />
          <meta
            property="twitter:url"
            content={
              "https://alpha.service.canada.ca/" +
              `${props.locale}` +
              `${t("projectRedirect")}` +
              "/digital-centre"
            }
          />
          <meta
            property="twitter:title"
            content={`${t("dc:OverviewTitle")} — ${t("siteTitle")}`}
          />
          <meta name="twitter:creator" content={t("creator")} />
          <meta
            property="twitter:description"
            content={`${t("dc:ProductGoal1")}`}
          />
          <meta property="twitter:image" content={`${t("metaImage")}`} />
          <meta property="twitter:image:alt" content={`${t("siteTitle")}`} />
        </Head>

        <section className="layout-container mb-10 text-lg">
          <h1 id="pageMainTitle" className="mb-10 text-h1l" tabIndex="-1">
            {t("dc:OverviewTitle")}
          </h1>
          <p className="mt-3">{t("dc:ProductGoal1")}</p>
          <p className="mt-3">{t("dc:ProductGoal2")}</p>
          <p className="mt-3">{t("dc:ProductGoal3")}</p>

          <h2 className="mt-10">{t("dc:Concept1Heading")}</h2>
          <p className="mt-6">{t("dc:Concept1P1")}</p>
          <p className="mt-6">{t("dc:Concept1P2")}</p>
          <div className="mx-auto">
            <div className="mt-6 grid grid-cols-1 lg:grid-cols-2 items-start gap-6">
              <ThumbnailWithCaption
                title={t("dc:Concept1Img1Title")}
                alt={t("dc:Concept1Img1Alt")}
                src={t("dc:Concept1Img1")}
              >
                <p className="text-base">{t("dc:Concept1Img1Caption")}</p>
                <HTMList
                  tag="ol"
                  listClassName={
                    "ml-6 mt-2 text-base list-decimal list-outside"
                  }
                  liClassName={"mt-1"}
                  content={t("dc:Concept1Img1CaptionList")}
                />
              </ThumbnailWithCaption>
              <ThumbnailWithCaption
                title={t("dc:Concept1Img2Title")}
                alt={t("dc:Concept1Img2Alt")}
                src={t("dc:Concept1Img2")}
              >
                <p className="text-base">{t("dc:Concept1Img2Caption")}</p>
                <HTMList
                  tag="ol"
                  listClassName={
                    "ml-6 mt-2 text-base list-decimal list-outside"
                  }
                  liClassName={"mt-1"}
                  content={t("dc:Concept1Img2CaptionList")}
                />
              </ThumbnailWithCaption>
              <ThumbnailWithCaption
                title={t("dc:Concept1Img3Title")}
                alt={t("dc:Concept1Img3Alt")}
                src={t("dc:Concept1Img3")}
              >
                <p className="text-base">{t("dc:Concept1Img3Caption")}</p>
                <HTMList
                  tag="ol"
                  listClassName={
                    "ml-6 mt-2 text-base list-decimal list-outside"
                  }
                  liClassName={"mt-1"}
                  content={t("dc:Concept1Img3CaptionList")}
                />
              </ThumbnailWithCaption>
            </div>
          </div>

          <h2 className="mt-10">{t("dc:Concept2Heading")}</h2>
          <p className="mt-6">{t("dc:Concept2P1")}</p>
          <ol className="mt-4 ml-8  list-decimal list-outside">
            <li className="mt-1">
              <a
                href={t("dc:Concept2P2Href1")}
                target="_blank"
                rel="noopener"
                className="font-body hover:text-canada-footer-hover-font-blue text-custom-blue-projects-link visited:text-purple-700 underline "
              >
                {t("dc:Concept2P2Link1")}
              </a>{" "}
              {t("dc:Concept2P2Li1")}
            </li>
            <li className="mt-1">
              <a
                href={t("dc:Concept2P2Href2")}
                target="_blank"
                rel="noopener"
                className="font-body hover:text-canada-footer-hover-font-blue text-custom-blue-projects-link visited:text-purple-700 underline "
              >
                {t("dc:Concept2P2Link2")}
              </a>
              {t("dc:Concept2P2Li2")}
            </li>
            <li className="mt-1">
              <a
                href={t("dc:Concept2P2Href3")}
                target="_blank"
                rel="noopener"
                className="font-body hover:text-canada-footer-hover-font-blue text-custom-blue-projects-link visited:text-purple-700 underline "
              >
                {t("dc:Concept2P2Link3")}
              </a>
              {t("dc:Concept2P2Li3")}
            </li>
            <li className="mt-1">{t("dc:Concept2P2Li4")}</li>
          </ol>

          <div className="mx-auto">
            <div className="mt-6 grid grid-cols-1 lg:grid-cols-2 items-start gap-6">
              <ThumbnailWithCaption
                title={t("dc:Concept2Img1Title")}
                alt={t("dc:Concept2Img1Alt")}
                src={t("dc:Concept2Img1")}
              >
                <p className="text-base">{t("dc:Concept2Img1Caption")}</p>
                <HTMList
                  tag="ol"
                  listClassName={
                    "ml-6 mt-2 text-base list-decimal list-outside"
                  }
                  liClassName={"mt-1"}
                  content={t("dc:Concept2Img1CaptionList")}
                />
              </ThumbnailWithCaption>
              <ThumbnailWithCaption
                title={t("dc:Concept2Img2Title")}
                alt={t("dc:Concept2Img2Alt")}
                src={t("dc:Concept2Img2")}
              >
                <p className="text-base">{t("dc:Concept2Img2Caption")}</p>
                <HTMList
                  tag="ol"
                  listClassName={
                    "ml-6 mt-2 text-base list-decimal list-outside"
                  }
                  liClassName={"mt-1"}
                  content={t("dc:Concept2Img2CaptionList")}
                />
              </ThumbnailWithCaption>
              <ThumbnailWithCaption
                title={t("dc:Concept2Img3Title")}
                alt={t("dc:Concept2Img3Alt")}
                src={t("dc:Concept2Img3")}
              >
                <p className="text-base">{t("dc:Concept2Img3Caption")}</p>
                <HTMList
                  tag="ol"
                  listClassName={
                    "ml-6 mt-2 text-base list-decimal list-outside"
                  }
                  liClassName={"mt-1"}
                  content={t("dc:Concept2Img3CaptionList")}
                />
              </ThumbnailWithCaption>
            </div>
          </div>

          <h2 className=" mt-10">{t("dc:Concept3Heading")}</h2>
          <p className=" mt-6">{t("dc:Concept3P1")}</p>
          <HTMList
            tag="ol"
            listClassName={" mt-4 ml-8 list-decimal list-outside"}
            liClassName={"mt-1"}
            content={t("dc:Concept3P1List")}
          />

          <div className="mx-auto">
            <div className="mt-6 grid grid-cols-1 lg:grid-cols-2 items-start gap-6">
              <ThumbnailWithCaption
                title={t("dc:Concept3Img1Title")}
                alt={t("dc:Concept3Img1Alt")}
                src={t("dc:Concept3Img1")}
              >
                <p className="text-base">{t("dc:Concept3Img1Caption")}</p>
                <HTMList
                  tag="ol"
                  listClassName={
                    "ml-6 mt-2 text-base list-decimal list-outside"
                  }
                  liClassName={"mt-1"}
                  content={t("dc:Concept3Img1CaptionList")}
                />
              </ThumbnailWithCaption>
            </div>
          </div>

          <h2 className=" mt-10">{t("dc:Concept4Heading")}</h2>
          <p className=" mt-6">{t("dc:Concept4P1")}</p>

          <div className="mx-auto">
            <div className="mt-6 grid grid-cols-1 lg:grid-cols-2 items-start gap-6">
              <ThumbnailWithCaption
                title={t("dc:Concept4Img1Title")}
                alt={t("dc:Concept4Img1Alt")}
                src={t("dc:Concept4Img1")}
              >
                <p className="text-base">{t("dc:Concept4Img1Caption")}</p>
                <HTMList
                  tag="ol"
                  listClassName={
                    "ml-6 mt-2 text-base list-decimal list-outside"
                  }
                  liClassName={"mt-1"}
                  content={t("dc:Concept4Img1CaptionList")}
                />
              </ThumbnailWithCaption>
            </div>
          </div>

          <p className="my-6">
            <strong>{t("projectsDisclaimer")}</strong>
          </p>
        </section>

        <CallToAction
          title={
            feedbackActive ? t("giveFeedback") : t("signupTitleCallToAction")
          }
          html={
            feedbackActive
              ? t("bottomFeedbackDescription")
              : t("becomeAParticipantDescription")
          }
          lang={props.locale}
          href={feedbackActive ? "" : t("signupRedirect")}
          hrefText={feedbackActive ? t("bottomFeedbackBtn") : t("signupBtn")}
          feedbackActive={feedbackActive}
          clicked={() => setShowFeedback(true)}
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

export const getStaticProps = async ({ locale }) => ({
  props: {
    locale: locale,
    ...(await serverSideTranslations(locale, ["common", "dc"])),
  },
});
