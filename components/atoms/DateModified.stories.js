import { DateModified } from "./DateModified";

export default {
  title: "DateModified",
  component: DateModified,
};

const Template = (args) => <DateModified {...args} />;

export const Primary = Template.Bind({});

Primary.args = {
  date: "20200420",
};
