/**
 * @jest-environment jsdom
 */

import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import { axe, toHaveNoViolations } from "jest-axe";
import {
  Primary,
  Secondary,
  Danger,
  Link,
  Supertask,
} from "./DSButton.stories";
import { DSButton } from "./DSButton";

expect.extend(toHaveNoViolations);

describe("DSButton", () => {
  it("renders supertask", async () => {
    const { container } = render(<DSButton {...Supertask.args} />);
    expect(screen.getByRole("button")).toHaveTextContent(Supertask.args.text);
    expect(screen.getByRole("button")).toHaveClass("btn-supertask");
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });

  it("renders primary", async () => {
    const { container } = render(<DSButton {...Primary.args} />);
    expect(screen.getByRole("button")).toHaveTextContent(Primary.args.text);
    expect(screen.getByRole("button")).toHaveClass("btn-primary");
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });

  it("renders secondary", async () => {
    const { container } = render(<DSButton {...Secondary.args} />);
    expect(screen.getByRole("button")).toHaveTextContent(Secondary.args.text);
    expect(screen.getByRole("button")).toHaveClass("btn-secondary");
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });

  it("renders danger", async () => {
    const { container } = render(<DSButton {...Danger.args} />);
    expect(screen.getByRole("button")).toHaveTextContent(Danger.args.text);
    expect(screen.getByRole("button")).toHaveClass("btn-danger");
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });

  it("renders link styles as button", async () => {
    const { container } = render(<DSButton {...Link.args} />);
    expect(screen.getByRole("button")).toHaveTextContent(Link.args.text);
    expect(screen.getByRole("button")).toHaveAttribute("href");
    expect(screen.getByRole("button")).toHaveClass("btn-link");
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });
});
