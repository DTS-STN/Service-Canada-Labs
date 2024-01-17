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
    expect(screen.getByRole("button")).toHaveClass(
      "flex flex-row px-[16px] py-[8px] text-multi-neutrals-white bg-specific-green-green50 hover:bg-specific-green-green70 focus:bg-sepcific-green-green70 rounded-sm focus:ring focus:ring-offset-4 undefined"
    );
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });

  it("renders primary", async () => {
    const { container } = render(<DSButton {...Primary.args} />);
    expect(screen.getByRole("button")).toHaveTextContent(Primary.args.text);
    expect(screen.getByRole("button")).toHaveClass(
      "flex flex-row px-[16px] py-[8px] text-multi-neutrals-white bg-multi-blue-blue70 hover:bg-multi-blue-blue60g focus:bg-multi-blue-blue60g rounded-sm focus:ring focus:ring-offset-4 undefined"
    );
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });

  it("renders secondary", async () => {
    const { container } = render(<DSButton {...Secondary.args} />);
    expect(screen.getByRole("button")).toHaveTextContent(Secondary.args.text);
    expect(screen.getByRole("button")).toHaveClass(
      "flex flex-row px-[16px] py-[8px] text-multi-blue-blue60b bg-multi-neutrals-grey30a hover:bg-multi-neutrals-grey50a focus:bg-multi-neutrals-grey60 rounded-sm focus:ring focus:ring-offset-4 undefined"
    );
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });

  it("renders danger", async () => {
    const { container } = render(<DSButton {...Danger.args} />);
    expect(screen.getByRole("button")).toHaveTextContent(Danger.args.text);
    expect(screen.getByRole("button")).toHaveClass(
      "flex flex-row px-[16px] py-[8px] text-multi-neutrals-white bg-specific-red-red50 hover:bg-specific-red-red70 focus:bg-specific-red-red70 rounded-sm focus:ring focus:ring-offset-4 undefined"
    );
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
