import React from "react";
import { render, screen } from "@testing-library/react";
import ImageVerticalLineContent from "./ImageVerticalLineContent";
import { Default, WithCollapse } from "./ImageVerticalLineContent.stories.js";
import { axe, toHaveNoViolations } from "jest-axe";
import { userEvent } from "../../../node_modules/@storybook/test/dist/index";

expect.extend(toHaveNoViolations);

describe("ImageVerticalLineContent", () => {
  test("renders ImageVerticalLineContent component with default props", async () => {
    const { container } = render(
      <ImageVerticalLineContent {...Default.args} />
    );
    expect(screen.getByAltText("image alt text")).toBeInTheDocument();
    expect(
      screen.getByText((content) => content.startsWith("Information"))
    ).toBeInTheDocument();
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });
  test("renders ImageVerticalLineContent with Collapse", async () => {
    const { container } = render(
      <ImageVerticalLineContent {...WithCollapse.args} />
    );
    expect(screen.getByAltText("image alt text")).toBeInTheDocument();
    expect(
      screen.getByText((content) => content.startsWith("Information"))
    ).toBeInTheDocument();
    await userEvent.click(screen.getByTestId("summary"));
    const details = screen.getByTestId("details");
    const open = await details.hasAttribute("open");
    expect(open).toBeTruthy();
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });
});
