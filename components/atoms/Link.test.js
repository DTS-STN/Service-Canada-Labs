import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import { axe, toHaveNoViolations } from "jest-axe";
import {
  Default,
  RegularLinkwithEmphasis,
  FooterBlueLink,
  TitleLink,
  CardActionLink,
  BreadcrumbsLink,
} from "./Link.stories";
import { Link } from "./Link";

expect.extend(toHaveNoViolations);

describe("Link", () => {
  let mockFn;
  beforeEach(() => {
    mockFn = jest.fn();
  });
  afterEach(() => {
    mockFn.mockRestore();
  });
  it("renders regular style link", () => {
    render(<Link {...Default.args} />);
    expect(screen.getByText("Regular Link")).toHaveTextContent(
      Default.args.text
    );
    expect(screen.getByRole("link")).toHaveClass(
      "underline text-multi-blue-blue70b font-body text-browserh5 leading-33px hover:text-multi-blue-blue50b"
    );
    expect(screen.getByLabelText(Default.args.text)).toBeInTheDocument();
  });

  it("renders regular link with emphasis", () => {
    render(<Link {...RegularLinkwithEmphasis.args} />);
    expect(screen.getByText("Regular link with Emphasis")).toHaveTextContent(
      RegularLinkwithEmphasis.args.text
    );
    expect(screen.getByRole("link")).toHaveClass(
      "underline text-multi-blue-blue70b font-body text-browserh5 font-bold text-mobileh5 leading-33px hover:text-multi-blue-blue50b"
    );
    expect(
      screen.getByLabelText(RegularLinkwithEmphasis.args.text)
    ).toBeInTheDocument();
  });

  it("renders Title link", () => {
    render(<Link {...TitleLink.args} />);
    expect(screen.getByText("Title Link")).toHaveTextContent(
      TitleLink.args.text
    );
    expect(screen.getByRole("link")).toHaveClass(
      "underline text-multi-blue-blue70b font-header text-browserh5 leading-23px font-bold hover:text-multi-blue-blue50b"
    );
    expect(screen.getByLabelText(TitleLink.args.text)).toBeInTheDocument();
  });

  it("renders Card Action link", () => {
    render(<Link {...CardActionLink.args} />);
    expect(screen.getByText("Card Action Link")).toHaveTextContent(
      CardActionLink.args.text
    );
    expect(screen.getByRole("link")).toHaveClass(
      "text-multi-blue-blue70b font-body text-browserh5 underline leading-28px font-regular hover:text-multi-blue-blue50b"
    );
    expect(screen.getByLabelText(CardActionLink.args.text)).toBeInTheDocument();
  });

  it("renders Small link - Footer Blue", () => {
    render(<Link {...FooterBlueLink.args} />);
    expect(screen.getByText("Small link - Footer blue")).toHaveTextContent(
      FooterBlueLink.args.text
    );
    expect(screen.getByRole("link")).toHaveClass(
      "text-multi-blue-blue70b font-body leading-20px text-browserh7 hover:underline"
    );
    expect(screen.getByLabelText(FooterBlueLink.args.text)).toBeInTheDocument();
  });

  it("renders breadcrumb link", () => {
    render(<Link {...BreadcrumbsLink.args} />);
    expect(
      screen.getByText("Small link - Breadcrumbs & French toggle")
    ).toHaveTextContent(BreadcrumbsLink.args.text);
    expect(screen.getByRole("link")).toHaveClass(
      "text-multi-blue-blue70b font-body text-browserh8 leading-23px font-regular hover:text-multi-blue-blue50b"
    );
    expect(
      screen.getByLabelText(BreadcrumbsLink.args.text)
    ).toBeInTheDocument();
  });
  it("has no a11y violations", async () => {
    const { container } = render(<Default {...Default.args} />);
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });
});
