import Head from "next/head";
import { useEffect, useState } from "react";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "next-i18next";
import { Layout } from "../components/organisms/Layout";
import { Card } from "../components/molecules/Card";
import { Filter } from "../components/molecules/Filter";
import { CallToAction } from "../components/molecules/CallToAction";
import queryGraphQL from "../graphql/client";
import getAllProjects from "../graphql/queries/projectQuery.graphql";

export default function Projects(props) {
  const { t } = useTranslation("common");
  const [filter, setFilter] = useState("all");
  const [experimentData] = useState(props.experimentData.items);
  const [filteredExperiments, setFilteredExperiments] = useState(
    props.experimentData.items
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
        experimentData.filter((experiment) => experiment.tag === value)
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
      <Layout
        locale={props.locale}
        langUrl={t("projectPath")}
        breadcrumbItems={[
          { text: t("siteTitle"), link: t("breadCrumbsHref1") },
        ]}
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
          <meta name="dcterms.modified" title="W3CDTF" content="2021-12-16" />
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
          <meta property="twitter:image:alt" content={`${t("siteTitle")}`} />
        </Head>
        <section className="layout-container mb-10">
          <h1 id="pageMainTitle" tabIndex="-1" className="flex-wrap mb-10">
            {t("projectsTitle")}
          </h1>
          <p className="mb-8">{t("projectsIntro")}</p>
          <p
            className="whitespace-pre-line mb-8"
            dangerouslySetInnerHTML={{ __html: t("projectsText") }}
          ></p>
          <p>{t("projectQuestions")}</p>
          <ul className="text-lg list-disc ml-8 my-8">
            <li>{t("projectQuestion1")}</li>
            <li>{t("projectQuestion2")}</li>
            <li>{t("projectQuestion3")}</li>
            <li>{t("projectQuestion4")}</li>
          </ul>
          <p dangerouslySetInnerHTML={{ __html: t("projectSignup") }}></p>
          <p className="mt-4 mb-10">
            <strong>{t("projectsDisclaimerBody")}</strong>
          </p>
          <Filter
            label={t("filterBy")}
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
                // Key should be experiment.id but that doesn't exist in the model yet, will need to be changed but this gets rid of console warning for now
                <li key={experiment.title} className="flex items-stretch">
                  <Card
                    title={experiment.title}
                    tag={experiment.tag}
                    tagLabel={t(experiment.tag)}
                    description={experiment.description}
                    href={experiment.href}
                    dataTestId={`${experiment.id}`}
                    dataCy={`${experiment.id}`}
                    isExperiment
                  />
                </li>
              ))}
          </ul>
        </section>
        <CallToAction
          title={t("signupTitleCallToAction")}
          html={t("becomeAParticipantDescription")}
          lang={props.locale}
          href={t("signupInfoRedirect")}
          hrefText={t("signupBtn")}
        />
      </Layout>
      {process.env.NEXT_PUBLIC_ADOBE_ANALYTICS_URL ? (
        <script type="text/javascript">_satellite.pageBottom()</script>
      ) : (
        ""
      )}
    </>
  );
}

export const getStaticProps = async ({ locale }) => {
  // get projects data from AEM
  const res = await queryGraphQL(getAllProjects).then((result) => {
    return result;
  });

  const data = res.data.scLabsExperimentList;

  const filters = Object.values(
    data.items.reduce(
      (filters, { tag }) => {
        if (!filters[tag]) {
          filters[tag] = {
            id: tag,
            label: tag,
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
          experimentData: data,
          filters,
        },
        revalidate: 60, // revalidate once an minute
      }
    : {
        props: {
          locale: locale,
          ...(await serverSideTranslations(locale, ["common"])),
          experimentData: data,
          filters,
        },
      };
};
