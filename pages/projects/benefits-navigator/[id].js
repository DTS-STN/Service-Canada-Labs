import Head from "next/head";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { Layout } from "../../../components/organisms/Layout";
import { useEffect, useState } from "react";
import aemServiceInstance from "../../../services/aemServiceInstance";
import { getAllUpdateIds } from "../../../lib/utils/getAllUpdateIds";
import { createBreadcrumbs } from "../../../lib/utils/createBreadcrumbs";
import { Heading } from "../../../components/design-system/Heading";

export default function DynamicBenefitNavigatorPage(props) {
  const [pageData] = useState(props.pageData);
  const [dictionary] = useState(props.dictionary.items);

  useEffect(() => {
    if (props.adobeAnalyticsUrl) {
      window.adobeDataLayer = window.adobeDataLayer || [];
      window.adobeDataLayer.push({ event: "pageLoad" });
    }
  }, []);

  return (
    <>
      <Layout
        locale={props.locale}
        langUrl={
          props.locale === "en" ? pageData.scPageNameFr : pageData.scPageNameEn
        }
        dateModifiedOverride={pageData.scDateModifiedOverwrite}
        breadcrumbItems={createBreadcrumbs(
          pageData.scBreadcrumbParentPages,
          props.locale
        )}
      >
        <Head>
          {props.adobeAnalyticsUrl ? (
            <script src={props.adobeAnalyticsUrl} />
          ) : (
            ""
          )}

          {/* Primary HTML Meta Tags */}
          <title>
            {props.locale === "en"
              ? `${pageData.scTitleEn} - Service Canada Labs`
              : `${pageData.scTitleFr} - Laboratoires de Service Canada`}
          </title>
          <meta
            name="description"
            content={
              props.locale === "en" ? pageData.scTitleEn : pageData.scTitleFr
            }
          />
          <meta name="author" content="Service Canada" />
          <link rel="icon" href="/favicon.ico" />
          <link rel="schema.dcterms" href="http://purl.org/dc/terms/" />
          <meta
            name="keywords"
            content={
              props.locale === "en"
                ? pageData.scKeywordsEn
                : pageData.scKeywordsFr
            }
          />

          {/* DCMI Meta Tags */}
          <meta
            name="dcterms.title"
            content={
              props.locale === "en"
                ? pageData.scShortTitleEn
                : pageData.scShortTitleFr
            }
          />
          <meta
            name="dcterms.language"
            content={props.locale === "en" ? "eng" : "fra"}
            title="ISO639-2/T"
          />
          <meta name="dcterms.creator" content="Service Canada" />
          <meta name="dcterms.accessRights" content="2" />
          <meta
            name="dcterms.service"
            content="ESDC-EDSC_SCLabs-LaboratoireSC"
          />
          <meta name="dcterms.issued" title="W3CDTF" content="2023-07-07" />

          <meta name="dcterms.modified" title="W3CDTF" content="2023-07-07" />
          <meta
            name="dcterms.description"
            content={
              props.locale === "en" ? pageData.scTitleEn : pageData.scTitleFr
            }
          />
          <meta
            name="dcterms.subject"
            title="gccore"
            content={pageData.scSubject}
          />
          <meta name="dcterms.spatial" content="Canada" />

          {/* Open Graph / Facebook */}
          <meta property="og:type" content="website" />
          <meta property="og:locale" content={props.locale} />
          <meta
            property="og:url"
            content={
              "https://alpha.service.canada.ca" +
              `${
                props.locale === "en"
                  ? pageData.scPageNameEn
                  : pageData.scPageNameFr
              }`
            }
          />
          <meta
            property="og:title"
            content={
              props.locale === "en" ? pageData.scTitleEn : pageData.scTitleFr
            }
          />
          {/* <meta
            property="og:description"
            content={
              props.locale === "en"
                ? pageData.scFragments[1].scContentEn.json[1].content[0].value
                : pageData.scFragments[1].scContentFr.json[1].content[0].value
            }
          /> */}
          <meta
            property="og:image"
            content={pageData.scSocialMediaImageEn._publishUrl}
          />
          <meta
            property="og:image:alt"
            content={
              props.locale === "en" ? pageData.scTitleEn : pageData.scTitleFr
            }
          />

          {/* Twitter */}
          <meta property="twitter:card" content="summary_large_image" />
          <meta
            property="twitter:url"
            content={
              "https://alpha.service.canada.ca" +
              `${
                props.locale === "en"
                  ? pageData.scPageNameEn
                  : pageData.scPageNameFr
              }`
            }
          />
          <meta
            property="twitter:title"
            content={
              props.locale === "en" ? pageData.scTitleEn : pageData.scTitleFr
            }
          />
          <meta name="twitter:creator" content="Service Canada" />
          {/* <meta
            property="twitter:description"
            content={
              props.locale === "en"
                ? pageData.scFragments[1].scContentEn.json[1].content[0].value
                : pageData.scFragments[1].scContentFr.json[1].content[0].value
            }
          /> */}
          <meta
            property="twitter:image"
            content={pageData.scSocialMediaImageEn._publishUrl}
          />
          <meta
            property="twitter:image:alt"
            content={
              props.locale === "en" ? pageData.scTitleEn : pageData.scTitleFr
            }
          />
        </Head>
        <section className="layout-container mb-12">
          <Heading
            tabIndex="-1"
            id="pageMainTitle"
            title={
              props.locale === "en" ? pageData.scTitleEn : pageData.scTitleFr
            }
          />
          <div id="postedOnUpdatedOnSection" className="grid grid-cols-12">
            <p
              className={`col-span-6 sm:col-span-4 ${
                props.locale === "en" ? "lg:col-span-2" : "lg:col-span-3"
              } font-bold`}
            >
              {props.locale === "en"
                ? dictionary[9].scTermEn
                : dictionary[9].scTermFr}
            </p>
            <p className="col-span-6 col-start-7 sm:col-start-5 lg:col-span-2 md:col-start-5 mt-0">
              {pageData.scDateModifiedOverwrite}
            </p>
            <p
              className={`row-start-2 col-span-6 sm:col-span-4 mt-0 ${
                props.locale === "en" ? "lg:col-span-2" : "lg:col-span-3"
              } font-bold`}
            >
              {props.locale === "en"
                ? dictionary[4].scTermEn
                : dictionary[4].scTermFr}
            </p>
            <p className="row-start-2 col-span-6 col-start-7 sm:col-start-5 lg:col-span-2 md:col-start-5 mt-auto">
              {pageData.scDateModifiedOverwrite}
            </p>
          </div>

          {/* Main */}
          <div id="mainContentSection" className="flex flex-row-reverse mt-12">
            <div className="hidden md:block">
              <img
                src={pageData.scFragments[1].scImageEn._publishUrl}
                alt=""
                height={pageData.scFragments[1].scImageEn.height}
                width={pageData.scFragments[1].scImageEn.width}
              />
            </div>
            <div className="w-[750px] grow">
              <p>
                {props.locale === "en"
                  ? pageData.scFragments[0].scContentEn.json[1].content[0].value
                  : pageData.scFragments[0].scContentFr.json[1].content[0]
                      .value}
              </p>
              <p>
                {props.locale === "en"
                  ? pageData.scFragments[0].scContentEn.json[2].content[0].value
                  : pageData.scFragments[0].scContentFr.json[2].content[0]
                      .value}
                <a
                  className="underline underline-offset-4"
                  href={
                    props.locale === "en"
                      ? pageData.scFragments[0].scContentEn.json[2].content[1]
                          .data.href
                      : pageData.scFragments[0].scContentFr.json[2].content[1]
                          .data.href
                  }
                >
                  {props.locale === "en"
                    ? pageData.scFragments[0].scContentEn.json[2].content[1]
                        .value
                    : pageData.scFragments[0].scContentFr.json[2].content[1]
                        .value}
                </a>
                <span className="text-lg pl-1">
                  {props.locale === "en"
                    ? pageData.scFragments[0].scContentEn.json[2].content[2]
                        .value
                    : pageData.scFragments[0].scContentFr.json[2].content[2]
                        .value}
                </span>
              </p>

              <p>
                {props.locale === "en"
                  ? pageData.scFragments[0].scContentEn.json[3].content[0].value
                  : pageData.scFragments[0].scContentFr.json[3].content[0]
                      .value}
              </p>

              <p>
                {props.locale === "en"
                  ? pageData.scFragments[0].scContentEn.json[4].content[0].value
                  : pageData.scFragments[0].scContentFr.json[4].content[0]
                      .value}
              </p>

              <p>
                {props.locale === "en"
                  ? pageData.scFragments[0].scContentEn.json[5].content[0].value
                  : pageData.scFragments[0].scContentFr.json[5].content[0]
                      .value}
              </p>

              <h2>
                {props.locale === "en"
                  ? pageData.scFragments[0].scContentEn.json[6].content[0].value
                  : pageData.scFragments[0].scContentFr.json[6].content[0]
                      .value}
              </h2>
              <p>
                {props.locale === "en"
                  ? pageData.scFragments[0].scContentEn.json[7].content[0].value
                  : pageData.scFragments[0].scContentFr.json[7].content[0]
                      .value}
              </p>
              <p>
                {props.locale === "en"
                  ? pageData.scFragments[0].scContentEn.json[8].content[0].value
                  : pageData.scFragments[0].scContentFr.json[8].content[0]
                      .value}
              </p>

              <h2>
                {props.locale === "en"
                  ? pageData.scFragments[0].scContentEn.json[9].content[0].value
                  : pageData.scFragments[0].scContentFr.json[9].content[0]
                      .value}
              </h2>
              <p>
                {props.locale === "en"
                  ? pageData.scFragments[0].scContentEn.json[10].content[0]
                      .value
                  : pageData.scFragments[0].scContentFr.json[10].content[0]
                      .value}
              </p>
              <p>
                {props.locale === "en"
                  ? pageData.scFragments[0].scContentEn.json[11].content[0]
                      .value
                  : pageData.scFragments[0].scContentFr.json[11].content[0]
                      .value}
              </p>

              <h2>
                {props.locale === "en"
                  ? pageData.scFragments[0].scContentEn.json[12].content[0]
                      .value
                  : pageData.scFragments[0].scContentFr.json[12].content[0]
                      .value}
              </h2>
              <p>
                {props.locale === "en"
                  ? pageData.scFragments[0].scContentEn.json[13].content[0]
                      .value
                  : pageData.scFragments[0].scContentFr.json[13].content[0]
                      .value}
              </p>
              <p>
                {props.locale === "en"
                  ? pageData.scFragments[0].scContentEn.json[14].content[0]
                      .value
                  : pageData.scFragments[0].scContentFr.json[14].content[0]
                      .value}
              </p>
              <p>
                {props.locale === "en"
                  ? pageData.scFragments[0].scContentEn.json[15].content[0]
                      .value
                  : pageData.scFragments[0].scContentFr.json[15].content[0]
                      .value}
              </p>

              <h2>
                {props.locale === "en"
                  ? pageData.scFragments[0].scContentEn.json[16].content[0]
                      .value
                  : pageData.scFragments[0].scContentFr.json[16].content[0]
                      .value}
              </h2>
              <p>
                {props.locale === "en"
                  ? pageData.scFragments[0].scContentEn.json[17].content[0]
                      .value
                  : pageData.scFragments[0].scContentFr.json[17].content[0]
                      .value}
              </p>
              <p>
                {props.locale === "en"
                  ? pageData.scFragments[0].scContentEn.json[18].content[0]
                      .value
                  : pageData.scFragments[0].scContentFr.json[18].content[0]
                      .value}
              </p>
              <ul>
                <li>
                  {props.locale === "en"
                    ? pageData.scFragments[0].scContentEn.json[19].content[0]
                        .content[0].value
                    : pageData.scFragments[0].scContentFr.json[19].content[0]
                        .content[0].value}
                </li>
                <li>
                  {props.locale === "en"
                    ? pageData.scFragments[0].scContentEn.json[19].content[1]
                        .content[0].value
                    : pageData.scFragments[0].scContentFr.json[19].content[1]
                        .content[0].value}
                </li>
                <li>
                  {props.locale === "en"
                    ? pageData.scFragments[0].scContentEn.json[19].content[2]
                        .content[0].value
                    : pageData.scFragments[0].scContentFr.json[19].content[2]
                        .content[0].value}
                </li>
              </ul>
              <p>
                {props.locale === "en"
                  ? pageData.scFragments[0].scContentEn.json[20].content[0]
                      .value
                  : pageData.scFragments[0].scContentFr.json[20].content[0]
                      .value}
              </p>
            </div>
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

export async function getStaticPaths() {
  // Get pages data
  const { data } = await aemServiceInstance.getFragment(
    "benefitsNavigatorArticlesQuery"
  );
  // Get paths for dynamic routes from the page name data
  const paths = getAllUpdateIds(data.scLabsPagev1List.items);
  paths.map((path) => {
    path.locale === "en"
      ? (path.params.id = path.params.id.slice(32))
      : (path.params.id = path.params.id.slice(35));
  });
  return {
    paths,
    fallback: false,
  };
}

export const getStaticProps = async ({ locale, params }) => {
  // Get pages data
  const { data } = await aemServiceInstance.getFragment(
    "benefitsNavigatorArticlesQuery"
  );
  // get dictionary
  const { data: dictionary } = await aemServiceInstance.getFragment(
    "dictionaryQuery"
  );
  const pages = data.scLabsPagev1List.items;
  // Return page data that matches the current page being built
  const pageData = pages.filter((page) => {
    return (
      page.scPageNameEn.slice(32) === params.id ||
      page.scPageNameFr.slice(35) === params.id
    );
  });

  return {
    props: {
      locale: locale,
      pageData: pageData[0],
      dictionary: dictionary.dictionaryV1List,
      adobeAnalyticsUrl: process.env.ADOBE_ANALYTICS_URL,
      ...(await serverSideTranslations(locale, ["common", "vc"])),
    },
  };
};
