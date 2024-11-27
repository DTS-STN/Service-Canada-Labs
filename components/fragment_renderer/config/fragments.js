import {
  TextWithImage,
  TextContent,
  Button,
  ArticleCTA,
  QuoteVerticalLineContent,
  ImageWithCollapse,
} from "../fragment_components";

import {
  ArticleCTAMapper,
  TextWithImageMapper,
  QuoteMapper,
  ButtonMapper,
  ImageMapper,
  TextContentMapper,
} from "../mappers";

export const FRAGMENT_CONFIG = {
  "SCLabs-Comp-Content-Image-v1": {
    component: TextWithImage,
    mapper: TextWithImageMapper,
  },
  "SCLabs-Comp-Content-v1": {
    component: QuoteVerticalLineContent,
    mapper: QuoteMapper,
  },
  "SCLabs-Content-v1": {
    component: TextContent,
    mapper: TextContentMapper,
  },
  "SCLabs-Button-v1": {
    component: Button,
    mapper: ButtonMapper,
  },
  "SCLabs-Feature-v1": {
    component: ArticleCTA,
    mapper: ArticleCTAMapper,
  },
  "SCLabs-Image-v1": {
    component: ImageWithCollapse,
    mapper: ImageMapper,
  },
};
