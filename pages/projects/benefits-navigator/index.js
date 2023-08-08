import Head from "next/head";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { Layout } from "../../../components/organisms/Layout";
import { ActionButton } from "../../../components//atoms/ActionButton";
import { useEffect, useState } from "react";
import aemServiceInstance from "../../../services/aemServiceInstance";
import { ProjectInfo } from "../../../components/atoms/ProjectInfo";
import { CTA, Collapse } from "@dts-stn/service-canada-design-system";
import { Heading } from "@dts-stn/service-canada-design-system";
import Card from "../../../components/molecules/Card";
import { createBreadcrumbs } from "../../../lib/utils/createBreadcrumbs";

export default function OasBenefitsEstimator(props) {
  const [pageData] = useState(props.pageData.item);
  const [updatesData] = useState(props.updatesData);
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

  function generateReactElements(json) {
    const elements = [];

    for (const item of json) {
      if (item.nodeType === "paragraph") {
        elements.push(
          <p key={elements.length}>{generateReactElements(item.content)}</p>
        );
      } else if (item.nodeType === "unordered-list") {
        const listItems = item.content.map((listItem, index) => (
          <li key={index} className="my-0">
            {generateReactElements(listItem.content)}
          </li>
        ));
        elements.push(
          <ul key={elements.length} className="mb-0 ml-6">
            {listItems}
          </ul>
        );
      } else if (item.nodeType === "ordered-list") {
        const listItems = item.content.map((listItem, index) => (
          <li key={index} className="my-0">
            {generateReactElements(listItem.content)}
          </li>
        ));
        elements.push(
          <ol key={elements.length} className="mb-0 ml-6">
            {listItems}
          </ol>
        );
      } else if (item.nodeType === "list-item") {
        elements.push(
          <li key={elements.length} className="my-0">
            {generateReactElements(item.content)}
          </li>
        );
      } else if (item.nodeType === "text") {
        elements.push(item.value);
      }
    }

    return elements;
  }

  const displayProjectUpdates = updatesData.map((update) => (
    <li key={update.scId} className="list-none ml-0 col-span-12 lg:col-span-4">
      <Card
        showImage
        imgSrc={
          props.locale === "en"
            ? `https://www.canada.ca${update.scSocialMediaImageEn._path}`
            : `https://www.canada.ca${update.scSocialMediaImageFr._path}`
        }
        imgAlt={
          props.locale === "en"
            ? update.scSocialMediaImageAltTextEn
            : update.scSocialMediaImageAltTextFr
        }
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
                ? pageData.scDescriptionEn.json[0].content[0].value
                : pageData.scDescriptionFr.json[0].content[0].value
            }
          />
          <meta
            property="og:image"
            content={pageData.scFragments[0].scImageEn._publishUrl}
          />
          <meta
            property="og:image:alt"
            content={
              props.locale === "en"
                ? pageData.scFragments[0].scImageAltTextEn
                : pageData.scFragments[0].scImageAltTextFr
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
                ? pageData.scDescriptionEn.json[0].content[0].value
                : pageData.scDescriptionFr.json[0].content[0].value
            }
          />
          <meta
            property="twitter:image"
            content={pageData.scFragments[0].scImageEn._publishUrl}
          />
          <meta
            property="twitter:image:alt"
            content={
              props.locale === "en"
                ? pageData.scFragments[0].scImageAltTextEn
                : pageData.scFragments[0].scImageAltTextFr
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
                      ? pageData.scFragments[2].scContentEn.json[0].content[0]
                          .value
                      : pageData.scFragments[2].scContentFr.json[0].content[0]
                          .value
                  }
                />
              </div>
              <div className="hidden lg:grid row-span-2 row-start-2 col-start-2 p-0 mx-4">
                <div className="flex justify-center">
                  <div className="object-fill max-w-350px">
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
              <p className="row-start-2 font-body text-lg mb-4">
                {props.locale === "en"
                  ? pageData.scFragments[2].scContentEn.json[1].content[0].value
                  : pageData.scFragments[2].scContentFr.json[1].content[0]
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
                    pageData.scFragments[2].scContentEn.json[2].content[0].value
                  }
                  term={
                    props.locale === "en"
                      ? pageData.scFragments[1].scContentEn.json[0].content[0]
                          .value + " "
                      : pageData.scFragments[1].scContentFr.json[0].content[0]
                          .value + " "
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
                      ? pageData.scFragments[1].scTitleEn
                      : pageData.scFragments[1].scTitleFr
                  }
                  stage={
                    props.locale === "en"
                      ? stageDictionary.en[pageData.scLabProjectStage]
                      : stageDictionary.fr[pageData.scLabProjectStage]
                  }
                  summary={
                    props.locale === "en"
                      ? pageData.scFragments[2].scContentEn.json[4].content[0]
                          .value
                      : pageData.scFragments[2].scContentFr.json[4].content[0]
                          .value
                  }
                />
              </div>
            </div>
          </section>
          <div className="grid grid-cols-12">
            <h2 className="col-span-12">
              {props.locale === "en"
                ? pageData.scFragments[3].scContentEn.json[0].content[0].value
                : pageData.scFragments[3].scContentFr.json[0].content[0].value}
            </h2>
            <p className="col-span-12 xl:col-span-8">
              {props.locale === "en"
                ? pageData.scFragments[3].scContentEn.json[1].content[0].value
                : pageData.scFragments[3].scContentFr.json[1].content[0].value}
            </p>
            <p className="col-span-12 xl:col-span-8">
              {props.locale === "en"
                ? pageData.scFragments[3].scContentEn.json[2].content[0].value
                : pageData.scFragments[3].scContentFr.json[2].content[0].value}
            </p>
            <ul className="col-span-12 xl:col-span-8">
              <li>
                {props.locale === "en"
                  ? pageData.scFragments[3].scContentEn.json[3].content[0]
                      .content[0].value
                  : pageData.scFragments[3].scContentFr.json[3].content[0]
                      .content[0].value}
              </li>
              <li>
                {props.locale === "en"
                  ? pageData.scFragments[3].scContentEn.json[3].content[1]
                      .content[0].value
                  : pageData.scFragments[3].scContentFr.json[3].content[1]
                      .content[0].value}
              </li>
              <li>
                {props.locale === "en"
                  ? pageData.scFragments[3].scContentEn.json[3].content[2]
                      .content[0].value
                  : pageData.scFragments[3].scContentFr.json[3].content[2]
                      .content[0].value}
              </li>
            </ul>
            <p className="col-span-12 xl:col-span-8">
              {props.locale === "en"
                ? pageData.scFragments[3].scContentEn.json[4].content[0].value
                : pageData.scFragments[3].scContentFr.json[4].content[0].value}
            </p>
            <div id="feature-section" className="col-span-12">
              <h2 className="col-span-12">
                {props.locale === "en"
                  ? pageData.scFragments[4].scContentEn.json[0].content[0].value
                  : pageData.scFragments[4].scContentFr.json[0].content[0]
                      .value}
              </h2>
              <div id="feature-1" className="grid grid-cols-12 gap-x-6 mb-9">
                <div className="mb-6 object-fill col-span-12 row-start-1 xl:row-start-1 xl:col-span-8">
                  <img
                    src={
                      props.locale === "en"
                        ? pageData.scFragments[4].scFragments[0].scFragments[0]
                            .scImageEn._publishUrl
                        : pageData.scFragments[4].scFragments[0].scFragments[0]
                            .scImageFr._publishUrl
                    }
                    alt={
                      props.locale === "en"
                        ? pageData.scFragments[4].scFragments[0].scFragments[0]
                            .scImageAltTextEn
                        : pageData.scFragments[4].scFragments[0].scFragments[0]
                            .scImageAltTextFr
                    }
                    className="w-full"
                  />
                </div>
                <div className="col-span-12 row-start-3 xl:col-span-4 xl:row-start-1">
                  <div className="py-4 pl-4 border-l-4 border-multi-blue-blue60f">
                    <h3 className="mb-2">
                      {props.locale === "en"
                        ? pageData.scFragments[4].scFragments[0].scContentEn
                            .json[0].content[0].value
                        : pageData.scFragments[4].scFragments[0].scContentFr
                            .json[0].content[0].value}
                    </h3>
                    <p>
                      {props.locale === "en"
                        ? pageData.scFragments[4].scFragments[0].scContentEn
                            .json[1].content[0].value
                        : pageData.scFragments[4].scFragments[0].scContentFr
                            .json[1].content[0].value}
                    </p>
                    <ul>
                      <li>
                        {props.locale === "en"
                          ? pageData.scFragments[4].scFragments[0].scContentEn
                              .json[2].content[0].content[0].value
                          : pageData.scFragments[4].scFragments[0].scContentFr
                              .json[2].content[0].content[0].value}
                      </li>
                      <li>
                        {props.locale === "en"
                          ? pageData.scFragments[4].scFragments[0].scContentEn
                              .json[2].content[1].content[0].value
                          : pageData.scFragments[4].scFragments[0].scContentFr
                              .json[2].content[1].content[0].value}
                      </li>
                      <li>
                        {props.locale === "en"
                          ? pageData.scFragments[4].scFragments[0].scContentEn
                              .json[2].content[2].content[0].value
                          : pageData.scFragments[4].scFragments[0].scContentFr
                              .json[2].content[2].content[0].value}
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="mb-6 col-span-12 xl:col-span-8 row-start-2 xl:row-start-2">
                  <Collapse
                    id="image-text-collapse-1"
                    title={
                      props.locale === "en"
                        ? pageData.scFragments[4].scFragments[0].scFragments[0]
                            .scLongDescHeadingEn
                        : pageData.scFragments[4].scFragments[0].scFragments[0]
                            .scLongDescHeadingFr
                    }
                    children={generateReactElements(
                      props.locale === "en"
                        ? pageData.scFragments[4].scFragments[0].scFragments[0]
                            .scLongDescEn.json
                        : pageData.scFragments[4].scFragments[0].scFragments[0]
                            .scLongDescFr.json
                    )}
                  />
                </div>
              </div>
              <div id="feature-2" className="grid grid-cols-12 gap-x-6 mb-9">
                <div className="mb-6 object-fill col-span-12 row-start-1 xl:row-start-1 xl:col-span-8">
                  <img
                    src={
                      props.locale === "en"
                        ? pageData.scFragments[4].scFragments[1].scFragments[0]
                            .scImageEn._publishUrl
                        : pageData.scFragments[4].scFragments[1].scFragments[0]
                            .scImageFr._publishUrl
                    }
                    alt={
                      props.locale === "en"
                        ? pageData.scFragments[4].scFragments[1].scFragments[0]
                            .scImageAltTextEn
                        : pageData.scFragments[4].scFragments[1].scFragments[0]
                            .scImageAltTextFr
                    }
                    className="w-full"
                  />
                </div>
                <div className="col-span-12 row-start-3 xl:col-span-4 xl:row-start-1">
                  <div className="p-4 border-l-4 border-multi-blue-blue60f">
                    <h3 className="mb-2">
                      {props.locale === "en"
                        ? pageData.scFragments[4].scFragments[1].scContentEn
                            .json[0].content[0].value
                        : pageData.scFragments[4].scFragments[1].scContentFr
                            .json[0].content[0].value}
                    </h3>
                    <p>
                      {props.locale === "en"
                        ? pageData.scFragments[4].scFragments[1].scContentEn
                            .json[1].content[0].value
                        : pageData.scFragments[4].scFragments[1].scContentFr
                            .json[1].content[0].value}
                    </p>
                    <ul>
                      <li>
                        {props.locale === "en"
                          ? pageData.scFragments[4].scFragments[1].scContentEn
                              .json[2].content[0].content[0].value
                          : pageData.scFragments[4].scFragments[1].scContentFr
                              .json[2].content[0].content[0].value}
                      </li>
                      <li>
                        {props.locale === "en"
                          ? pageData.scFragments[4].scFragments[1].scContentEn
                              .json[2].content[1].content[0].value
                          : pageData.scFragments[4].scFragments[1].scContentFr
                              .json[2].content[1].content[0].value}
                      </li>
                      <li>
                        {props.locale === "en"
                          ? pageData.scFragments[4].scFragments[1].scContentEn
                              .json[2].content[2].content[0].value
                          : pageData.scFragments[4].scFragments[1].scContentFr
                              .json[2].content[2].content[0].value}
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="mb-6 col-span-12 xl:col-span-8 row-start-2 xl:row-start-2">
                  <Collapse
                    id="image-text-collapse-2"
                    title={
                      props.locale === "en"
                        ? pageData.scFragments[4].scFragments[1].scFragments[0]
                            .scLongDescHeadingEn
                        : pageData.scFragments[4].scFragments[1].scFragments[0]
                            .scLongDescHeadingFr
                    }
                    children={generateReactElements(
                      props.locale === "en"
                        ? pageData.scFragments[4].scFragments[1].scFragments[0]
                            .scLongDescEn.json
                        : pageData.scFragments[4].scFragments[1].scFragments[0]
                            .scLongDescFr.json
                    )}
                  />
                </div>
              </div>
              <div id="feature-3" className="grid grid-cols-12 gap-x-6">
                <div className="mb-6 object-fill col-span-12 row-start-1 xl:row-start-1 xl:col-span-8">
                  <img
                    src={
                      props.locale === "en"
                        ? pageData.scFragments[4].scFragments[2].scFragments[0]
                            .scImageEn._publishUrl
                        : pageData.scFragments[4].scFragments[2].scFragments[0]
                            .scImageFr._publishUrl
                    }
                    alt={
                      props.locale === "en"
                        ? pageData.scFragments[4].scFragments[2].scFragments[0]
                            .scImageAltTextEn
                        : pageData.scFragments[4].scFragments[2].scFragments[0]
                            .scImageAltTextFr
                    }
                    className="w-full"
                  />
                </div>
                <div className="col-span-12 row-start-3 xl:col-span-4 xl:row-start-1">
                  <div className="p-4 border-l-4 border-multi-blue-blue60f">
                    <h3 className="mb-2">
                      {props.locale === "en"
                        ? pageData.scFragments[4].scFragments[2].scContentEn
                            .json[0].content[0].value
                        : pageData.scFragments[4].scFragments[2].scContentFr
                            .json[0].content[0].value}
                    </h3>
                    <p>
                      {props.locale === "en"
                        ? pageData.scFragments[4].scFragments[2].scContentEn
                            .json[1].content[0].value
                        : pageData.scFragments[4].scFragments[2].scContentFr
                            .json[1].content[0].value}
                    </p>
                    <ul>
                      <li>
                        {props.locale === "en"
                          ? pageData.scFragments[4].scFragments[2].scContentEn
                              .json[2].content[0].content[0].value
                          : pageData.scFragments[4].scFragments[2].scContentFr
                              .json[2].content[0].content[0].value}
                      </li>
                      <li>
                        {props.locale === "en"
                          ? pageData.scFragments[4].scFragments[2].scContentEn
                              .json[2].content[1].content[0].value
                          : pageData.scFragments[4].scFragments[2].scContentFr
                              .json[2].content[1].content[0].value}
                      </li>
                      <li>
                        {props.locale === "en"
                          ? pageData.scFragments[4].scFragments[2].scContentEn
                              .json[2].content[2].content[0].value
                          : pageData.scFragments[4].scFragments[2].scContentFr
                              .json[2].content[2].content[0].value}
                      </li>
                      <li>
                        {props.locale === "en"
                          ? pageData.scFragments[4].scFragments[2].scContentEn
                              .json[2].content[3].content[0].value
                          : pageData.scFragments[4].scFragments[2].scContentFr
                              .json[2].content[3].content[0].value}
                      </li>
                      <li>
                        {props.locale === "en"
                          ? pageData.scFragments[4].scFragments[2].scContentEn
                              .json[2].content[4].content[0].value
                          : pageData.scFragments[4].scFragments[2].scContentFr
                              .json[2].content[4].content[0].value}
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="mb-6 col-span-12 xl:col-span-8 row-start-2 xl:row-start-2">
                  <Collapse
                    id="image-text-collapse-3"
                    title={
                      props.locale === "en"
                        ? pageData.scFragments[4].scFragments[2].scFragments[0]
                            .scLongDescHeadingEn
                        : pageData.scFragments[4].scFragments[2].scFragments[0]
                            .scLongDescHeadingFr
                    }
                    children={generateReactElements(
                      props.locale === "en"
                        ? pageData.scFragments[4].scFragments[2].scFragments[0]
                            .scLongDescEn.json
                        : pageData.scFragments[4].scFragments[2].scFragments[0]
                            .scLongDescFr.json
                    )}
                  />
                </div>
              </div>
            </div>
            <section
              id="BENEFITS-NAVIGATOR-HELP-DESIGN"
              className="grid grid-cols-12 col-span-12"
            >
              <h2 className="col-span-12">
                {props.locale === "en"
                  ? pageData.scFragments[5].scContentEn.json[0].content[0].value
                  : pageData.scFragments[5].scContentFr.json[0].content[0]
                      .value}
              </h2>
              <p className="col-span-12 xl:col-span-8">
                {props.locale === "en"
                  ? pageData.scFragments[5].scContentEn.json[1].content[0].value
                  : pageData.scFragments[5].scContentFr.json[1].content[0]
                      .value}
              </p>
              <p className="col-span-12 xl:col-span-8">
                {props.locale === "en"
                  ? pageData.scFragments[5].scContentEn.json[2].content[0].value
                  : pageData.scFragments[5].scContentFr.json[2].content[0]
                      .value}
                <a
                  className="underline underline-offset-4"
                  href={`mailto:${pageData.scFragments[5].scContentEn.json[2].content[1].value}`}
                >
                  {pageData.scFragments[5].scContentEn.json[2].content[1].value}
                </a>
              </p>
              <p className="col-span-12 xl:col-span-8">
                {props.locale === "en"
                  ? pageData.scFragments[5].scContentEn.json[3].content[0].value
                  : pageData.scFragments[5].scContentFr.json[3].content[0]
                      .value}
              </p>
            </section>
          </div>
          {/* <ul className="grid lg:grid-cols-12 gap-x-4 lg:gap-y-12 list-none ml-0">
            {displayProjectUpdates}
          </ul> */}
        </div>

        {/* <CTA
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
        /> */}
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
    "benefitsNavigatorQuery"
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
      updatesData: pageData.scLabsPagev1ByPath.item.scLabProjectUpdates,
      dictionary: dictionary.dictionaryV1List,
      ...(await serverSideTranslations(locale, ["common"])),
    },
    // revalidate: 10,
  };
};
