import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import { Primary } from "./Footer.stories";

it("renders Footer in its primary state", () => {
  render(<Primary {...Primary.args} />);

  expect(screen.getByRole("button")).toHaveTextContent(
    Primary.args.reportBtnText
  );
  expect(screen.getByText("Report a problem")).toBeTruthy();
  expect(screen.getByAltText("Canada.ca logo")).toBeTruthy();
  const text = screen.getByText(
    "Experiencing an issue with this product or have you spotted an error?"
  );
  expect(text).toBeTruthy();

  Primary.args.links.forEach((value) => {
    screen.getByText(value.linkText);
  });
});
