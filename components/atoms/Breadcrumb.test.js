/**
 * @jest-environment jsdom
 */
import { fireEvent, render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import { axe, toHaveNoViolations } from "jest-axe";
import { Primary, WithItems } from "./Breadcrumb.stories";

expect.extend(toHaveNoViolations);

jest.mock("next/link", () => {
  return ({ children }) => {
    return children;
  };
});

describe("BreadCrumb", () => {
  it("renders primary", () => {
    const primary = render(<Primary {...Primary.args} />);
    expect(primary).toBeTruthy();
  });

  it("renders breadcrumb with items", () => {
    render(<WithItems {...WithItems.args} />);

    WithItems.args.items.forEach((value) => {
      screen.getByText(value.text);
    });
  });

  it("has no a11y violations", async () => {
    const { container } = render(<Primary {...Primary.args} />);
    const results = await axe(container);

    expect(results).toHaveNoViolations();
  });
});
