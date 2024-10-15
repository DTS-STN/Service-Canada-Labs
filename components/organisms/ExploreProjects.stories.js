import React from "react";
import { ExploreProjects } from "./ExploreProjects";

export default {
  title: "Components/organisms/ExploreProjects",
  component: ExploreProjects,
};

const Template = (args) => <ExploreProjects {...args}></ExploreProjects>;

export const Default = Template.bind({});

Default.args = {
  locale: "en",
  projects: [
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
      scSocialMediaImageAltTextEn: "first alt",
      scSocialMediaImageAltTextFr: "first alt fr",
      scDescriptionEn: {
        json: [{ content: [{ value: "first description" }] }],
      },
      scDescriptionFr: {
        json: [{ content: [{ value: "first description fr" }] }],
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
      scSocialMediaImageAltTextEn: "second alt",
      scSocialMediaImageAltTextFr: "second alt fr",
      scDescriptionEn: {
        json: [{ content: [{ value: "second description" }] }],
      },
      scDescriptionFr: {
        json: [{ content: [{ value: "second description fr" }] }],
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
      scSocialMediaImageAltTextEn: "third alt",
      scSocialMediaImageAltTextFr: "third alt fr",
      scDescriptionEn: {
        json: [{ content: [{ value: "third description" }] }],
      },
      scDescriptionFr: {
        json: [{ content: [{ value: "third description fr" }] }],
      },
    },
  ],
  heading: "Explore other projects",
};
