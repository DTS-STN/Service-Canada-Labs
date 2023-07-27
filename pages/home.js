import Head from "next/head";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { Layout } from "../components/organisms/Layout";
import { useEffect, useState } from "react";
import Card from "../components/molecules/Card";
import { ContextualAlert } from "@dts-stn/service-canada-design-system";
import aemServiceInstance from "../services/aemServiceInstance";
import { Heading } from "@dts-stn/service-canada-design-system";

export default function Home(props) {
  const [pageData] = useState(props.pageData.item);
  const [experimentsData] = useState(props.experimentsData);

  const currentProjects = experimentsData.filter((project) => {
    return (
      project.scLabProjectStatus[0] ===
      "gc:custom/decd-endc/project-status/current"
    );
  });

  const displayCurrentProjects = currentProjects.map((project) => (
    <li key={project.scId} className="list-none ml-0">
      <Card
        showImage
        showTag={
          project.scTitleEn === "Old Age Security Benefits Estimator"
            ? true
            : false
        }
        tagLabel={props.locale === "en" ? "New update" : "Nouvelle mise à jour"}
        tag="current_projects"
        imgSrc={
          // TODO images should always be fetched from the same place in the response data i.e. using the socialMediaImage field
          project.scId === "BENEFITS-NAVIGATOR-OVERVIEW"
            ? props.locale === "en"
              ? `${project.scFragments[0].scImageEn._publishUrl}`
              : `${project.scFragments[0].scImageFr._publishUrl}`
            : props.locale === "en"
            ? `https://www.canada.ca${project.scSocialMediaImageEn._path}`
            : `https://www.canada.ca${project.scSocialMediaImageFr._path}`
        }
        imgAlt={
          props.locale === "en"
            ? project.scSocialMediaImageAltTextEn
            : project.scSocialMediaImageAltTextFr
        }
        title={props.locale === "en" ? project.scTitleEn : project.scTitleFr}
        href={
          props.locale === "en" ? project.scPageNameEn : project.scPageNameFr
        }
        description={
          props.locale === "en"
            ? project.scDescriptionEn.json[0].content[0].value
            : project.scDescriptionFr.json[0].content[0].value
        }
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
          <meta name="dcterms.creator" content="Service Canada" />
          <meta name="dcterms.accessRights" content="2" />
          <meta
            name="dcterms.service"
            content="ESDC-EDSC_SCLabs-LaboratoireSC"
          />
          <meta name="dcterms.issued" title="W3CDTF" content="2021-03-18" />
          <meta name="dcterms.modified" title="W3CDTF" content="2021-12-16" />
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
                ? pageData.scDescriptionEn.json[0].content[0].value
                : pageData.scDescriptionFr.json[0].content[0].value
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
        <section className="layout-container">
          <div className="grid grid-cols-4">
            <div className="col-span-4">
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
            <p className="font-body col-span-4 xl:col-span-2 row-start-2">
              {props.locale === "en"
                ? pageData.scFragments[0].scContentEn.json[1].content[0].value
                : pageData.scFragments[0].scContentFr.json[1].content[0].value}
            </p>
            <p className="font-body col-span-4 xl:col-span-2 row-start-3 pt-4 xxl:pt-0">
              {props.locale === "en"
                ? pageData.scFragments[0].scContentEn.json[2].content[0].value
                : pageData.scFragments[0].scContentFr.json[2].content[0].value}
            </p>
            <div className="hidden xl:grid col-span-2 col-start-3 row-start-2 row-span-2">
              <div className="flex justify-center">
                <span
                  className="w-full"
                  style={{ height: "260px", width: "380px", minWidth: "380px" }}
                  role="presentation"
                >
                  <img
                    src={
                      props.locale === "en"
                        ? pageData.scFragments[1].scImageEn._publishUrl
                        : pageData.scFragments[1].scImageFr._publishUrl
                    }
                    alt=""
                  />
                </span>
              </div>
            </div>
          </div>
          <div className="lg:flex">
            <span className="w-full">
              <h2>
                {props.locale === "en"
                  ? pageData.scFragments[0].scContentEn.json[3].content[0].value
                  : pageData.scFragments[0].scContentFr.json[3].content[0]
                      .value}{" "}
              </h2>
              <p className="font-body">
                {props.locale === "en"
                  ? pageData.scFragments[0].scContentEn.json[4].content[0].value
                  : pageData.scFragments[0].scContentFr.json[4].content[0]
                      .value}{" "}
              </p>
              <ul>
                <li>
                  <p className="font-body">
                    {props.locale === "en"
                      ? pageData.scFragments[0].scContentEn.json[5].content[0]
                          .content[0].value
                      : pageData.scFragments[0].scContentFr.json[5].content[0]
                          .content[0].value}{" "}
                  </p>
                </li>
                <li>
                  <p className="font-body">
                    {props.locale === "en"
                      ? pageData.scFragments[0].scContentEn.json[5].content[1]
                          .content[0].value
                      : pageData.scFragments[0].scContentFr.json[5].content[1]
                          .content[0].value}{" "}
                  </p>
                </li>
              </ul>
            </span>
          </div>
          <h2>
            {props.locale === "en"
              ? pageData.scFragments[0].scContentEn.json[6].content[0].value
              : pageData.scFragments[0].scContentFr.json[6].content[0]
                  .value}{" "}
          </h2>
          <div className="mb-8">
            <ContextualAlert
              id="info-alert"
              type="info"
              alert_icon_alt_text="info icon"
              alert_icon_id="info icon"
              message_heading={
                props.locale === "en"
                  ? pageData.scFragments[2].scTitleEn
                  : pageData.scFragments[2].scTitleFr
              }
              message_body={
                props.locale === "en" ? (
                  <>
                    {
                      pageData.scFragments[2].scContentEn.json[0].content[0]
                        .value
                    }
                    <a
                      className="underline text-canada-footer-font hover:text-canada-footer-hover-font-blue"
                      href={
                        pageData.scFragments[2].scContentEn.json[0].content[1]
                          .data.href
                      }
                    >
                      {
                        pageData.scFragments[2].scContentEn.json[0].content[1]
                          .value
                      }
                    </a>
                    {
                      pageData.scFragments[2].scContentEn.json[0].content[2]
                        .value
                    }
                  </>
                ) : (
                  <>
                    {
                      pageData.scFragments[2].scContentFr.json[0].content[0]
                        .value
                    }
                    <a
                      className="underline text-canada-footer-font hover:text-canada-footer-hover-font-blue"
                      href={
                        pageData.scFragments[2].scContentFr.json[0].content[1]
                          .data.href
                      }
                    >
                      {
                        pageData.scFragments[2].scContentFr.json[0].content[1]
                          .value
                      }
                    </a>
                    {
                      pageData.scFragments[2].scContentEn.json[0].content[2]
                        .value
                    }
                  </>
                )
              }
            />
          </div>
          <ul className="grid lg:grid-cols-2 gap-x-4 gap-y-4 list-none ml-0">
            {displayCurrentProjects}
          </ul>
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

export const getStaticProps = async ({ locale }) => {
  const { data: pageData } = await aemServiceInstance.getFragment(
    "homePageQuery"
  );
  const { data: experimentsData } = await aemServiceInstance.getFragment(
    "projectQuery"
  );

  return {
    props: {
      locale: locale,
      adobeAnalyticsUrl: process.env.ADOBE_ANALYTICS_URL,
      pageData: pageData.scLabsPagev1ByPath,
      experimentsData: experimentsData.scLabsPagev1List.items,
      ...(await serverSideTranslations(locale, ["common"])),
    },
    revalidate: 10,
  };
};
