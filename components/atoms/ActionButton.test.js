/**
 * @jest-environment jsdom
 */

import { act, fireEvent, render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import { axe, toHaveNoViolations } from "jest-axe";
import {
  Primary,
  Secondary,
  Supertask,
  Danger,
  Link,
} from "./ActionButton.stories";

expect.extend(toHaveNoViolations);

describe("Action Button", () => {
  let mockFn;
  beforeEach(() => {
    mockFn = jest.fn();
  });
  afterEach(() => {
    mockFn.mockRestore();
  });
  it("renders default", () => {
    render(<Primary {...Primary.args} />);
    expect(screen.getByRole("button")).toHaveTextContent(Primary.args.text);
  });

  it("renders with secondary colors", () => {
    render(<Secondary {...Secondary.args} />);
    expect(screen.getByRole("button")).toHaveTextContent(Secondary.args.text);
  });

  it("renders with tertiary colors", () => {
    render(<Supertask {...Supertask.args} />);
    expect(screen.getByRole("button")).toHaveTextContent(Supertask.args.text);
  });

  it("renders disabled", () => {
    render(<Danger {...Danger.args} />);
    expect(screen.getByRole("button")).toHaveTextContent(Danger.args.text);
  });

  it("renders link styles as button", () => {
    render(<Link {...Link.args} />);
    expect(screen.getByRole("button")).toHaveTextContent(Link.args.text);
    expect(screen.getByRole("button")).toHaveAttribute("href");
  });

  it("click can be executed with spacebar", () => {
    render(<Link {...Link.args} />);
    const inputElem = screen.getByRole("button");
    inputElem.click = mockFn;
    act(() => {
      fireEvent.keyDown(inputElem, { key: "Spacebar", code: "Spacebar" });
    });
    expect(mockFn.mock.calls.length).toBe(1);
    expect(global.window.location.pathname).toEqual("/");
  });

  it("has no a11y violations", async () => {
    const { container } = render(<Primary {...Primary.args} />);
    const results = await axe(container);

    expect(results).toHaveNoViolations();
  });
});
