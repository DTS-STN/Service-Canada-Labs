import React from "react";
import { Layout } from "./Layout";

export default {
  title: "Components/Organisms/Layout",
  component: Layout,
};

const sampleText = () => {
  return (
    <div className="layout-container">
      <p data-testid="child-element">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
        occaecat cupidatat non proident, sunt in culpa qui officia deserunt
        mollit anim id est laborum.
      </p>
    </div>
  );
};

const Template = (args) => <Layout {...args}>{sampleText()}</Layout>;

export const NoBanner = Template.bind({});
export const WithBanner = Template.bind({});

NoBanner.args = {
  langUrl: "someUrl",
  locale: "someLocale",
};

WithBanner.args = {
  bannerTitle: "Banner Title",
  bannerText: "Banner Text",
  langUrl: "someUrl",
  locale: "someLocale",
};
