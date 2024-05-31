import React from "react";
import { render, screen } from "@testing-library/react";
import FragmentRender from "./FragmentRender";
import { axe, toHaveNoViolations } from "jest-axe";
import {
  ArticleCTA,
  TextWithImage,
  QuoteVerticalLineContent,
  ImageWithCollapse,
  Button,
  TextContent,
} from "./FragmentRender.stories";
expect.extend(toHaveNoViolations);

describe("FragmentRender", () => {
  it("renders ArticleCTA component", async () => {
    const { container } = render(<FragmentRender {...ArticleCTA.args} />);
    expect(screen.getByText((content) => content.startsWith("Information")))
      .toBeInTheDocument;
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });
  it("renders TextWithImage component", async () => {
    const { container } = render(<FragmentRender {...TextWithImage.args} />);
    expect(screen.getByText("It takes time to learn about government benefits"))
      .toBeInTheDocument;
    expect(screen.getByAltText("Community workers helping people"))
      .toBeInTheDocument;
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });
  it("renders QuoteVerticalLineContent component", async () => {
    const { container } = render(
      <FragmentRender {...QuoteVerticalLineContent.args} />
    );
    expect(
      screen.getByText(
        "I didn’t like having to change my birth year to get an estimate"
      )
    ).toBeInTheDocument;
    expect(screen.getByText((content) => content.startsWith("We now")))
      .toBeInTheDocument;
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });
  it("renders Button component", async () => {
    const { container } = render(<FragmentRender {...Button.args} />);
    expect(screen.getByText((content) => content.startsWith("Sign in")))
      .toBeInTheDocument;
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });
  it("renders TextContent component", async () => {
    const { container } = render(<FragmentRender {...TextContent.args} />);
    expect(screen.getByText((content) => content.startsWith("Alpha")))
      .toBeInTheDocument;
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });
  it("renders ImageWithCollapse component", async () => {
    const { container } = render(
      <FragmentRender {...ImageWithCollapse.args} />
    );
    expect(screen.getByText((content) => content.startsWith("Text version")))
      .toBeInTheDocument;
    expect(screen.getByAltText("Benefit news and updates page"))
      .toBeInTheDocument;
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });
});
