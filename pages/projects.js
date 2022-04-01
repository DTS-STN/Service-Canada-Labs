import Head from "next/head";
import { useEffect, useState } from "react";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "next-i18next";
import { Layout } from "../components/organisms/Layout";
import { Experiment } from "../components/molecules/Experiment";
import { Filter } from "../components/molecules/Filter";
import { CallToAction } from "../components/molecules/CallToAction";
import strapiServiceInstance from "./api/StrapiServiceInstance";
import ReactMarkdown from "react-markdown";

export default function Projects(props) {
  const { t } = useTranslation("common");
  const [filter, setFilter] = useState("all");
  const pageContent = props.pageContent.filter(
    (content) => content.attributes.locale === props.locale
  );
  const experimentData = props.experimentData.filter(
    (experiment) => experiment.attributes.locale === props.locale
  );
  const [filteredExperiments, setFilteredExperiments] = useState(
    props.experimentData.filter(
      (experiment) => experiment.attributes.locale === props.locale
    )
  );

  // get the filters from the data
  const filters = props.filters.map((value) => {
    return {
      ...value,
      label: t(value.label),
      checked: value["id"] === filter,
    };
  });

  const handleFilter = (value) => {
    if (value === "all") {
      setFilter("all");
      setFilteredExperiments(experimentData);
    } else {
      setFilter(value);
      setFilteredExperiments(
        experimentData.filter(
          (experiment) => experiment.attributes.Status === value
        )
      );
    }
  };

  useEffect(() => {
    if (process.env.NEXT_PUBLIC_ADOBE_ANALYTICS_URL) {
      window.adobeDataLayer = window.adobeDataLayer || [];
      window.adobeDataLayer.push({ event: "pageLoad" });
    }
  }, []);

  return (
    <>
      {pageContent &&
        pageContent.map((content, index) => (
          <Layout
            locale={props.locale}
            langUrl={content.attributes.url}
            breadcrumbItems={[
              {
                text: content.attributes.navigation.sclabsTitle,
                link: content.attributes.navigation.home,
              },
            ]}
            key={index}
          >
            <Head>
              {process.env.NEXT_PUBLIC_ADOBE_ANALYTICS_URL ? (
                <script src={process.env.NEXT_PUBLIC_ADOBE_ANALYTICS_URL} />
              ) : (
                ""
              )}

              {/* Primary HTML Meta Tags */}
              <title>{`${t("projectsTitle")} — ${t("siteTitle")}`}</title>
              <meta
                name="title"
                content={`${t("projectsTitle")} — ${t("siteTitle")}`}
              />
              <meta name="description" content={t("projectsMetaDescription")} />
              <meta name="author" content="Service Canada" />
              <link rel="icon" href="/favicon.ico" />
              <link rel="schema.dcterms" href="http://purl.org/dc/terms/" />
              <meta name="keywords" content={t("homeKeywords")} />

              {/* DCMI Meta Tags */}
              <meta
                name="dcterms.title"
                content={`${t("projectsTitle")} — ${t("siteTitle")}`}
              />
              <meta
                name="dcterms.language"
                content={props.locale === "en" ? "eng" : "fra"}
                title="ISO639-2/T"
              />
              <meta
                name="dcterms.description"
                content={t("projectsMetaDescription")}
              />
              <meta
                name="dcterms.subject"
                title="gccore"
                content={t("metaSubject")}
              />
              <meta name="dcterms.creator" content="Service Canada" />
              <meta name="dcterms.accessRights" content="2" />
              <meta
                name="dcterms.service"
                content="ESDC-EDSC_SCLabs-LaboratoireSC"
              />
              <meta name="dcterms.issued" content="2021-04-22" />
              <meta
                name="dcterms.modified"
                title="W3CDTF"
                content="2021-12-16"
              />
              <meta name="dcterms.spatial" title="W3CDTF" content="Canada" />

              {/* Open Graph / Facebook */}
              <meta property="og:type" content="website" />
              <meta property="og:locale" content={props.locale} />
              <meta
                property="og:url"
                content={
                  "https://alpha.service.canada.ca/" +
                  `${props.locale}` +
                  `${t("projectRedirect")}`
                }
              />
              <meta
                property="og:title"
                content={`${t("projectsTitle")} — ${t("siteTitle")}`}
              />
              <meta
                property="og:description"
                content={`${t("projectsMetaDescription")}`}
              />
              <meta property="og:image" content={`${t("metaImage")}`} />
              <meta property="og:image:alt" content={`${t("siteTitle")}`} />

              {/* Twitter */}
              <meta property="twitter:card" content="summary_large_image" />
              <meta
                property="twitter:url"
                content={
                  "https://alpha.service.canada.ca/" +
                  `${props.locale}` +
                  `${t("projectRedirect")}`
                }
              />
              <meta
                property="twitter:title"
                content={`${t("projectsTitle")} — ${t("siteTitle")}`}
              />
              <meta name="twitter:creator" content="Service Canada" />
              <meta
                property="twitter:description"
                content={`${t("projectsMetaDescription")}`}
              />
              <meta property="twitter:image" content={`${t("metaImage")}`} />
              <meta
                property="twitter:image:alt"
                content={`${t("siteTitle")}`}
              />
            </Head>
            <section className="layout-container mb-10">
              <h1 id="pageMainTitle" tabIndex="-1" className="flex-wrap mb-10">
                {content.attributes.textField[0].heading}
              </h1>
              <ReactMarkdown
                parserOptions={{ commonmark: true }}
                className="mb-6 text-sm lg:text-p"
              >
                {content.attributes.textField[0].paragraph}
              </ReactMarkdown>
              <p dangerouslySetInnerHTML={{ __html: t("projectSignup") }}></p>
              <p className="mt-4 mb-10">
                <strong>{content.attributes.textField[1].paragraph}</strong>
              </p>
              <Filter
                label={content.attributes.textField[2].heading}
                options={filters}
                onChange={handleFilter}
                dataCy={"filter-projects"}
              />
              <ul
                className="grid gap-y-5 lg:grid-cols-2 lg:gap-x-11 lg:gap-y-12"
                data-cy="projects-list"
              >
                {filteredExperiments &&
                  filteredExperiments.map((experiment) => (
                    <li key={experiment.id} className="flex items-stretch">
                      <Experiment
                        title={experiment.attributes.Title}
                        tag={experiment.attributes.Status}
                        tagLabel={t(experiment.attributes.Status)}
                        description={experiment.attributes.Description}
                        href={experiment.attributes.Link}
                        dataTestId={`${experiment.id}`}
                        dataCy={`${experiment.id}`}
                      />
                    </li>
                  ))}
              </ul>
            </section>
            <CallToAction
              title={content.attributes.callToAction.title}
              html={t("becomeAParticipantDescription")}
              lang={props.locale}
              href={content.attributes.callToAction.href}
              hrefText={content.attributes.callToAction.text}
            />
          </Layout>
        ))}

      {process.env.NEXT_PUBLIC_ADOBE_ANALYTICS_URL ? (
        <script type="text/javascript">_satellite.pageBottom()</script>
      ) : (
        ""
      )}
    </>
  );
}

