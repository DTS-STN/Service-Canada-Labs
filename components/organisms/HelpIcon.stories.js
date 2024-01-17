import * as React from "react";
import { HelpIcon } from "./HelpIcon";

export default {
  title: "Components/Organisms/HelpIcon",
  component: HelpIcon,
};

const Template = (args) => <HelpIcon {...args} />;

export const Default = Template.bind({});
export const SampleEN = Template.bind({});
export const SampleFR = Template.bind({});

Default.args = {
  lang: "en",
  title: "Descriptive title / Term requiring explanation",
  body: "Description",
};

SampleEN.args = {
  lang: "en",
  title: "Separated",
  body: "You are separated when you start living separate and apart from your spouse or common law partner because of a breakdown in the relationship for a period of at least 90 days.<br><br>Refer to marital status for more information",
};

SampleFR.args = {
  lang: "fr",
  title: "Séparé",
  body: "Vous êtes considéré séparé lorsque vous vivez séparément de votre époux ou conjoint en raison de la rupture de votre union pour une période de 90 jours ou plus.<br><br>Voir état civil pour plus d’information",
};
