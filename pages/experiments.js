import Head from "next/head";
import { useState } from "react";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "next-i18next";
import { Layout } from "../components/organisms/Layout";
import { Experiment } from "../components/atoms/Experiment";
import { useRouter } from "next/router";
import { FilterExperiments } from "../components/atoms/FilterExperiments";

export default function experiments(props) {
  const { t } = useTranslation("common");
  const { asPath } = useRouter();
  const [filteredExperiements, setfilteredExperiements] = useState(
    props.experimentData
  );

  const displayExperiments = filteredExperiements.map((experiment) => (
    <Experiment
      key={experiment.id}
      title={experiment.title}
      tag={experiment.tag}
      desc={experiment.desc}
    />
  ));
  const handleFilter = (event) => {
    if (parseInt(event.target.id) === 0) {
      setfilteredExperiements(props.experimentData);
    } else {
      setfilteredExperiements(
        props.experimentData.filter(
          (experiment) => experiment.tag.id === parseInt(event.target.id)
        )
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
        <FilterExperiments
          options={[
            { id: 0, text: "experimentsTagAll" },
            { id: 1, text: "experimentsTagActive" },
            { id: 2, text: "experimentsTagComingSoon" },
          ]}
          onChange={handleFilter}
        />

        <div className="grid gap-y-5 lg:grid-cols-2 lg:gap-x-11 lg:gap-y-12">
          {displayExperiments}
        </div>
      </section>
    </Layout>
  );
}

export const getStaticProps = async ({ locale }) => {
  const data = [
    {
      id: 1,
      title: "Lorem Ipsum",
      tag: { id: 1, text: "experimentsTagActive" },
      desc:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Odio tempor orci dapibus ultrices in iaculis nunc. Tincidunt vitae semper quis lectus. Vestibulum mattis ullamcorper velit sed ullamcorper morbi tincidunt ornare. Tortor at risus viverra adipiscing at in. Est ante in nibh mauris cursus. In tellus integer feugiat scelerisque varius morbi enim. ",
    },
    {
      id: 2,
      title: "Lorem Ipsum",
      tag: { id: 1, text: "experimentsTagActive" },
      desc:
        "Risus ultricies tristique nulla aliquet. Interdum posuere lorem ipsum dolor sit amet. Velit ut tortor pretium viverra suspendisse potenti nullam. Faucibus a pellentesque sit amet porttitor eget dolor morbi non. ",
    },
    {
      id: 3,
      title: "Lorem Ipsum",
      tag: { id: 2, text: "experimentsTagComingSoon" },
      desc:
        "Praesent semper feugiat nibh sed pulvinar proin gravida hendrerit lectus. In hac habitasse platea dictumst vestibulum rhoncus est. Sit amet nisl purus in mollis nunc. Felis imperdiet proin fermentum leo vel. ",
    },
    {
      id: 4,
      title: "Lorem Ipsum",
      tag: { id: 1, text: "experimentsTagActive" },
      desc:
        "Vulputate ut pharetra sit amet aliquam id diam. Enim sit amet venenatis urna cursus eget nunc scelerisque viverra.",
    },
    {
      id: 5,
      title: "Lorem Ipsum",
      tag: { id: 2, text: "experimentsTagComingSoon" },
      desc:
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
