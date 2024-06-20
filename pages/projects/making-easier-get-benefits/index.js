import Head from "next/head";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { Layout } from "../../../components/organisms/Layout";
import { useEffect, useState } from "react";
import aemServiceInstance from "../../../services/aemServiceInstance";
import { ProjectInfo } from "../../../components/atoms/ProjectInfo";
import Card from "../../../components/molecules/Card";
import { createBreadcrumbs } from "../../../lib/utils/createBreadcrumbs";
import { Heading } from "../../../components/molecules/Heading";
import TextRender from "../../../components/text_node_renderer/TextRender";
import Image from "next/image";
import stageDictionary from "../../../lib/utils/stageDictionary";
import { ExploreUpdates } from "../../../components/organisms/ExploreUpdates";
import { ExploreProjects } from "../../../components/organisms/ExploreProjects";
import { shuffle } from "../../../lib/utils/shuffle";
import { filterItems } from "../../../lib/utils/filterItems";
import { sortUpdatesByDate } from "../../../lib/utils/sortUpdatesByDate";

export default function IntegratedChannelStrategyPage(props) {
  const [pageData] = useState(props.pageData.item);
  const [updatesData] = useState(props.updatesData);
  const [allProjects] = useState(props.allProjects);
  const [filteredDictionary] = useState(
    props.dictionary.items.filter(
      (item) =>
        item.scId === "STARTED" ||
        item.scId === "ENDED" ||
        item.scId === "PROJECT-STAGE" ||
        item.scId === "SUMMARY"
    )
  );

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

        <div className="layout-container mb-24">
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
                      quality={100}
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
          <div className="grid grid-cols-12">
            <div className="col-span-12 lg:col-span-7 mt-[48px]">
              <TextRender
                data={
                  props.locale === "en"
                    ? pageData.scFragments[0].scContentEn.json.slice(5)
                    : pageData.scFragments[0].scContentFr.json.slice(5)
                }
                excludeH1={true}
              />
            </div>
          </div>
        </div>
        {props.updatesData.length !== 0 ? (
          <ExploreUpdates
            locale={props.locale}
            updatesData={sortUpdatesByDate(updatesData)}
            dictionary={props.dictionary}
            heading={
              "Digital standards playbook project updates"
              // props.locale === "en"
              //   ? pageData.scFragments[4].scContentEn.json[0].content[0].value
              //   : pageData.scFragments[4].scContentFr.json[0].content[0].value
            }
            linkLabel={
              "See all updates about this project"
              // props.locale === "en"
              //   ? pageData.scFragments[5].scContentEn.json[0].content[0].value
              //   : pageData.scFragments[5].scContentFr.json[0].content[0].value
            }
            href={
              ""
              // props.locale === "en"
              //   ? pageData.scFragments[5].scContentEn.json[0].content[0].data.href
              //   : pageData.scFragments[5].scContentFr.json[0].content[0].data.href
            }
          />
        ) : null}
        <ExploreProjects
          locale={props.locale}
          projects={filterItems(allProjects, pageData.scId)}
        />
      </Layout>
    </>
  );
}

export const getStaticProps = async ({ locale }) => {
  // get page data from AEM
  const { data: pageData } = await aemServiceInstance.getFragment(
    "integratedChannelStrategyQuery"
  );
  // get dictionary
  const { data: dictionary } = await aemServiceInstance.getFragment(
    "dictionaryQuery"
  );
  // get all projects data
  const { data: allProjects } = await aemServiceInstance.getFragment(
    "projectQuery"
  );

  return {
    props: {
      locale: locale,
      adobeAnalyticsUrl: process.env.ADOBE_ANALYTICS_URL ?? null,
      pageData: pageData.sclabsPageV1ByPath,
      updatesData: pageData.sclabsPageV1ByPath.item.scLabProjectUpdates,
      dictionary: dictionary.dictionaryV1List,
      allProjects: shuffle(allProjects.sclabsPageV1List.items),
      ...(await serverSideTranslations(locale, ["common"])),
    },
    revalidate: process.env.ISR_ENABLED === "true" ? 10 : false,
  };
};
