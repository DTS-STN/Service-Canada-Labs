import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import { Primary } from "./Footer.stories";

it("renders Footer in its primary state", () => {
  render(<Primary {...Primary.args} />);

  expect(
    screen.getByAltText("Symbol of the Government of Canada")
  ).toBeTruthy();

  Primary.args.footerBoxLinks.forEach((value) => {
    screen.getByText(value.footerBoxLinkText);
  });

  Primary.args.links.forEach((value) => {
    screen.getByText(value.linkText);
  });
});
