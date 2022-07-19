import PropTypes from "prop-types";
import Head from "next/head";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "next-i18next";
import { HTMList } from "../../components/atoms/HTMList";
import { Layout } from "../../components/organisms/Layout";
import { CallToAction } from "../../components/molecules/CallToAction";
import { useEffect, useState } from "react";
import FeedbackWidget from "../../components/molecules/FeedbackWidget";

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
  const [showFeedback, setShowFeedback] = useState(false);
  let path =
    typeof window !== "undefined" && window.location.origin
      ? window.location.href
      : "";

  let toggleForm = async (e) => {
    setShowFeedback(!showFeedback);
  };

  useEffect(() => {
    if (props.adobeAnalyticsUrl) {
      window.adobeDataLayer = window.adobeDataLayer || [];
      window.adobeDataLayer.push({ event: "pageLoad" });
    }
  }, []);

  return (
    <>
      <FeedbackWidget
        showFeedback={showFeedback}
        toggleForm={toggleForm}
        projectName={t("dc:OverviewTitle")}
        path={path}
      />
      <Layout
        locale={props.locale}
        langUrl={t("digitalCentrePath")}
        breadcrumbItems={[
          { text: t("siteTitle"), link: t("breadCrumbsHref1") },
          { text: t("menuLink1"), link: t("breadCrumbsHref2") },
        ]}
        feedbackActive={true}
        projectName={t("dc:OverviewTitle")}
      >
        <Head>
          {props.adobeAnalyticsUrl ? (
            <script src={props.adobeAnalyticsUrl} />
          ) : (
            ""
          )}

          {/* Primary HTML Meta Tags */}
          <title>{`${t("dc:OverviewTitle")} — ${t("siteTitle")}`}</title>
          <meta name="description" content={`${t("dc:MetaDescription")}`} />
          <meta name="author" content="Service Canada" />
          <link rel="icon" href="/favicon.ico" />
          <link rel="schema.dcterms" href="http://purl.org/dc/terms/" />
          <link rel="canonical" href={`${t("dc:CanonicalURL")}`} />
          <meta name="keywords" content={`${t("dc:Keywords")}`} />

          {/* DCMI Meta Tags */}
          <meta
            name="dcterms.title"
            content={`${t("dc:OverviewTitle")} — ${t("siteTitle")}`}
          />
          <meta
            name="dcterms.language"
            content={props.locale === "en" ? "eng" : "fra"}
            title="ISO639-2/T"
          />
          <meta
            name="dcterms.description"
            content={`${t("dc:MetaDescription")}`}
          />
          <meta
            name="dcterms.subject"
            title="gccore"
            content={`${t("dc:MetaSubject")}`}
          />
          <meta name="dcterms.creator" content="Service Canada" />
          <meta name="dcterms.accessRights" content="2" />
          <meta
            name="dcterms.service"
            content="ESDC-EDSC_SCLabs-LaboratoireSC"
          />
          <meta name="dcterms.issued" title="W3CDTF" content="2021-07-21" />
          <meta name="dcterms.modified" title="W3CDTF" content="2021-12-16" />
          <meta name="dcterms.spatial" content="Canada" />

          {/* Open Graph / Facebook */}
          <meta property="og:type" content="website" />
          <meta property="og:locale" content={props.locale} />
          <meta property="og:url" content={`${t("dc:CanonicalURL")}`} />
          <meta
            property="og:title"
            content={`${t("dc:OverviewTitle")} — ${t("siteTitle")}`}
          />
          <meta
            property="og:description"
            content={`${t("dc:MetaDescription")}`}
          />
          <meta property="og:image" content={`${t("metaImage")}`} />
          <meta property="og:image:alt" content={`${t("siteTitle")}`} />

          {/* Twitter */}
          <meta property="twitter:card" content="summary_large_image" />
          <meta property="twitter:url" content={`${t("dc:CanonicalURL")}`} />
          <meta
            property="twitter:title"
            content={`${t("dc:OverviewTitle")} — ${t("siteTitle")}`}
          />
          <meta name="twitter:creator" content="Service Canada" />
          <meta
            property="twitter:description"
            content={`${t("dc:MetaDescription")}`}
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
          title={t("giveFeedback")}
          html={t("bottomFeedbackDescription")}
          lang={props.locale}
          href=""
          hrefText={t("bottomFeedbackBtn")}
          feedbackActive={true}
          clicked={() => setShowFeedback(true)}
          ariaExpanded={showFeedback.toString()}
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

export const getStaticProps = async ({ locale }) => ({
  props: {
    locale: locale,
    adobeAnalyticsUrl: process.env.ADOBE_ANALYTICS_URL,
    ...(await serverSideTranslations(locale, ["common", "dc"])),
  },
});
