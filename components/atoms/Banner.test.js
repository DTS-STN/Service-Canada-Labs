import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

import { Primary } from "./Banner.stories";

it("renders Banner in its primary state", () => {
  render(<Primary {...Primary.args} />);
  const textElement = screen.getByText("Banner Text");
  const headlineElement = screen.getByText("Banner Headline");
  expect(textElement).toBeTruthy();
  expect(headlineElement).toBeTruthy();
});
