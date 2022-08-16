import { TableOfContents } from "./TableOfContents";

export default {
  title: "Components/Atoms/TableOfContents",
  component: TableOfContents,
};

const Template = (args) => <TableOfContents {...args} />;

export const Primary = Template.bind({});

Primary.args = {
  title: "Table of Contents Title",
  headings: [{ id: "heading-one", text: "Heading one" }],
};
