import React from "react";
import { render, screen } from "@testing-library/react";
import TextWithImage from "./TextWithImage";
import {
  Default,
  Vertical,
  VerticalWithCollapse,
} from "./TextWithImage.stories.js";
import { axe, toHaveNoViolations } from "jest-axe";
import { userEvent } from "../../../node_modules/@storybook/test/dist/index";

expect.extend(toHaveNoViolations);

describe("TextWithImage", () => {
  test("renders TextWithImage component with default props", async () => {
    const { container } = render(<TextWithImage {...Default.args} />);
    expect(screen.getByAltText("image alt text")).toBeInTheDocument();
    expect(
      screen.getByText((content) => content.startsWith("Every week"))
    ).toBeInTheDocument();
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });
  test("renders TextWithImage component with Vertical props", async () => {
    render(<TextWithImage {...Vertical.args} />);
    expect(screen.getByAltText("image alt text")).toBeInTheDocument();
    expect(
      screen.getByText((content) => content.startsWith("Information"))
    ).toBeInTheDocument();
  });
  test("renders TextWithImage component with Collapse props", async () => {
    const { container } = render(
      <TextWithImage {...VerticalWithCollapse.args} />
    );
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
