import { ProjectInfo } from "./ProjectInfo";

export default {
  title: "Components/Atoms/ProjectInfo",
  component: ProjectInfo,
};

const Template = (args) => <ProjectInfo {...args} />;

export const Primary = Template.bind({});

Primary.args = {
  dateStarted: "2021-01-01",
  dateEnded: "2022-03-31",
  stage: "Alpha",
  summary: "Project status",
};
