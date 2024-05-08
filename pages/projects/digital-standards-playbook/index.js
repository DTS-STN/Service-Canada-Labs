import Head from "next/head";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { Layout } from "../../../components/organisms/Layout";
import { useEffect, useState } from "react";
import aemServiceInstance from "../../../services/aemServiceInstance";
import { ProjectInfo } from "../../../components/atoms/ProjectInfo";
import Card from "../../../components/molecules/Card";
import { createBreadcrumbs } from "../../../lib/utils/createBreadcrumbs";
import { Heading } from "../../../components/molecules/Heading";
import { ActionButton } from "../../../components/atoms/ActionButton";
import Image from "next/image";
import stageDictionary from "../../../lib/utils/stageDictionary";

export default function DigitalStandardsPlaybookPage(props) {
  const [pageData] = useState(props.pageData.item);
  const [updatesData] = useState(props.updatesData);

  const filteredDictionary = props.dictionary?.items?.filter(
    (item) =>
      item.scId === "STARTED" ||
      item.scId === "ENDED" ||
      item.scId === "PROJECT-STAGE" ||
      item.scId === "SUMMARY"
  );

  const displayProjectUpdates = updatesData.map((update) => (
    <li key={update.scId} className="list-none ml-0 col-span-12 lg:col-span-4">
      <Card
        showImage
        imgSrc={
          props.locale === "en"
            ? `https://www.canada.ca${update.scSocialMediaImageEn?._path}`
            : `https://www.canada.ca${update.scSocialMediaImageFr?._path}`
        }
        imgAlt={
          props.locale === "en"
            ? update.scSocialMediaImageAltTextEn
            : update.scSocialMediaImageAltTextFr
        }
        imgHeight={update.scSocialMediaImageEn.height}
        imgWidth={update.scSocialMediaImageEn.width}
        title={props.locale === "en" ? update.scTitleEn : update.scTitleFr}
        href={props.locale === "en" ? update.scPageNameEn : update.scPageNameFr}
        description={`${
          props.locale === "en"
            ? props.dictionary.items[9].scTermEn
            : props.dictionary.items[9].scTermFr
        } ${update.scDateModifiedOverwrite}`}
      />
    </li>
  ));

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
        dateModifiedOverride={pageData.scDateModifiedOverwrite ?? "2023-11-24"}
        breadcrumbItems={createBreadcrumbs(
          pageData.scBreadcrumbParentPages,
          props.locale
        )}
      >
        <Head>
          {/* Primary HTML Meta Tags */}
          <title>
            {props.locale === "en"
              ? `${pageData.scTitleEn} - Service Canada Labs`
              : `${pageData.scTitleFr} - Laboratoires de Service Canada`}
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
              props.locale === "en" ? pageData.scTitleEn : pageData.scTitleFr
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
              props.locale === "en" ? pageData.scTitleEn : pageData.scTitleFr
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
                      ? pageData.scTitleEn
                      : pageData.scTitleFr
                  }
                />
              </div>
              <div className="hidden lg:grid row-span-2 row-start-2 col-start-2 p-0 mx-4">
                <div className="flex justify-center">
                  <div className="object-fill h-auto w-auto max-w-450px">
                    <Image
                      src={
                        props.locale === "en"
                          ? pageData.scFragments[2].scImageEn._publishUrl
                          : pageData.scFragments[2].scImageFr._publishUrl
                      }
                      alt={
                        (props.locale === "en"
                          ? pageData.scFragments[2].scImageAltTextEn
                          : pageData.scFragments[2].scImageAltTextFr) ?? ""
                      }
                      height={pageData.scFragments[2].scImageEn.height}
                      width={pageData.scFragments[2].scImageEn.width}
                      priority
                      sizes="33vw"
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
                  locale={props.locale}
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
                      ? pageData.scFragments[1].scContentEn.json[0].content[0]
                          .value
                      : pageData.scFragments[1].scContentFr.json[0].content[0]
                          .value
                  }
                  definition={
                    props.locale === "en"
                      ? pageData.scFragments[1].scContentEn.json[0].content[1]
                          .value
                      : pageData.scFragments[1].scContentFr.json[0].content[1]
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
          <section id="pageMainContent">
            <div className="grid grid-cols-12">
              <h2 className="col-span-12">
                {props.locale === "en"
                  ? pageData.scFragments[0].scContentEn.json[5].content[0].value
                  : pageData.scFragments[0].scContentFr.json[5].content[0]
                      .value}
              </h2>
              <p className="col-span-12 xl:col-span-8">
                {props.locale === "en"
                  ? pageData.scFragments[0].scContentEn.json[6].content[0].value
                  : pageData.scFragments[0].scContentFr.json[6].content[0]
                      .value}
              </p>
              <p className="col-span-12 xl:col-span-8">
                {props.locale === "en"
                  ? pageData.scFragments[0].scContentEn.json[7].content[0].value
                  : pageData.scFragments[0].scContentFr.json[7].content[0]
                      .value}
              </p>

              <h2 className="col-span-12">
                {props.locale === "en"
                  ? pageData.scFragments[0].scContentEn.json[8].content[0].value
                  : pageData.scFragments[0].scContentFr.json[8].content[0]
                      .value}
              </h2>
              <p className="col-span-12 xl:col-span-8">
                {props.locale === "en"
                  ? pageData.scFragments[0].scContentEn.json[9].content[0].value
                  : pageData.scFragments[0].scContentFr.json[9].content[0]
                      .value}
                <a
                  className="underline underline-offset-[6px]"
                  href={
                    props.locale === "en"
                      ? pageData.scFragments[0].scContentEn.json[9].content[1]
                          .data.href
                      : pageData.scFragments[0].scContentFr.json[9].content[1]
                          .data.href
                  }
                >
                  {props.locale === "en"
                    ? pageData.scFragments[0].scContentEn.json[9].content[1]
                        .value
                    : pageData.scFragments[0].scContentFr.json[9].content[1]
                        .value}
                </a>
                {props.locale === "en"
                  ? pageData.scFragments[0].scContentEn.json[9].content[2].value
                  : pageData.scFragments[0].scContentFr.json[9].content[2]
                      .value}
              </p>
              <p className="col-span-12 xl:col-span-8">
                {props.locale === "en"
                  ? pageData.scFragments[0].scContentEn.json[10].content[0]
                      .value
                  : pageData.scFragments[0].scContentFr.json[10].content[0]
                      .value}
              </p>

              <ActionButton
                id="take-survey"
                style="primary"
                custom="col-span-12 my-6"
                href={
                  props.locale === "en"
                    ? pageData.scFragments[3].scDestinationURLEn
                    : pageData.scFragments[3].scDestinationURLFr
                }
                text={
                  props.locale === "en"
                    ? pageData.scFragments[3].scTitleEn
                    : pageData.scFragments[3].scTitleFr
                }
                ariaExpanded={props.ariaExpanded}
              />

              <p className="col-span-12 xl:col-span-8">
                {props.locale === "en"
                  ? pageData.scFragments[4].scContentEn.json[0].content[0].value
                  : pageData.scFragments[4].scContentFr.json[0].content[0]
                      .value}
                <a
                  className="underline underline-offset-[6px]"
                  href={
                    props.locale === "en"
                      ? pageData.scFragments[4].scContentEn.json[0].content[1]
                          .data.href
                      : pageData.scFragments[4].scContentFr.json[0].content[1]
                          .data.href
                  }
                >
                  {props.locale === "en"
                    ? pageData.scFragments[4].scContentEn.json[0].content[1]
                        .value
                    : pageData.scFragments[4].scContentFr.json[0].content[1]
                        .value}
                </a>
                {props.locale === "en"
                  ? pageData.scFragments[4].scContentEn.json[0].content[2].value
                  : pageData.scFragments[4].scContentFr.json[0].content[2]
                      .value}
              </p>
              <p className="col-span-12 xl:col-span-8">
                {props.locale === "en"
                  ? pageData.scFragments[4].scContentEn.json[1].content[0].value
                  : pageData.scFragments[4].scContentFr.json[1].content[0]
                      .value}
              </p>
            </div>
          </section>
          <section id="project-updates">
            <h2>
              {props.locale === "en"
                ? props.dictionary.items[11].scTermEn
                : props.dictionary.items[11].scTermFr}
            </h2>
            <ul className="grid lg:grid-cols-12 gap-x-4 lg:gap-y-12 list-none ml-0 mb-12">
              {displayProjectUpdates}
            </ul>
          </section>
        </div>
      </Layout>
    </>
  );
}

export const getStaticProps = async ({ locale }) => {
  // get page data from AEM
  const { data: pageData } = await aemServiceInstance.getFragment(
    "getDigitalStandardsPlaybookPage"
  );
  // Get updates/article data
  const { data: updatesData } = await aemServiceInstance.getFragment(
    "getDigitalStandardsPlaybookArticles"
  );
  // get dictionary
  const { data: dictionary } = await aemServiceInstance.getFragment(
    "dictionaryQuery"
  );

  return {
    props: {
      locale: locale,
      adobeAnalyticsUrl: process.env.ADOBE_ANALYTICS_URL ?? null,
      pageData: pageData.sclabsPageV1ByPath,
      updatesData: updatesData.sclabsPageV1List.items,
      dictionary: dictionary.dictionaryV1List,
      ...(await serverSideTranslations(locale, ["common"])),
    },
    revalidate: process.env.ISR_ENABLED === "true" ? 10 : false,
  };
};