export const getStaticProps = async ({ locale }) => {
  const query1 = "/experiments?locale=all";
  const query2 = "/page-contents?populate=%2A&locale=all";

  // get page content and experiment data from stapi service instance
  const res1 = await strapiServiceInstance.getFragment(query1);
  const res2 = await strapiServiceInstance.getFragment(query2);

  const experiments = res1.data.data;
  const pageContent = res2.data.data;

  const projectPage = pageContent.filter(
    (content) => content.attributes.title === "projects"
  );

  const filters = Object.values(
    experiments.reduce(
      (filters, { attributes }) => {
        if (!filters[attributes.Status]) {
          filters[attributes.Status] = {
            id: attributes.Status,
            label: attributes.Status,
            checked: false,
          };
        }
        return filters;
      },
      {
        all: {
          id: "all",
          label: "All",
          checked: true,
        },
      }
    )
  );

  return process.env.NEXT_PUBLIC_ISR_ENABLED
    ? {
        props: {
          locale: locale,
          ...(await serverSideTranslations(locale, ["common"])),
          experimentData: experiments,
          pageContent: projectPage,
          filters,
        },
        revalidate: 60, // revalidate once an minute
      }
    : {
        props: {
          locale: locale,
          ...(await serverSideTranslations(locale, ["common"])),
          experimentData: experiments,
          pageContent: projectPage,
          filters,
        },
      };
};
