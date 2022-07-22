import PropTypes from "prop-types";
import Head from "next/head";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "next-i18next";
import { Layout } from "../../components/organisms/Layout";
import { CallToAction } from "../../components/molecules/CallToAction";
import { useEffect, useState } from "react";
import FeedbackWidget from "../../components/molecules/FeedbackWidget";
import queryGraphQL from "../../graphql/client";
import getDigitalCentrePage from "../../graphql/queries/digitalCentreQuery.graphql";
import Image from "next/image";

function ThumbnailWithCaption({
  title = "Image 1",
  src = "/placeholder.png",
  alt = "placeholder",
  children,
}) {
  return (
    <div className="flex justify-center flex-col">
      <h3 className=" mt-3">{title}</h3>
      <figure className="shadow-experiment-shadow">
        <Image src={src} alt={alt} width={570} height={320} />
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
  const [pageData] = useState(props.pageData.item);

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
        langUrl={
          props.locale === "en" ? pageData.scPageNameFr : pageData.scPageNameEn
        }
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
          <title>{`${
            props.locale === "en" ? pageData.scTitleEn : pageData.scTitleFr
          } — ${t("siteTitle")}`}</title>
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
            {props.locale === "en" ? pageData.scTitleEn : pageData.scTitleFr}
          </h1>
          <p className="mt-3">
            {props.locale === "en"
              ? pageData.scFragments[0].scContentEn.json[0].content[0].value
              : pageData.scFragments[0].scContentFr.json[0].content[0].value}
          </p>
          <p className="mt-3">
            {props.locale === "en"
              ? pageData.scFragments[0].scContentEn.json[1].content[0].value
              : pageData.scFragments[0].scContentFr.json[1].content[0].value}
          </p>
          <p className="mt-3">
            {props.locale === "en"
              ? pageData.scFragments[0].scContentEn.json[2].content[0].value
              : pageData.scFragments[0].scContentFr.json[2].content[0].value}
          </p>
          <h2 className="mt-10">
            {props.locale === "en"
              ? pageData.scFragments[1].scContentEn.json[0].content[0].value
              : pageData.scFragments[1].scContentFr.json[0].content[0].value}
          </h2>
          <p className="mt-6">
            {props.locale === "en"
              ? pageData.scFragments[1].scContentEn.json[1].content[0].value
              : pageData.scFragments[1].scContentFr.json[1].content[0].value}
          </p>
          <p className="mt-6">
            {props.locale === "en"
              ? pageData.scFragments[1].scContentEn.json[2].content[0].value
              : pageData.scFragments[1].scContentFr.json[2].content[0].value}
          </p>
          <div className="mx-auto">
            <div className="mt-6 grid grid-cols-1 lg:grid-cols-2 items-start gap-6">
              <ThumbnailWithCaption
                title={
                  props.locale === "en"
                    ? pageData.scFragments[5].scContentEn.json[0].content[0]
                        .value
                    : pageData.scFragments[5].scContentFr.json[0].content[0]
                        .value
                }
                alt={
                  props.locale === "en"
                    ? pageData.scFragments[13].scImageAltTextEn
                    : pageData.scFragments[13].scImageAltTextFr
                }
                src={`https://www.canada.ca${
                  props.locale === "en"
                    ? pageData.scFragments[13].scImageEn._path
                    : pageData.scFragments[13].scImageFr._path
                }`}
              >
                <p className="text-base">
                  {props.locale === "en"
                    ? pageData.scFragments[5].scContentEn.json[1].content[0]
                        .value
                    : pageData.scFragments[5].scContentFr.json[1].content[0]
                        .value}
                </p>
                <ol className="ml-8">
                  <li>
                    {props.locale === "en"
                      ? pageData.scFragments[5].scContentEn.json[2].content[0]
                          .content[0].value
                      : pageData.scFragments[5].scContentFr.json[2].content[0]
                          .content[0].value}
                  </li>
                  <li>
                    {props.locale === "en"
                      ? pageData.scFragments[5].scContentEn.json[2].content[1]
                          .content[0].value
                      : pageData.scFragments[5].scContentFr.json[2].content[1]
                          .content[0].value}
                  </li>
                  <li>
                    {props.locale === "en"
                      ? pageData.scFragments[5].scContentEn.json[2].content[2]
                          .content[0].value
                      : pageData.scFragments[5].scContentFr.json[2].content[2]
                          .content[0].value}
                  </li>
                  <li>
                    {props.locale === "en"
                      ? pageData.scFragments[5].scContentEn.json[2].content[3]
                          .content[0].value
                      : pageData.scFragments[5].scContentFr.json[2].content[3]
                          .content[0].value}
                  </li>
                  <li>
                    {props.locale === "en"
                      ? pageData.scFragments[5].scContentEn.json[2].content[4]
                          .content[0].value
                      : pageData.scFragments[5].scContentFr.json[2].content[4]
                          .content[0].value}
                  </li>
                  <li>
                    {props.locale === "en"
                      ? pageData.scFragments[5].scContentEn.json[2].content[5]
                          .content[0].value
                      : pageData.scFragments[5].scContentFr.json[2].content[5]
                          .content[0].value}
                  </li>
                </ol>
              </ThumbnailWithCaption>
              <ThumbnailWithCaption
                title={
                  props.locale === "en"
                    ? pageData.scFragments[6].scContentEn.json[0].content[0]
                        .value
                    : pageData.scFragments[6].scContentFr.json[0].content[0]
                        .value
                }
                alt={
                  props.locale === "en"
                    ? pageData.scFragments[14].scImageAltTextEn
                    : pageData.scFragments[14].scImageAltTextFr
                }
                src={`https://www.canada.ca${
                  props.locale === "en"
                    ? pageData.scFragments[14].scImageEn._path
                    : pageData.scFragments[14].scImageFr._path
                }`}
              >
                <p className="text-base">
                  {props.locale === "en"
                    ? pageData.scFragments[6].scContentEn.json[1].content[0]
                        .value
                    : pageData.scFragments[6].scContentFr.json[1].content[0]
                        .value}
                </p>
                <ol className="ml-8">
                  <li>
                    {props.locale === "en"
                      ? pageData.scFragments[6].scContentEn.json[2].content[0]
                          .content[0].value
                      : pageData.scFragments[6].scContentFr.json[2].content[0]
                          .content[0].value}
                  </li>
                  <li>
                    {props.locale === "en"
                      ? pageData.scFragments[6].scContentEn.json[2].content[1]
                          .content[0].value
                      : pageData.scFragments[6].scContentFr.json[2].content[1]
                          .content[0].value}
                  </li>
                  <li>
                    {props.locale === "en"
                      ? pageData.scFragments[6].scContentEn.json[2].content[2]
                          .content[0].value
                      : pageData.scFragments[6].scContentFr.json[2].content[2]
                          .content[0].value}
                  </li>
                </ol>
              </ThumbnailWithCaption>
              <ThumbnailWithCaption
                title={
                  props.locale === "en"
                    ? pageData.scFragments[7].scContentEn.json[0].content[0]
                        .value
                    : pageData.scFragments[7].scContentFr.json[0].content[0]
                        .value
                }
                alt={
                  props.locale === "en"
                    ? pageData.scFragments[15].scImageAltTextEn
                    : pageData.scFragments[15].scImageAltTextFr
                }
                src={`https://www.canada.ca${
                  props.locale === "en"
                    ? pageData.scFragments[15].scImageEn._path
                    : pageData.scFragments[15].scImageFr._path
                }`}
              >
                <p className="text-base">
                  {props.locale === "en"
                    ? pageData.scFragments[7].scContentEn.json[1].content[0]
                        .value
                    : pageData.scFragments[7].scContentFr.json[1].content[0]
                        .value}
                </p>
                <ol className="ml-8">
                  <li>
                    {props.locale === "en"
                      ? pageData.scFragments[7].scContentEn.json[2].content[0]
                          .content[0].value
                      : pageData.scFragments[7].scContentFr.json[2].content[0]
                          .content[0].value}
                  </li>
                  <li>
                    {props.locale === "en"
                      ? pageData.scFragments[7].scContentEn.json[2].content[1]
                          .content[0].value
                      : pageData.scFragments[7].scContentFr.json[2].content[1]
                          .content[0].value}
                  </li>
                  <li>
                    {props.locale === "en"
                      ? pageData.scFragments[7].scContentEn.json[2].content[2]
                          .content[0].value
                      : pageData.scFragments[7].scContentFr.json[2].content[2]
                          .content[0].value}
                  </li>
                  <li>
                    {props.locale === "en"
                      ? pageData.scFragments[7].scContentEn.json[2].content[3]
                          .content[0].value
                      : pageData.scFragments[7].scContentFr.json[2].content[3]
                          .content[0].value}
                  </li>
                </ol>
              </ThumbnailWithCaption>
            </div>
          </div>

          <h2 className="mt-10">
            {props.locale === "en"
              ? pageData.scFragments[2].scContentEn.json[0].content[0].value
              : pageData.scFragments[2].scContentFr.json[0].content[0].value}
          </h2>
          <p className="mt-6">
            {props.locale === "en"
              ? pageData.scFragments[2].scContentEn.json[1].content[0].value
              : pageData.scFragments[2].scContentFr.json[1].content[0].value}
          </p>
          <ol className="mt-4 ml-8 list-decimal list-outside">
            <li className="mt-1">
              <a
                href={
                  props.locale === "en"
                    ? pageData.scFragments[2].scContentEn.json[2].content[0]
                        .content[0].data.href
                    : pageData.scFragments[2].scContentFr.json[2].content[0]
                        .content[0].data.href
                }
                target="_blank"
                rel="noopener"
                className="font-body hover:text-canada-footer-hover-font-blue text-custom-blue-projects-link visited:text-purple-700 underline "
              >
                {props.locale === "en"
                  ? pageData.scFragments[2].scContentEn.json[2].content[0]
                      .content[0].value
                  : pageData.scFragments[2].scContentFr.json[2].content[0]
                      .content[0].value}
              </a>{" "}
              {props.locale === "en"
                ? pageData.scFragments[2].scContentEn.json[2].content[0]
                    .content[1].value
                : pageData.scFragments[2].scContentFr.json[2].content[0]
                    .content[1].value}
            </li>
            <li className="mt-1">
              <a
                href={
                  props.locale === "en"
                    ? pageData.scFragments[2].scContentEn.json[2].content[1]
                        .content[0].data.href
                    : pageData.scFragments[2].scContentFr.json[2].content[1]
                        .content[0].data.href
                }
                target="_blank"
                rel="noopener"
                className="font-body hover:text-canada-footer-hover-font-blue text-custom-blue-projects-link visited:text-purple-700 underline "
              >
                {props.locale === "en"
                  ? pageData.scFragments[2].scContentEn.json[2].content[1]
                      .content[0].value
                  : pageData.scFragments[2].scContentFr.json[2].content[1]
                      .content[0].value}
              </a>
              {props.locale === "en"
                ? pageData.scFragments[2].scContentEn.json[2].content[1]
                    .content[1].value
                : pageData.scFragments[2].scContentFr.json[2].content[1]
                    .content[1].value}
            </li>
            <li className="mt-1">
              <a
                href={
                  props.locale === "en"
                    ? pageData.scFragments[2].scContentEn.json[2].content[2]
                        .content[0].data.href
                    : pageData.scFragments[2].scContentFr.json[2].content[2]
                        .content[0].data.href
                }
                target="_blank"
                rel="noopener"
                className="font-body hover:text-canada-footer-hover-font-blue text-custom-blue-projects-link visited:text-purple-700 underline "
              >
                {props.locale === "en"
                  ? pageData.scFragments[2].scContentEn.json[2].content[2]
                      .content[0].value
                  : pageData.scFragments[2].scContentFr.json[2].content[2]
                      .content[0].value}
              </a>
              {props.locale === "en"
                ? pageData.scFragments[2].scContentEn.json[2].content[2]
                    .content[1].value
                : pageData.scFragments[2].scContentFr.json[2].content[2]
                    .content[1].value}
            </li>
            <li className="mt-1">
              {props.locale === "en"
                ? pageData.scFragments[2].scContentEn.json[2].content[3]
                    .content[0].value
                : pageData.scFragments[2].scContentFr.json[2].content[3]
                    .content[0].value}
            </li>
          </ol>

          <div className="mx-auto">
            <div className="mt-6 grid grid-cols-1 lg:grid-cols-2 items-start gap-6">
              <ThumbnailWithCaption
                title={
                  props.locale === "en"
                    ? pageData.scFragments[8].scContentEn.json[0].content[0]
                        .value
                    : pageData.scFragments[8].scContentFr.json[0].content[0]
                        .value
                }
                alt={
                  props.locale === "en"
                    ? pageData.scFragments[16].scImageAltTextEn
                    : pageData.scFragments[16].scImageAltTextFr
                }
                src={`https://www.canada.ca${
                  props.locale === "en"
                    ? pageData.scFragments[16].scImageEn._path
                    : pageData.scFragments[16].scImageFr._path
                }`}
              >
                <p className="text-base">
                  {props.locale === "en"
                    ? pageData.scFragments[8].scContentEn.json[1].content[0]
                        .value
                    : pageData.scFragments[8].scContentFr.json[1].content[0]
                        .value}
                </p>
                <ol className="ml-8">
                  <li>
                    {props.locale === "en"
                      ? pageData.scFragments[8].scContentEn.json[2].content[0]
                          .content[0].value
                      : pageData.scFragments[8].scContentFr.json[2].content[0]
                          .content[0].value}
                  </li>
                  <li>
                    {props.locale === "en"
                      ? pageData.scFragments[8].scContentEn.json[2].content[1]
                          .content[0].value
                      : pageData.scFragments[8].scContentFr.json[2].content[1]
                          .content[0].value}
                  </li>
                  <li>
                    {props.locale === "en"
                      ? pageData.scFragments[8].scContentEn.json[2].content[2]
                          .content[0].value
                      : pageData.scFragments[8].scContentFr.json[2].content[2]
                          .content[0].value}
                  </li>
                  <li>
                    {props.locale === "en"
                      ? pageData.scFragments[8].scContentEn.json[2].content[3]
                          .content[0].value
                      : pageData.scFragments[8].scContentFr.json[2].content[3]
                          .content[0].value}
                  </li>
                  <li>
                    {props.locale === "en"
                      ? pageData.scFragments[8].scContentEn.json[2].content[4]
                          .content[0].value
                      : pageData.scFragments[8].scContentFr.json[2].content[4]
                          .content[0].value}
                  </li>
                </ol>
              </ThumbnailWithCaption>
              <ThumbnailWithCaption
                title={
                  props.locale === "en"
                    ? pageData.scFragments[9].scContentEn.json[0].content[0]
                        .value
                    : pageData.scFragments[9].scContentFr.json[0].content[0]
                        .value
                }
                alt={
                  props.locale === "en"
                    ? pageData.scFragments[17].scImageAltTextEn
                    : pageData.scFragments[17].scImageAltTextFr
                }
                src={`https://www.canada.ca${
                  props.locale === "en"
                    ? pageData.scFragments[17].scImageEn._path
                    : pageData.scFragments[17].scImageFr._path
                }`}
              >
                <p className="text-base">
                  {props.locale === "en"
                    ? pageData.scFragments[9].scContentEn.json[1].content[0]
                        .value
                    : pageData.scFragments[9].scContentFr.json[1].content[0]
                        .value}
                </p>
                <ol className="ml-8">
                  <li>
                    {props.locale === "en"
                      ? pageData.scFragments[9].scContentEn.json[2].content[0]
                          .content[0].value
                      : pageData.scFragments[9].scContentFr.json[2].content[0]
                          .content[0].value}
                  </li>
                  <li>
                    {props.locale === "en"
                      ? pageData.scFragments[9].scContentEn.json[2].content[1]
                          .content[0].value
                      : pageData.scFragments[9].scContentFr.json[2].content[1]
                          .content[0].value}
                  </li>
                </ol>
              </ThumbnailWithCaption>
              <ThumbnailWithCaption
                title={
                  props.locale === "en"
                    ? pageData.scFragments[10].scContentEn.json[0].content[0]
                        .value
                    : pageData.scFragments[10].scContentFr.json[0].content[0]
                        .value
                }
                alt={
                  props.locale === "en"
                    ? pageData.scFragments[18].scImageAltTextEn
                    : pageData.scFragments[18].scImageAltTextFr
                }
                src={`https://www.canada.ca${
                  props.locale === "en"
                    ? pageData.scFragments[18].scImageEn._path
                    : pageData.scFragments[18].scImageFr._path
                }`}
              >
                <p className="text-base">
                  {props.locale === "en"
                    ? pageData.scFragments[10].scContentEn.json[1].content[0]
                        .value
                    : pageData.scFragments[10].scContentFr.json[1].content[0]
                        .value}
                </p>
                <ol className="ml-8">
                  <li>
                    {props.locale === "en"
                      ? pageData.scFragments[10].scContentEn.json[2].content[0]
                          .content[0].value
                      : pageData.scFragments[10].scContentFr.json[2].content[0]
                          .content[0].value}
                  </li>
                  <li>
                    {props.locale === "en"
                      ? pageData.scFragments[10].scContentEn.json[2].content[1]
                          .content[0].value
                      : pageData.scFragments[10].scContentFr.json[2].content[1]
                          .content[0].value}
                  </li>
                  <li>
                    {props.locale === "en"
                      ? pageData.scFragments[10].scContentEn.json[2].content[2]
                          .content[0].value
                      : pageData.scFragments[10].scContentFr.json[2].content[2]
                          .content[0].value}
                  </li>
                </ol>
              </ThumbnailWithCaption>
            </div>
          </div>

          <h2 className="mt-10">
            {props.locale === "en"
              ? pageData.scFragments[3].scContentEn.json[0].content[0].value
              : pageData.scFragments[3].scContentFr.json[0].content[0].value}
          </h2>
          <p className="mt-6">
            {props.locale === "en"
              ? pageData.scFragments[3].scContentEn.json[1].content[0].value
              : pageData.scFragments[3].scContentFr.json[1].content[0].value}
          </p>
          <ol className="mt-4 ml-8">
            <li>
              {props.locale === "en"
                ? pageData.scFragments[3].scContentEn.json[2].content[0]
                    .content[0].value
                : pageData.scFragments[3].scContentFr.json[2].content[0]
                    .content[0].value}
            </li>
            <li>
              {props.locale === "en"
                ? pageData.scFragments[3].scContentEn.json[2].content[1]
                    .content[0].value
                : pageData.scFragments[3].scContentFr.json[2].content[1]
                    .content[0].value}
            </li>
            <li>
              {props.locale === "en"
                ? pageData.scFragments[3].scContentEn.json[2].content[2]
                    .content[0].value
                : pageData.scFragments[3].scContentFr.json[2].content[2]
                    .content[0].value}
            </li>
            <li>
              {props.locale === "en"
                ? pageData.scFragments[3].scContentEn.json[2].content[3]
                    .content[0].value
                : pageData.scFragments[3].scContentFr.json[2].content[3]
                    .content[0].value}
            </li>
          </ol>

          <div className="mx-auto">
            <div className="mt-6 grid grid-cols-1 lg:grid-cols-2 items-start gap-6">
              <ThumbnailWithCaption
                title={
                  props.locale === "en"
                    ? pageData.scFragments[11].scContentEn.json[0].content[0]
                        .value
                    : pageData.scFragments[11].scContentFr.json[0].content[0]
                        .value
                }
                alt={
                  props.locale === "en"
                    ? pageData.scFragments[19].scImageAltTextEn
                    : pageData.scFragments[19].scImageAltTextFr
                }
                src={`https://www.canada.ca${
                  props.locale === "en"
                    ? pageData.scFragments[19].scImageEn._path
                    : pageData.scFragments[19].scImageFr._path
                }`}
              >
                <p className="text-base">
                  {props.locale === "en"
                    ? pageData.scFragments[11].scContentEn.json[1].content[0]
                        .value
                    : pageData.scFragments[11].scContentFr.json[1].content[0]
                        .value}
                </p>
                <ol className="ml-8">
                  <li>
                    {props.locale === "en"
                      ? pageData.scFragments[11].scContentEn.json[2].content[0]
                          .content[0].value
                      : pageData.scFragments[11].scContentFr.json[2].content[0]
                          .content[0].value}
                  </li>
                  <li>
                    {props.locale === "en"
                      ? pageData.scFragments[11].scContentEn.json[2].content[1]
                          .content[0].value
                      : pageData.scFragments[11].scContentFr.json[2].content[1]
                          .content[0].value}
                  </li>
                  <li>
                    {props.locale === "en"
                      ? pageData.scFragments[11].scContentEn.json[2].content[2]
                          .content[0].value
                      : pageData.scFragments[11].scContentFr.json[2].content[2]
                          .content[0].value}
                  </li>
                  <li>
                    {props.locale === "en"
                      ? pageData.scFragments[11].scContentEn.json[2].content[3]
                          .content[0].value
                      : pageData.scFragments[11].scContentFr.json[2].content[3]
                          .content[0].value}
                  </li>
                  <li>
                    {props.locale === "en"
                      ? pageData.scFragments[11].scContentEn.json[2].content[4]
                          .content[0].value
                      : pageData.scFragments[11].scContentFr.json[2].content[4]
                          .content[0].value}
                  </li>
                </ol>
              </ThumbnailWithCaption>
            </div>
          </div>

          <h2 className=" mt-10">
            {props.locale === "en"
              ? pageData.scFragments[4].scContentEn.json[0].content[0].value
              : pageData.scFragments[4].scContentFr.json[0].content[0].value}
          </h2>
          <p className=" mt-6">
            {props.locale === "en"
              ? pageData.scFragments[4].scContentEn.json[1].content[0].value
              : pageData.scFragments[4].scContentFr.json[1].content[0].value}
          </p>

          <div className="mx-auto">
            <div className="mt-6 grid grid-cols-1 lg:grid-cols-2 items-start gap-6">
              <ThumbnailWithCaption
                title={
                  props.locale === "en"
                    ? pageData.scFragments[12].scContentEn.json[0].content[0]
                        .value
                    : pageData.scFragments[12].scContentFr.json[0].content[0]
                        .value
                }
                alt={
                  props.locale === "en"
                    ? pageData.scFragments[20].scImageAltTextEn
                    : pageData.scFragments[20].scImageAltTextFr
                }
                src={`https://www.canada.ca${
                  props.locale === "en"
                    ? pageData.scFragments[20].scImageEn._path
                    : pageData.scFragments[20].scImageFr._path
                }`}
              >
                <p className="text-base">
                  {props.locale === "en"
                    ? pageData.scFragments[12].scContentEn.json[1].content[0]
                        .value
                    : pageData.scFragments[12].scContentFr.json[1].content[0]
                        .value}
                </p>
                <ol className="ml-8">
                  <li>
                    {props.locale === "en"
                      ? pageData.scFragments[12].scContentEn.json[2].content[0]
                          .content[0].value
                      : pageData.scFragments[12].scContentFr.json[2].content[0]
                          .content[0].value}
                  </li>
                  <li>
                    {props.locale === "en"
                      ? pageData.scFragments[12].scContentEn.json[2].content[1]
                          .content[0].value
                      : pageData.scFragments[12].scContentFr.json[2].content[1]
                          .content[0].value}
                  </li>
                  <li>
                    {props.locale === "en"
                      ? pageData.scFragments[12].scContentEn.json[2].content[2]
                          .content[0].value
                      : pageData.scFragments[12].scContentFr.json[2].content[2]
                          .content[0].value}
                  </li>
                  <li>
                    {props.locale === "en"
                      ? pageData.scFragments[12].scContentEn.json[2].content[3]
                          .content[0].value
                      : pageData.scFragments[12].scContentFr.json[2].content[3]
                          .content[0].value}
                  </li>
                  <li>
                    {props.locale === "en"
                      ? pageData.scFragments[12].scContentEn.json[2].content[4]
                          .content[0].value
                      : pageData.scFragments[12].scContentFr.json[2].content[4]
                          .content[0].value}
                  </li>
                  <li>
                    {props.locale === "en"
                      ? pageData.scFragments[12].scContentEn.json[2].content[5]
                          .content[0].value
                      : pageData.scFragments[12].scContentFr.json[2].content[5]
                          .content[0].value}
                  </li>
                </ol>
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

export const getStaticProps = async ({ locale }) => {
  // get page data from AEM
  const res = await queryGraphQL(getDigitalCentrePage).then((result) => {
    return result;
  });

  const data = res.data.sCLabsPageByPath;
  return {
    props: {
      locale: locale,
      pageData: data,
      adobeAnalyticsUrl: process.env.ADOBE_ANALYTICS_URL,
      ...(await serverSideTranslations(locale, ["common"])),
    },
  };
};
