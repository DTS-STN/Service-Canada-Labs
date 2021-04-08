import { Header } from "./Header";
import logo from "../../public/wmms-blk.svg";

export default {
  title: "Components/Organisms/Header",
  component: Header,
};

const Template = (args) => <Header {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  headerLogoAltText: "Symbol of the Government of Canada",
  headerLogoImage: logo,
};
