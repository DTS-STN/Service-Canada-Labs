import Head from "next/head";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "next-i18next";
import { Layout } from "../../../components/organisms/Layout";
import { ActionButton } from "../../../components/atoms/ActionButton";
import { useEffect, useState } from "react";
import aemServiceInstance from "../../../services/aemServiceInstance";
import { getAllUpdateIds } from "../../../lib/utils/getAllUpdateIds";
import { CTA, Heading } from "@dts-stn/service-canada-design-system";
import { createBreadcrumbs } from "../../../lib/utils/createBreadcrumbs";

export default function OASUpdatePage(props) {
  const { t } = useTranslation("common");
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
              props.locale === "en" ? pageData.scTitleEn : pageData.scTitleFr
            }
          />
          <meta
            name="dcterms.language"
            content={props.locale === "en" ? "eng" : "fra"}
            title="ISO639-2/T"
          />
          <meta
            name="dcterms.creator"
            content={
              props.locale === "en"
                ? "Employment and Social Development Canada"
                : "Emploi et Développement social Canada"
            }
          />
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
          <meta
            property="og:description"
            content={
              props.locale === "en"
                ? pageData.scFragments[1].scContentEn.json[1].content[0].value
                : pageData.scFragments[1].scContentFr.json[1].content[0].value
            }
          />
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
          <meta
            property="twitter:description"
            content={
              props.locale === "en"
                ? pageData.scFragments[1].scContentEn.json[1].content[0].value
                : pageData.scFragments[1].scContentFr.json[1].content[0].value
            }
          />
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
              props.locale === "en"
                ? pageData.scFragments[1].scContentEn.json[0].content[0].value
                : pageData.scFragments[1].scContentFr.json[0].content[0].value
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
          <div
            id="mainContentSection"
            className="grid grid-cols-12 pt-16 gap-x-2"
          >
            <p className="col-span-12 lg:col-span-8">
              {props.locale === "en"
                ? pageData.scFragments[1].scContentEn.json[1].content[0].value
                : pageData.scFragments[1].scContentFr.json[1].content[0].value}
            </p>
            <p className="col-span-12 lg:col-span-8">
              {props.locale === "en"
                ? pageData.scFragments[1].scContentEn.json[2].content[0].value
                : pageData.scFragments[1].scContentFr.json[2].content[0].value}
            </p>
            <div className="hidden lg:grid col-start-9 col-span-4 row-start-1 row-span-2">
              <div className="flex justify-center">
                <div className="h-auto max-w-xs">
                  <img
                    src={
                      props.locale === "en"
                        ? pageData.scFragments[0].scImageEn._publishUrl
                        : pageData.scFragments[0].scImageFr._publishUrl
                    }
                    alt={
                      props.locale === "en"
                        ? pageData.scFragments[0].scImageAltTextEn
                        : pageData.scFragments[0].scImageAltTextFr
                    }
                    width={468}
                    height={462}
                  />
                </div>
              </div>
            </div>
            <h2 className="col-span-12">
              {props.locale === "en"
                ? pageData.scFragments[1].scContentEn.json[3].content[0].value
                : pageData.scFragments[1].scContentFr.json[3].content[0].value}
            </h2>
            <p className="col-span-12 lg:col-span-8">
              {props.locale === "en"
                ? pageData.scFragments[1].scContentEn.json[4].content[0].value
                : pageData.scFragments[1].scContentFr.json[4].content[0].value}
            </p>
            <p className="col-span-12 lg:col-span-8">
              {props.locale === "en"
                ? pageData.scFragments[1].scContentEn.json[5].content[0].value
                : pageData.scFragments[1].scContentFr.json[5].content[0].value}
            </p>
            <ul className="col-span-12 lg:col-span-8">
              <li>
                {props.locale === "en"
                  ? pageData.scFragments[1].scContentEn.json[6].content[0]
                      .content[0].value
                  : pageData.scFragments[1].scContentFr.json[6].content[0]
                      .content[0].value}
              </li>
              <li>
                {props.locale === "en"
                  ? pageData.scFragments[1].scContentEn.json[6].content[1]
                      .content[0].value
                  : pageData.scFragments[1].scContentFr.json[6].content[1]
                      .content[0].value}
              </li>
              <li>
                {props.locale === "en"
                  ? pageData.scFragments[1].scContentEn.json[6].content[2]
                      .content[0].value
                  : pageData.scFragments[1].scContentFr.json[6].content[2]
                      .content[0].value}
              </li>
            </ul>
            <p className="col-span-12 lg:col-span-8">
              {props.locale === "en"
                ? pageData.scFragments[1].scContentEn.json[7].content[0].value
                : pageData.scFragments[1].scContentFr.json[7].content[0].value}
            </p>
            <h2 className="col-span-12">
              {props.locale === "en"
                ? pageData.scFragments[1].scContentEn.json[8].content[0].value
                : pageData.scFragments[1].scContentFr.json[8].content[0].value}
            </h2>
            <p className="col-span-12 lg:col-span-8">
              {props.locale === "en"
                ? pageData.scFragments[1].scContentEn.json[9].content[0].value
                : pageData.scFragments[1].scContentFr.json[9].content[0].value}
            </p>
            <p className="col-span-12 lg:col-span-8">
              {props.locale === "en"
                ? pageData.scFragments[1].scContentEn.json[10].content[0].value
                : pageData.scFragments[1].scContentFr.json[10].content[0].value}
            </p>
            <p className="col-span-12 lg:col-span-8">
              {props.locale === "en"
                ? pageData.scFragments[1].scContentEn.json[11].content[0].value
                : pageData.scFragments[1].scContentFr.json[11].content[0].value}
            </p>
            <p className="col-span-12 lg:col-span-8">
              {props.locale === "en"
                ? pageData.scFragments[1].scContentEn.json[12].content[0].value
                : pageData.scFragments[1].scContentFr.json[12].content[0].value}
            </p>
            <h2 className="col-span-12">
              {props.locale === "en"
                ? pageData.scFragments[1].scContentEn.json[13].content[0].value
                : pageData.scFragments[1].scContentFr.json[13].content[0].value}
            </h2>
            <p className="col-span-12 lg:col-span-8">
              {props.locale === "en"
                ? pageData.scFragments[1].scContentEn.json[14].content[0].value
                : pageData.scFragments[1].scContentFr.json[14].content[0].value}
            </p>
            <p className="col-span-12 lg:col-span-8">
              {props.locale === "en"
                ? pageData.scFragments[1].scContentEn.json[15].content[0].value
                : pageData.scFragments[1].scContentFr.json[15].content[0].value}
            </p>
            <ul className="col-span-12 lg:col-span-8">
              <li className="text-[20px]">
                {props.locale === "en"
                  ? pageData.scFragments[1].scContentEn.json[16].content[0]
                      .content[0].value
                  : pageData.scFragments[1].scContentFr.json[16].content[0]
                      .content[0].value}
              </li>
              <li className="text-[20px]">
                {props.locale === "en"
                  ? pageData.scFragments[1].scContentEn.json[16].content[1]
                      .content[0].value
                  : pageData.scFragments[1].scContentFr.json[16].content[1]
                      .content[0].value}
              </li>
            </ul>
            <p className="col-span-12 lg:col-span-8">
              {props.locale === "en"
                ? pageData.scFragments[1].scContentEn.json[17].content[0].value
                : pageData.scFragments[1].scContentFr.json[17].content[0].value}
            </p>
            <ul className="col-span-12 lg:col-span-8">
              <li className="text-[20px]">
                {props.locale === "en"
                  ? pageData.scFragments[1].scContentEn.json[18].content[0]
                      .content[0].value
                  : pageData.scFragments[1].scContentFr.json[18].content[0]
                      .content[0].value}
              </li>
              <li className="text-[20px]">
                {props.locale === "en"
                  ? pageData.scFragments[1].scContentEn.json[18].content[1]
                      .content[0].value
                  : pageData.scFragments[1].scContentFr.json[18].content[1]
                      .content[0].value}
              </li>
              <li className="text-[20px]">
                {props.locale === "en"
                  ? pageData.scFragments[1].scContentEn.json[18].content[2]
                      .content[0].value
                  : pageData.scFragments[1].scContentFr.json[18].content[2]
                      .content[0].value}
              </li>
            </ul>
            <p className="col-span-12 lg:col-span-8">
              {props.locale === "en"
                ? pageData.scFragments[1].scContentEn.json[19].content[0].value
                : pageData.scFragments[1].scContentFr.json[19].content[0].value}
            </p>
            <h2 className="col-span-12">
              {props.locale === "en"
                ? pageData.scFragments[1].scContentEn.json[20].content[0].value
                : pageData.scFragments[1].scContentFr.json[20].content[0].value}
            </h2>
            <p className="col-span-12 lg:col-span-8">
              {props.locale === "en"
                ? pageData.scFragments[1].scContentEn.json[21].content[0].value
                : pageData.scFragments[1].scContentFr.json[21].content[0].value}
            </p>
            <ActionButton
              id="feedback-btn"
              style="secondary"
              custom="col-span-12 mt-8"
              href={
                props.locale === "en"
                  ? pageData.scFragments[2].scDestinationURLEn
                  : pageData.scFragments[2].scDestinationURLFr
              }
              text={
                props.locale === "en"
                  ? pageData.scFragments[2].scTitleEn
                  : pageData.scFragments[2].scTitleFr
              }
              ariaExpanded={props.ariaExpanded}
            />
          </div>
        </section>
        <CTA
          heading={
            props.locale === "en"
              ? pageData.scFragments[3].scTitleEn
              : pageData.scFragments[3].scTitleFr
          }
          body={
            props.locale === "en"
              ? pageData.scFragments[3].scContentEn.json[0].content[0].value
              : pageData.scFragments[3].scContentFr.json[0].content[0].value
          }
          ButtonProps={{
            id: "cta-btn",
            text:
              props.locale === "en"
                ? pageData.scFragments[3].scLabsButton[0].scTitleEn
                : pageData.scFragments[3].scLabsButton[0].scTitleFr,
            href:
              props.locale === "en"
                ? pageData.scFragments[3].scLabsButton[0].scDestinationURLEn
                : pageData.scFragments[3].scLabsButton[0].scDestinationURLFr,
            className:
              "w-fit bg-[#26374A] mt-4 text-white visited:text-white hover:bg-[#1C578A] hover:no-underline hover:text-white active:bg-[#16446C]",
          }}
          containerClass="layout-container my-4"
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

export async function getStaticPaths() {
  // Get pages data
  const { data } = await aemServiceInstance.getFragment(
    "oasBenefitsEstimatorArticlesQuery"
  );
  // Get paths for dynamic routes from the page name data
  const paths = getAllUpdateIds(data.scLabsPagev1List.items);
  // Remove characters preceding the page name itself i.e. change "/en/projects/oas-benefits-estimator/what-we-learned" to "what-we-learned"
  paths.map((path) => {
    path.locale === "en"
      ? (path.params.id = path.params.id.slice(36))
      : (path.params.id = path.params.id.slice(38));
  });
  return {
    paths,
    fallback: false,
  };
}

export const getStaticProps = async ({ locale, params }) => {
  // Get pages data
  const { data } = await aemServiceInstance.getFragment(
    "oasBenefitsEstimatorArticlesQuery"
  );
  // get dictionary
  const { data: dictionary } = await aemServiceInstance.getFragment(
    "dictionaryQuery"
  );
  const pages = data.scLabsPagev1List.items;
  // Return page data that matches the current page being built
  const pageData = pages.filter((page) => {
    return (
      page.scPageNameEn.slice(36) === params.id ||
      page.scPageNameFr.slice(38) === params.id
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
