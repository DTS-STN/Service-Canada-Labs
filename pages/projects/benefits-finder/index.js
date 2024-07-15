import Head from "next/head";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { Layout } from "../../../components/organisms/Layout";
import { useEffect, useState } from "react";
import aemServiceInstance from "../../../services/aemServiceInstance";
import { ProjectInfo } from "../../../components/atoms/ProjectInfo";
import Card from "../../../components/molecules/Card";
import { createBreadcrumbs } from "../../../lib/utils/createBreadcrumbs";
import { Heading } from "../../../components/molecules/Heading";
import Image from "next/image";
import stageDictionary from "../../../lib/utils/stageDictionary";
import { sortUpdatesByDate } from "../../../lib/utils/sortUpdatesByDate";
import FragmentRender from "../../../components/fragment_renderer/FragmentRender";
import { getJsonContent } from "../../../lib/utils/getJsonContent";
import { getFragment } from "../../../lib/utils/getFragment";

export default function BenefitsFinderOverview(props) {
  const [pageData] = useState(props.pageData.item);
  const updatesData = sortUpdatesByDate(props.updatesData);
  const [filteredDictionary] = useState(
    props.dictionary.items.filter(
      (item) =>
        item.scId === "STARTED" ||
        item.scId === "ENDED" ||
        item.scId === "PROJECT-STAGE" ||
        item.scId === "SUMMARY"
    )
  );
  const locale = props.locale;
  const en = locale === "en";
  const fragments = pageData.scFragments;
  const scDescription = en
    ? pageData.scDescriptionEn.json
    : pageData.scDescriptionFr.json;
  const title = en ? pageData.scTitleEn : pageData.scTitleFr;
  const pageName = en ? pageData.scPageNameEn : pageData.scPageNameFr;
  const summary = en
    ? pageData.scLabProjectSummaryEn.json
    : pageData.scLabProjectSummaryFr.json;
  const publishUrl = en
    ? getFragment(fragments, 2, "scImageEn", "_publishUrl")
    : getFragment(fragments, 2, "scImageFr", "_publishUrl");
  const imageAltText = en
    ? getFragment(fragments, 2, "scImageAltTextEn")
    : getFragment(fragments, 2, "scImageAltTextFr");
  const term = en
    ? getFragment(fragments, 0, "scContentEn", "json", 0, 0)
    : getFragment(fragments, 0, "scContentFr", "json", 0, 0);
  const definition = en
    ? getFragment(fragments, 1, "scContentEn", "json", 0, 1)
    : getFragment(fragments, 1, "scContentFr", "json", 0, 1);

  const displayProjectUpdates = updatesData.map((update) => (
    <li key={update.scId} className="list-none ml-0 col-span-12 lg:col-span-4">
      <Card
        showImage
        imgSrc={
          en
            ? `https://www.canada.ca${update.scSocialMediaImageEn?._path}`
            : `https://www.canada.ca${update.scSocialMediaImageFr?._path}`
        }
        imgAlt={
          en
            ? update.scSocialMediaImageAltTextEn
            : update.scSocialMediaImageAltTextFr
        }
        imgHeight={update.scSocialMediaImageEn.height}
        imgWidth={update.scSocialMediaImageEn.width}
        title={en ? update.scTitleEn : update.scTitleFr}
        href={en ? update.scPageNameEn : update.scPageNameFr}
        description={`${
          en
            ? props.dictionary.items[13].scTermEn
            : props.dictionary.items[13].scTermFr
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
        locale={locale}
        langUrl={pageName}
        dateModifiedOverride={pageData.scDateModifiedOverwrite}
        breadcrumbItems={createBreadcrumbs(
          pageData.scBreadcrumbParentPages,
          locale
        )}
      >
        <Head>
          {/* Primary HTML Meta Tags */}
          <title>{title}</title>
          <meta
            name="description"
            content={getJsonContent(scDescription, 0, 0)}
          />
          <meta name="author" content="Service Canada" />
          <link rel="icon" href="/favicon.ico" />
          <link
            rel="canonical"
            href={"https://alpha.service.canada.ca" + `${pageName}`}
          />
          <link rel="schema.dcterms" href="http://purl.org/dc/terms/" />
          <meta
            name="keywords"
            content={en ? pageData.scKeywordsEn : pageData.scKeywordsFr}
          />

          {/* DCMI Meta Tags */}
          <meta name="dcterms.title" content={title} />
          <meta
            name="dcterms.language"
            content={en ? "eng" : "fra"}
            title="ISO639-2/T"
          />
          <meta
            name="dcterms.creator"
            content={
              en
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
            content={getJsonContent(scDescription, 0, 0)}
          />
          <meta
            name="dcterms.subject"
            title="gccore"
            content={pageData.scSubject}
          />
          <meta name="dcterms.spatial" content="Canada" />

          {/* Open Graph / Facebook */}
          <meta property="og:type" content="website" />
          <meta property="og:locale" content={locale} />
          <meta
            property="og:url"
            content={"https://alpha.service.canada.ca" + `${pageName}`}
          />
          <meta property="og:title" content={title} />
          <meta
            property="og:description"
            content={getJsonContent(scDescription, 0, 0)}
          />
          <meta
            property="og:image"
            content={getFragment(fragments, 2, "scImageEn", "_publishUrl")}
          />
          <meta
            property="og:image:alt"
            content={
              en
                ? getFragment(fragments, 2, "scImageAltTextEn")
                : getFragment(fragments, 2, "scImageAltTextFr")
            }
          />

          {/* Twitter */}
          <meta property="twitter:card" content="summary_large_image" />
          <meta
            property="twitter:url"
            content={"https://alpha.service.canada.ca" + `${pageName}`}
          />
          <meta property="twitter:title" content={title} />
          <meta name="twitter:creator" content="Service Canada" />
          <meta
            property="twitter:description"
            content={getJsonContent(scDescription, 0, 0)}
          />
          <meta property="twitter:image" content={publishUrl} />
          <meta property="twitter:image:alt" content={imageAltText} />
        </Head>

        <div className="layout-container">
          <section aria-labelledby="pageMainTitle">
            <div className="flex flex-col break-words lg:grid lg:grid-cols-2">
              <div className="col-span-2">
                <Heading tabIndex="-1" id="pageMainTitle" title={title} />
              </div>
              <div className="hidden lg:grid row-span-2 row-start-2 col-start-2 p-0 mx-4">
                <div className="flex justify-center">
                  <div className="object-fill max-w-350px">
                    <Image
                      src={publishUrl}
                      alt={imageAltText}
                      width={getFragment(fragments, 2, "scImageEn", "width")}
                      height={getFragment(fragments, 2, "scImageEn", "height")}
                      priority
                      sizes="33vw"
                      quality={100}
                    />
                  </div>
                </div>
              </div>
              <p className="row-start-2 font-body text-lg mb-4">
                {en
                  ? getFragment(fragments, 0, "scContentEn", "json", 1, 0)
                  : getFragment(fragments, 0, "scContentFr", "json", 1, 0)}
              </p>
              <div className="row-start-3">
                <ProjectInfo
                  locale={locale}
                  termStarted={
                    en
                      ? filteredDictionary[2].scTermEn
                      : filteredDictionary[2].scTermFr
                  }
                  termStage={
                    en
                      ? filteredDictionary[1].scTermEn
                      : filteredDictionary[1].scTermFr
                  }
                  termSummary={
                    en
                      ? filteredDictionary[3].scTermEn
                      : filteredDictionary[3].scTermFr
                  }
                  dateStarted={getFragment(
                    fragments,
                    0,
                    "scContentEn",
                    "json",
                    2,
                    0
                  )}
                  term={term + " "}
                  definition={definition}
                  information={
                    en
                      ? getFragment(fragments, 1, "scTitleEn")
                      : getFragment(fragments, 1, "scTitleFr")
                  }
                  stage={
                    en
                      ? stageDictionary.en[pageData.scLabProjectStage]
                      : stageDictionary.fr[pageData.scLabProjectStage]
                  }
                  summary={getJsonContent(summary, 0, 0)}
                />
              </div>
              <strong className="font-body text-p pt-8">
                {en
                  ? getFragment(fragments, 0, "scContentEn", "json", 5, 0)
                  : getFragment(fragments, 0, "scContentFr", "json", 5, 0)}
              </strong>
            </div>
          </section>
        </div>

        <FragmentRender
          fragments={pageData.scFragments.slice(3)}
          locale={locale}
        />
        <div className="layout-container">
          {updatesData.length === 0 ? null : (
            <section id="projectUpdates">
              <h2>{en ? "Project updates" : "Mises à jour du projet"}</h2>
              <ul className="grid lg:grid-cols-12 gap-x-4 gap-y-4 lg:gap-y-12 list-none ml-0 mb-12">
                {displayProjectUpdates}
              </ul>
            </section>
          )}
        </div>
      </Layout>
    </>
  );
}

export const getStaticProps = async ({ locale }) => {
  // get page data from AEM
  const { data: pageData } = await aemServiceInstance.getFragment(
    "benefitsFinderQuery"
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
      updatesData: pageData.sclabsPageV1ByPath.item.scLabProjectUpdates,
      dictionary: dictionary.dictionaryV1List,
      ...(await serverSideTranslations(locale, ["common"])),
    },
    revalidate: process.env.ISR_ENABLED === "true" ? 10 : false,
  };
};
