import Head from "next/head";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { Layout } from "../../../components/organisms/Layout";
import { ActionButton } from "../../../components//atoms/ActionButton";
import { useEffect, useState } from "react";
import aemServiceInstance from "../../../services/aemServiceInstance";
import { ProjectInfo } from "../../../components/atoms/ProjectInfo";
import { CTA } from "@dts-stn/service-canada-design-system";
import { Heading } from "@dts-stn/service-canada-design-system";

export default function OasBenefitsEstimator(props) {
  const [pageData] = useState(props.pageData.item);
  const [filteredDictionary] = useState(
    props.dictionary.items.filter(
      (item) =>
        item.scId === "STARTED" ||
        item.scId === "ENDED" ||
        item.scId === "PROJECT-STAGE" ||
        item.scId === "SUMMARY"
    )
  );
  const stageDictionary = {
    en: {
      "gc:custom/decd-endc/project-stage/alpha": "Alpha",
      "gc:custom/decd-endc/project-stage/beta": "Beta",
    },
    fr: {
      "gc:custom/decd-endc/project-stage/alpha": "Alpha",
      "gc:custom/decd-endc/project-stage/beta": "Bêta",
    },
  };

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
        breadcrumbItems={[
          {
            text:
              props.locale === "en"
                ? pageData.scBreadcrumbParentPages[0].scTitleEn
                : pageData.scBreadcrumbParentPages[0].scTitleFr,
            link:
              props.locale === "en"
                ? pageData.scBreadcrumbParentPages[0].scPageNameEn
                : pageData.scBreadcrumbParentPages[0].scPageNameFr,
          },
        ]}
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
              ? pageData.scShortTitleEn
              : pageData.scShortTitleFr}
          </title>
          <meta
            name="description"
            content={
              props.locale === "en"
                ? pageData.scDescriptionEn.json[0].content[0].value
                : pageData.scDescriptionFr.json[0].content[0].value
            }
          />
          <meta name="author" content="Service Canada" />
          <link rel="icon" href="/favicon.ico" />
          <link
            rel="canonical"
            href={
              "https://alpha.service.canada.ca" +
              `${
                props.locale === "en"
                  ? pageData.scPageNameEn
                  : pageData.scPageNameFr
              }`
            }
          />
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
          <meta name="dcterms.issued" title="W3CDTF" content="2021-07-20" />

          <meta name="dcterms.modified" title="W3CDTF" content="2021-12-16" />
          <meta
            name="dcterms.description"
            content={
              props.locale === "en"
                ? pageData.scDescriptionEn.json[0].content[0].value
                : pageData.scDescriptionFr.json[0].content[0].value
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
              props.locale === "en"
                ? pageData.scShortTitleEn
                : pageData.scShortTitleFr
            }
          />
          <meta
            property="og:description"
            content={
              props.locale === "en"
                ? pageData.scFragments[0].scContentEn.json[0].content[0].value
                : pageData.scFragments[0].scContentFr.json[0].content[0].value
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
              props.locale === "en"
                ? pageData.scShortTitleEn
                : pageData.scShortTitleFr
            }
          />
          <meta name="twitter:creator" content="Service Canada" />
          <meta
            property="twitter:description"
            content={
              props.locale === "en"
                ? pageData.scFragments[0].scContentEn.json[1].content[0].value
                : pageData.scFragments[0].scContentFr.json[1].content[0].value
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

        <div className="layout-container">
          <section aria-labelledby="pageMainTitle">
            <div className="flex flex-col break-words lg:grid lg:grid-cols-2">
              <div className="col-span-2">
                <Heading
                  tabIndex="-1"
                  id="pageMainTitle"
                  title={
                    props.locale === "en"
                      ? pageData.scFragments[0].scContentEn.json[0].content[0]
                          .value
                      : pageData.scFragments[0].scContentFr.json[0].content[0]
                          .value
                  }
                />
              </div>
              <div className="hidden lg:grid row-span-2 row-start-2 col-start-2 p-0 mx-4">
                <div className="flex justify-center">
                  <div className="object-fill h-auto w-auto max-w-450px">
                    <img
                      src={
                        props.locale === "en"
                          ? pageData.scFragments[1].scImageEn._publishUrl
                          : pageData.scFragments[1].scImageFr._publishUrl
                      }
                      alt={
                        props.locale === "en"
                          ? pageData.scFragments[1].scImageAltTextEn
                          : pageData.scFragments[1].scImageAltTextFr
                      }
                      width={468}
                      height={462}
                    />
                  </div>
                </div>
              </div>
              <p className="row-start-2 font-body text-lg mb-4">
                {props.locale === "en"
                  ? pageData.scFragments[0].scContentEn.json[1].content[0].value
                  : pageData.scFragments[0].scContentFr.json[1].content[0]
                      .value}
              </p>
              <div className="row-start-3">
                <ProjectInfo
                  termStarted={
                    props.locale === "en"
                      ? filteredDictionary[2].scTermEn
                      : filteredDictionary[2].scTermFr
                  }
                  termStage={
                    props.locale === "en"
                      ? filteredDictionary[1].scTermEn
                      : filteredDictionary[1].scTermFr
                  }
                  termSummary={
                    props.locale === "en"
                      ? filteredDictionary[3].scTermEn
                      : filteredDictionary[3].scTermFr
                  }
                  dateStarted={
                    pageData.scFragments[0].scContentEn.json[2].content[0].value
                  }
                  term={
                    props.locale === "en"
                      ? pageData.scFragments[2].scContentEn.json[0].content[0]
                          .value
                      : pageData.scFragments[2].scContentFr.json[0].content[0]
                          .value
                  }
                  definition={
                    props.locale === "en"
                      ? pageData.scFragments[2].scContentEn.json[0].content[1]
                          .value
                      : pageData.scFragments[2].scContentFr.json[0].content[1]
                          .value
                  }
                  information={
                    props.locale === "en"
                      ? pageData.scFragments[2].scTitleEn
                      : pageData.scFragments[2].scTitleFr
                  }
                  stage={
                    props.locale === "en"
                      ? stageDictionary.en[pageData.scLabProjectStage]
                      : stageDictionary.fr[pageData.scLabProjectStage]
                  }
                  summary={
                    props.locale === "en"
                      ? pageData.scFragments[0].scContentEn.json[4].content[0]
                          .value
                      : pageData.scFragments[0].scContentFr.json[4].content[0]
                          .value
                  }
                />
              </div>
            </div>
          </section>
          <h2>
            {props.locale === "en"
              ? pageData.scFragments[0].scContentEn.json[5].content[0].value
              : pageData.scFragments[0].scContentFr.json[5].content[0].value}
          </h2>
          <p>
            {props.locale === "en"
              ? pageData.scFragments[0].scContentEn.json[6].content[0].value
              : pageData.scFragments[0].scContentFr.json[6].content[0].value}
          </p>
          <p className="my-4">
            {props.locale === "en"
              ? pageData.scFragments[0].scContentEn.json[7].content[0].value
              : pageData.scFragments[0].scContentFr.json[7].content[0].value}
          </p>
          <ul className="list-disc list-outside pl-2">
            <li>
              <p>
                {props.locale === "en"
                  ? pageData.scFragments[0].scContentEn.json[8].content[0]
                      .content[0].value
                  : pageData.scFragments[0].scContentFr.json[8].content[0]
                      .content[0].value}
              </p>
            </li>
            <li>
              <p>
                {props.locale === "en"
                  ? pageData.scFragments[0].scContentEn.json[8].content[1]
                      .content[0].value
                  : pageData.scFragments[0].scContentFr.json[8].content[1]
                      .content[0].value}
              </p>
            </li>
            <li>
              <p>
                {props.locale === "en"
                  ? pageData.scFragments[0].scContentEn.json[8].content[2]
                      .content[0].value
                  : pageData.scFragments[0].scContentFr.json[8].content[2]
                      .content[0].value}
              </p>
            </li>
          </ul>
          <h3 className="my-4 mt-8 text-[20px]">
            {props.locale === "en"
              ? pageData.scFragments[0].scContentEn.json[9].content[0].value
              : pageData.scFragments[0].scContentFr.json[9].content[0].value}
          </h3>
          <div className="grid md:flex">
            <ActionButton
              id="try-btn"
              style="primary"
              custom="mb-4 md:mb-0 md:mr-8"
              href={
                props.locale === "en"
                  ? pageData.scFragments[4].scDestinationURLEn
                  : pageData.scFragments[4].scDestinationURLFr
              }
              text={
                props.locale === "en"
                  ? pageData.scFragments[4].scTitleEn
                  : pageData.scFragments[4].scTitleFr
              }
              ariaExpanded={props.ariaExpanded}
            />
            <ActionButton
              id="feedback-btn-2"
              style="secondary"
              href={
                props.locale === "en"
                  ? pageData.scFragments[5].scDestinationURLEn
                  : pageData.scFragments[5].scDestinationURLFr
              }
              text={
                props.locale === "en"
                  ? pageData.scFragments[5].scTitleEn
                  : pageData.scFragments[5].scTitleFr
              }
              ariaExpanded={props.ariaExpanded}
            />
          </div>
          <h2>
            {props.locale === "en"
              ? pageData.scFragments[0].scContentEn.json[10].content[0].value
              : pageData.scFragments[0].scContentFr.json[10].content[0].value}
          </h2>
          <p className="my-4">
            {props.locale === "en"
              ? pageData.scFragments[0].scContentEn.json[11].content[0].value
              : pageData.scFragments[0].scContentFr.json[11].content[0].value}
          </p>
          <ul className="list-disc list-outside pl-2">
            <li>
              <p>
                {props.locale === "en"
                  ? pageData.scFragments[0].scContentEn.json[12].content[0]
                      .content[0].value
                  : pageData.scFragments[0].scContentFr.json[12].content[0]
                      .content[0].value}
              </p>
            </li>
            <li>
              <p>
                {props.locale === "en"
                  ? pageData.scFragments[0].scContentEn.json[12].content[1]
                      .content[0].value
                  : pageData.scFragments[0].scContentFr.json[12].content[1]
                      .content[0].value}
              </p>
            </li>
            <li>
              <p>
                {props.locale === "en"
                  ? pageData.scFragments[0].scContentEn.json[12].content[2]
                      .content[0].value
                  : pageData.scFragments[0].scContentFr.json[12].content[2]
                      .content[0].value}
              </p>
            </li>
          </ul>
          <p className="my-8">
            {props.locale === "en"
              ? pageData.scFragments[0].scContentEn.json[13].content[0].value
              : pageData.scFragments[0].scContentFr.json[13].content[0].value}
          </p>
          <p className="my-8">
            {props.locale === "en"
              ? pageData.scFragments[0].scContentEn.json[14].content[0].value
              : pageData.scFragments[0].scContentFr.json[14].content[0].value}
          </p>
          <h2>
            {props.locale === "en"
              ? pageData.scFragments[0].scContentEn.json[15].content[0].value
              : pageData.scFragments[0].scContentFr.json[15].content[0].value}
          </h2>
          <p className="mb-8">
            {props.locale === "en"
              ? pageData.scFragments[0].scContentEn.json[16].content[0].value
              : pageData.scFragments[0].scContentFr.json[16].content[0].value}
          </p>
          <div className="md:flex mb-12">
            <ActionButton
              id="feedback-btn-2"
              style="secondary"
              href={
                props.locale === "en"
                  ? pageData.scFragments[5].scDestinationURLEn
                  : pageData.scFragments[5].scDestinationURLFr
              }
              text={
                props.locale === "en"
                  ? pageData.scFragments[5].scTitleEn
                  : pageData.scFragments[5].scTitleFr
              }
              ariaExpanded={props.ariaExpanded}
            />
          </div>
        </div>

        <CTA
          heading={
            props.locale === "en"
              ? pageData.scFragments[6].scTitleEn
              : pageData.scFragments[6].scTitleFr
          }
          body={
            props.locale === "en"
              ? pageData.scFragments[6].scContentEn.json[0].content[0].value
              : pageData.scFragments[6].scContentFr.json[0].content[0].value
          }
          ButtonProps={{
            id: "cta-btn",
            text:
              props.locale === "en"
                ? pageData.scFragments[6].scLabsButton[0].scTitleEn
                : pageData.scFragments[6].scLabsButton[0].scTitleFr,
            href:
              props.locale === "en"
                ? pageData.scFragments[6].scLabsButton[0].scDestinationURLEn
                : pageData.scFragments[6].scLabsButton[0].scDestinationURLFr,
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

export const getStaticProps = async ({ locale }) => {
  // get page data from AEM
  const { data: pageData } = await aemServiceInstance.getFragment(
    "oasBenefitsEstimatorQuery"
  );
  // get dictionary
  const { data: dictionary } = await aemServiceInstance.getFragment(
    "dictionaryQuery"
  );

  return {
    props: {
      locale: locale,
      adobeAnalyticsUrl: process.env.ADOBE_ANALYTICS_URL,
      pageData: pageData.scLabsPagev1ByPath,
      dictionary: dictionary.dictionaryV1List,
      ...(await serverSideTranslations(locale, ["common"])),
    },
    // revalidate: 10,
  };
};
