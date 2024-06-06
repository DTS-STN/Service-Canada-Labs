import React from "react";
import { ExploreProjects } from "./ExploreProjects";

export default {
  title: "Components/organisms/ExploreProjects",
  component: ExploreProjects,
};

const Template = (args) => <ExploreProjects {...args}></ExploreProjects>;

export const Primary = Template.bind({});

Primary.args = {
  locale: "en",
  projects: [
    {
      scId: "BENEFITS-NAVIGATOR-OVERVIEW",
      scTitleEn: "Benefits Navigator",
      scTitleFr: "Navigateur de prestations",
      scPageNameEn: "/en/projects/benefits-navigator",
      scPageNameFr: "/fr/projets/navigateur-prestations",
      scSocialMediaImageEn: {
        _path:
          "/content/dam/decd-endc/images/sclabs/benefits-navigator/navigator-overview.jpg",
        width: 359,
        height: 260,
      },
      scSocialMediaImageFr: {
        _path:
          "/content/dam/decd-endc/images/sclabs/benefits-navigator/navigator-overview.jpg",
        width: 359,
        height: 260,
      },
      scSocialMediaImageAltTextEn:
        "People sitting on puzzle pieces or standing next to them.",
      scSocialMediaImageAltTextFr:
        "Personnes assises sur des morceaux de casse-tête ou se tenant debout à côté.",
      scDescriptionEn: { json: [{ content: ["english description"] }] },
      scDescriptionFr: { json: [{ content: ["french description"] }] },
    },
    {
      scId: "First project",
      scTitleEn: "First project",
      scTitleFr: "First project fr",
      scPageNameEn: "/en/projects/digital-standards-playbook",
      scPageNameFr: "/fr/projets/guide-normes-numeriques",
      scSocialMediaImageEn: {
        _path:
          "/content/dam/decd-endc/images/sclabs/benefits-navigator/navigator-overview.jpg",
        width: 359,
        height: 260,
      },
      scSocialMediaImageFr: {
        _path:
          "/content/dam/decd-endc/images/sclabs/benefits-navigator/navigator-overview.jpg",
        width: 359,
        height: 260,
      },
      scSocialMediaImageAltTextEn:
        "People sitting on puzzle pieces or standing next to them.",
      scSocialMediaImageAltTextFr:
        "Personnes assises sur des morceaux de casse-tête ou se tenant debout à côté.",
      scDescriptionEn: {
        json: [{ content: [{ value: "english description" }] }],
      },
      scDescriptionFr: {
        json: [{ content: [{ value: "french description" }] }],
      },
    },
    {
      scId: "Second project",
      scTitleEn: "Second project",
      scTitleFr: "Second project fr",
      scPageNameEn: "/en/projects/digital-standards-playbook",
      scPageNameFr: "/fr/projets/guide-normes-numeriques",
      scSocialMediaImageEn: {
        _path:
          "/content/dam/decd-endc/images/sclabs/benefits-navigator/navigator-overview.jpg",
        width: 359,
        height: 260,
      },
      scSocialMediaImageFr: {
        _path:
          "/content/dam/decd-endc/images/sclabs/benefits-navigator/navigator-overview.jpg",
        width: 359,
        height: 260,
      },
      scSocialMediaImageAltTextEn:
        "People sitting on puzzle pieces or standing next to them.",
      scSocialMediaImageAltTextFr:
        "Personnes assises sur des morceaux de casse-tête ou se tenant debout à côté.",
      scDescriptionEn: {
        json: [{ content: [{ value: "english description" }] }],
      },
      scDescriptionFr: {
        json: [{ content: [{ value: "french description" }] }],
      },
    },
    {
      scId: "Third project",
      scTitleEn: "Third project",
      scTitleFr: "Third project fr",
      scPageNameEn: "/en/projects/digital-standards-playbook",
      scPageNameFr: "/fr/projets/guide-normes-numeriques",
      scSocialMediaImageEn: {
        _path:
          "/content/dam/decd-endc/images/sclabs/benefits-navigator/navigator-overview.jpg",
        width: 359,
        height: 260,
      },
      scSocialMediaImageFr: {
        _path:
          "/content/dam/decd-endc/images/sclabs/benefits-navigator/navigator-overview.jpg",
        width: 359,
        height: 260,
      },
      scSocialMediaImageAltTextEn:
        "People sitting on puzzle pieces or standing next to them.",
      scSocialMediaImageAltTextFr:
        "Personnes assises sur des morceaux de casse-tête ou se tenant debout à côté.",
      scDescriptionEn: {
        json: [{ content: [{ value: "english description" }] }],
      },
      scDescriptionFr: {
        json: [{ content: [{ value: "french description" }] }],
      },
    },
  ],
};
