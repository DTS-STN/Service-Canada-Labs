/**
 * @jest-environment jsdom
 */
import { render, screen, act } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import { axe, toHaveNoViolations } from "jest-axe";
import { Primary } from "./Menu.stories";

expect.extend(toHaveNoViolations);

jest.mock("next/link", () => {
  return ({ children }) => {
    return children;
  };
});

describe("Menu", () => {
  it("renders the menu", () => {
    render(<Primary {...Primary.args} />);
    screen.getByTitle("Menu");
  });

  it("has no a11y violations", async () => {
    const { container } = render(<Primary {...Primary.args} />);
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });
});
