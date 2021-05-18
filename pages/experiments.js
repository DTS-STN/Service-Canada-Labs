import Head from "next/head";
import { useState } from "react";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "next-i18next";
import { Layout } from "../components/organisms/Layout";
import { Experiment } from "../components/molecules/Experiment";
import { useRouter } from "next/router";
import { Filter } from "../components/molecules/Filter";

export default function experiments(props) {
  const { t } = useTranslation("common");
  const { asPath } = useRouter();
  const [filter, setFilter] = useState("all");
  const [filteredExperiments, setFilteredExperiments] = useState(
    props.experimentData
  );

  // get the filters from the data
  const filters = Object.values(
    props.experimentData.reduce(
      (filters, { tag }) => {
        if (!filters[tag]) {
          filters[tag] = {
            id: tag,
            label: t(tag),
            checked: filter === tag,
          };
        }
        return filters;
      },
      {
        all: {
          id: "all",
          label: "All",
          checked: filter === "all",
        },
      }
    )
  );

  const displayExperiments = filteredExperiments.map((experiment) => (
    <li key={experiment.id} className="flex items-stretch">
      <Experiment
        title={experiment.title}
        tag={experiment.tag}
        tagLabel={t(experiment.tag)}
        description={experiment.description}
        dataTestId={`${experiment.id}`}
        dataCy={`${experiment.id}`}
      />
    </li>
  ));
  const handleFilter = (value) => {
    if (value === "all") {
      setFilter("all");
      setFilteredExperiments(props.experimentData);
    } else {
      console.log(value);
      setFilter(value);
      setFilteredExperiments(
        props.experimentData.filter((experiment) => experiment.tag === value)
      );
    }
  };

  return (
    <Layout locale={props.locale} langUrl={asPath}>
      <Head>
        <title>{t("experimentsTitle")}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <section className="layout-container">
        <h1>{t("experimentsAndExplorationTitle")}</h1>
        <Filter
          label={t("filterBy")}
          options={filters}
          onChange={handleFilter}
          dataCy={"filter-experiments"}
        />
        <ul
          className="grid gap-y-5 lg:grid-cols-2 lg:gap-x-11 lg:gap-y-12"
          data-cy="experiments-list"
        >
          {displayExperiments}
        </ul>
      </section>
    </Layout>
  );
}

export const getStaticProps = async ({ locale }) => {
  const data = [
    {
      id: 1,
      title: "Lorem Ipsum",
      tag: "alpha",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Odio tempor orci dapibus ultrices in iaculis nunc. Tincidunt vitae semper quis lectus. Vestibulum mattis ullamcorper velit sed ullamcorper morbi tincidunt ornare. Tortor at risus viverra adipiscing at in. Est ante in nibh mauris cursus. In tellus integer feugiat scelerisque varius morbi enim. ",
    },
    {
      id: 2,
      title: "Lorem Ipsum",
      tag: "coming_soon",
      description:
        "Risus ultricies tristique nulla aliquet. Interdum posuere lorem ipsum dolor sit amet. Velit ut tortor pretium viverra suspendisse potenti nullam. Faucibus a pellentesque sit amet porttitor eget dolor morbi non. ",
    },
    {
      id: 3,
      title: "Lorem Ipsum",
      tag: "coming_soon",
      description:
        "Praesent semper feugiat nibh sed pulvinar proin gravida hendrerit lectus. In hac habitasse platea dictumst vestibulum rhoncus est. Sit amet nisl purus in mollis nunc. Felis imperdiet proin fermentum leo vel. ",
    },
    {
      id: 4,
      title: "Lorem Ipsum",
      tag: "alpha",
      description:
        "Vulputate ut pharetra sit amet aliquam id diam. Enim sit amet venenatis urna cursus eget nunc scelerisque viverra.",
    },
    {
      id: 5,
      title: "Lorem Ipsum",
      tag: "active",
      description:
        "Quisque sagittis purus sit amet volutpat consequat mauris. Mauris pellentesque pulvinar pellentesque habitant morbi. Eu tincidunt tortor aliquam nulla facilisi cras fermentum. Nunc consequat interdum varius sit amet mattis vulputate. ",
    },
  ];
  return {
    props: {
      locale: locale,
      ...(await serverSideTranslations(locale, ["common"])),
      experimentData: data,
    },
  };
};
