import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import { axe, toHaveNoViolations } from "jest-axe";
import { Primary } from "./Breadcrumb.stories";

expect.extend(toHaveNoViolations);

describe("BreadCrumb", () => {
  it("renders primary", () => {
    render(<Primary {...Primary.args} />);
  });

  it("has no a11y violations", async () => {
    const { container } = render(<Primary {...Primary.args} />);
    const results = await axe(container);

    expect(results).toHaveNoViolations();
  });
});
