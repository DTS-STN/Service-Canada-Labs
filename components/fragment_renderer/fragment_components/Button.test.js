import React from "react";
import { render, screen } from "@testing-library/react";
import Button from "./Button";
import { Primary } from "./Button.stories.js";
import { Secondary } from "./Button.stories.js";
import { axe, toHaveNoViolations } from "jest-axe";

expect.extend(toHaveNoViolations);

describe("Button", () => {
  test("renders Button component with Primary props", async () => {
    const { container } = render(<Button {...Primary.args} />);
    expect(screen.getByText("Primary Button")).toBeInTheDocument();
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });
  test("renders Button component with Secondary props", async () => {
    const { container } = render(<Button {...Secondary.args} />);
    expect(screen.getByText("Secondary Button")).toBeInTheDocument();
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });
});
