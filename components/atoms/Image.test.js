import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import { axe, toHaveNoViolations } from "jest-axe";
import {
  Default,
  Mobile,
  DefaultWithRounded,
  MobileWithRounded,
} from "./Image.stories";
import { Image } from "./Image";

expect.extend(toHaveNoViolations);

describe("Image", () => {
  it("renders default image", async () => {
    const { container } = render(<Image {...Default.args} />);
    expect(screen.getByAltText("Default Image"));
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });

  it("renders mobile image", async () => {
    const { container } = render(<Image {...Mobile.args} />);
    expect(screen.getByAltText("Mobile Image"));
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });

  it("renders default image with rounded corner", async () => {
    const { container } = render(<Image {...DefaultWithRounded.args} />);
    expect(screen.getByAltText("Default Image with rounded")).toHaveClass(
      "rounded"
    );
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });

  it("renders mobile image with rounded", async () => {
    const { container } = render(<Image {...MobileWithRounded.args} />);
    expect(screen.getByAltText("Mobile Image with rounded")).toHaveClass(
      "rounded"
    );
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });
});
