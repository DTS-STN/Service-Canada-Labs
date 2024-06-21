import React from "react";
import { ExploreUpdates } from "./ExploreUpdates";

export default {
  title: "Components/organisms/ExploreUpdates",
  component: ExploreUpdates,
};

const Template = (args) => <ExploreUpdates {...args}></ExploreUpdates>;

export const Default = Template.bind({});

Default.args = {
  locale: "en",
  heading: "Explore more updates",
  updatesData: [
    {
      _path:
        "/content/dam/decd-endc/content-fragments/sclabs/pages/projects/oas-benefits-estimator/project-updates/how-feedback-is-shaping-the-estimator",
      scId: "HOW-FEEDBACK-SHAPING-ESTIMATOR",
      scPageNameEn: "/en/projects/oas-benefits-estimator/how-feedback-shaping",
      scPageNameFr:
        "/fr/projets/estimateur-prestations-sv/faconner-grace-retroaction",
      scLabProject: {
        scTermEn: "OAS Benefits Estimator",
        scTermFr: "Estimateur des prestations de la Sécurité de la vieillesse",
      },
      scTitleEn: "How feedback is shaping the estimator",
      scTitleFr: "Façonner l’estimateur grâce à la rétroaction",
      scBreadcrumbParentPages: [
        {
          scTitleEn: "Service Canada Labs",
          scTitleFr: "Laboratoires de Service Canada",
          scPageNameEn: "/en/home",
          scPageNameFr: "/fr/accueil",
        },
        {
          scTitleEn: "Old Age Security Benefits Estimator",
          scTitleFr:
            "Estimateur des prestations de la Sécurité de la vieillesse",
          scPageNameEn: "/en/projects/oas-benefits-estimator",
          scPageNameFr: "/fr/projets/estimateur-prestations-sv",
        },
      ],
      scSubject: ["gc:subjects/gv-government-and-politics/government-services"],
      scKeywordsEn: "feedback, benefits, estimator",
      scKeywordsFr: "rétroaction, prestations, estimateur",
      scContentType: [
        "gc:content-types/promotional-material-featured-articles",
      ],
      scOwner: ["gc:institutions/service-canada"],
      scDateModifiedOverwrite: "2023-12-12",
      scSocialMediaImageEn: {
        _path:
          "/content/dam/decd-endc/images/sclabs/oas-benefits-estimator/feedback.jpg",
        _publishUrl:
          "https://www.canada.ca/content/dam/decd-endc/images/sclabs/oas-benefits-estimator/feedback.jpg",
        width: 2670,
        height: 1543,
      },
      scSocialMediaImageFr: {
        _path:
          "/content/dam/decd-endc/images/sclabs/oas-benefits-estimator/feedback.jpg",
        _publishUrl:
          "https://www.canada.ca/content/dam/decd-endc/images/sclabs/oas-benefits-estimator/feedback.jpg",
        width: 2670,
        height: 1543,
      },
      scSocialMediaImageAltTextEn:
        " Different kinds of feedback being gathered",
      scSocialMediaImageAltTextFr:
        " Un rassemblement de différents types de rétroaction",
    },
    {
      _path:
        "/content/dam/decd-endc/content-fragments/sclabs/pages/projects/oas-benefits-estimator/project-updates/what-we-learned",
      scId: "WHAT-WE-LEARNED",
      scPageNameEn: "/en/projects/oas-benefits-estimator/what-we-learned",
      scPageNameFr:
        "/fr/projets/estimateur-prestations-sv/ce-que-nous-avons-appris",
      scLabProject: {
        scTermEn: "OAS Benefits Estimator",
        scTermFr: "Estimateur des prestations de la Sécurité de la vieillesse",
      },
      scTitleEn:
        "What we learned on Service Canada Labs before going live on Canada.ca",
      scTitleFr:
        "Ce que nous avons appris dans les laboratoires avant notre lancement sur Canada.ca",
      scBreadcrumbParentPages: [
        {
          scTitleEn: "Service Canada Labs",
          scTitleFr: "Laboratoires de Service Canada",
          scPageNameEn: "/en/home",
          scPageNameFr: "/fr/accueil",
        },
        {
          scTitleEn: "Old Age Security Benefits Estimator",
          scTitleFr:
            "Estimateur des prestations de la Sécurité de la vieillesse",
          scPageNameEn: "/en/projects/oas-benefits-estimator",
          scPageNameFr: "/fr/projets/estimateur-prestations-sv",
        },
      ],
      scContentType: [
        "gc:content-types/promotional-material-featured-articles",
      ],
      scDateModifiedOverwrite: "2023-07-02",
      scSocialMediaImageEn: {
        _path:
          "/content/dam/decd-endc/images/sclabs/oas-benefits-estimator/what-we-learned.jpg",
        _publishUrl:
          "https://www.canada.ca/content/dam/decd-endc/images/sclabs/oas-benefits-estimator/what-we-learned.jpg",
        width: 2670,
        height: 1543,
      },
      scSocialMediaImageFr: {
        _path:
          "/content/dam/decd-endc/images/sclabs/oas-benefits-estimator/what-we-learned.jpg",
        _publishUrl:
          "https://www.canada.ca/content/dam/decd-endc/images/sclabs/oas-benefits-estimator/what-we-learned.jpg",
        width: 2670,
        height: 1543,
      },
      scSocialMediaImageAltTextEn: "People giving feedback",
      scSocialMediaImageAltTextFr: "Personnes qui donnent de la rétroaction",
    },
  ],
  dictionary: [
    {
      _path:
        "/content/dam/decd-endc/content-fragments/sch/dictionary/opens-in-a-new-tab",
      scId: "opens-in-a-new-tab",
      scTermEn: "(Opens in a new tab)",
      scTermFr: "(S'ouvre dans un nouvel onglet)",
    },
    {
      _path: "/content/dam/decd-endc/content-fragments/sclabs/dictionary/all",
      scId: "ALL",
      scTermEn: "All",
      scTermFr: "Tous",
    },
    {
      _path: "/content/dam/decd-endc/content-fragments/sclabs/dictionary/ended",
      scId: "ENDED",
      scTermEn: "Ended",
      scTermFr: "Fin",
    },
    {
      _path:
        "/content/dam/decd-endc/content-fragments/sclabs/dictionary/filter-by",
      scId: "FILTER-BY",
      scTermEn: "Filter by:",
      scTermFr: "Filtrer par :",
    },
    {
      _path:
        "/content/dam/decd-endc/content-fragments/sclabs/dictionary/filter-by-project",
      scId: "DICTIONARY-FILTER-BY-PROJECT",
      scTermEn: "Filter by project",
      scTermFr: "Filtrer par projet",
    },
    {
      _path:
        "/content/dam/decd-endc/content-fragments/sclabs/dictionary/filter-by-project-status",
      scId: "DICTIONARY-FILTER-BY-PROJECT-STATUS",
      scTermEn: "Filter by project status",
      scTermFr: "Filtrer par état du projet",
    },
    {
      _path:
        "/content/dam/decd-endc/content-fragments/sclabs/dictionary/last-updated",
      scId: "LAST-UPDATED",
      scTermEn: "Last updated:",
      scTermFr: "Dernière mise à jour :",
    },
    {
      _path:
        "/content/dam/decd-endc/content-fragments/sclabs/dictionary/on-this-page",
      scId: "ON-THIS-PAGE",
      scTermEn: "On this page",
      scTermFr: "Sur cette page",
    },
    {
      _path:
        "/content/dam/decd-endc/content-fragments/sclabs/dictionary/optional-information",
      scId: "OPTIONAL-INFORMATION",
      scTermEn: "Optional information",
      scTermFr: "Renseignements optionnels",
    },
    {
      _path:
        "/content/dam/decd-endc/content-fragments/sclabs/dictionary/past-projects",
      scId: "PAST-PROJECTS",
      scTermEn: "Past projects",
      scTermFr: "Projets antérieurs",
    },
    {
      _path:
        "/content/dam/decd-endc/content-fragments/sclabs/dictionary/paused",
      scId: "PAUSED",
      scTermEn: "Paused:",
      scTermFr: "Interrompu :",
    },
    {
      _path:
        "/content/dam/decd-endc/content-fragments/sclabs/dictionary/posted-on",
      scId: "POSTED-ON",
      scTermEn: "Posted on:",
      scTermFr: "Publié le :",
    },
    {
      _path:
        "/content/dam/decd-endc/content-fragments/sclabs/dictionary/project-stage",
      scId: "PROJECT-STAGE",
      scTermEn: "Project stage:",
      scTermFr: "Phase du projet :",
    },
    {
      _path:
        "/content/dam/decd-endc/content-fragments/sclabs/dictionary/project-updates",
      scId: "PROJECT-UPDATES",
      scTermEn: "Project updates",
      scTermFr: "Mises à jour du projet",
    },
    {
      _path:
        "/content/dam/decd-endc/content-fragments/sclabs/dictionary/required-information",
      scId: "REQUIRED-INFORMATION",
      scTermEn: "Required information",
      scTermFr: "Renseignements obligatoires",
    },
    {
      _path:
        "/content/dam/decd-endc/content-fragments/sclabs/dictionary/see-all-updates-project",
      scId: "DICTIONARY-SEE-ALL-UPDATES-PROJECT",
      scTermEn: "See all updates about this project",
      scTermFr: "Consulter toutes les mises à jour de ce projet",
    },
    {
      _path:
        "/content/dam/decd-endc/content-fragments/sclabs/dictionary/started",
      scId: "STARTED",
      scTermEn: "Started:",
      scTermFr: "Début :",
    },
    {
      _path:
        "/content/dam/decd-endc/content-fragments/sclabs/dictionary/summary",
      scId: "SUMMARY",
      scTermEn: "Summary:",
      scTermFr: "Résumé :",
    },
    {
      _path:
        "/content/dam/decd-endc/content-fragments/sclabs/dictionary/upcoming-projects",
      scId: "UPCOMING-PROJECTS",
      scTermEn: "Upcoming projects",
      scTermFr: "Projets à venir",
    },
  ],
  href: "#",
  linkLabel: "See more updates",
};
