import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import { axe, toHaveNoViolations } from "jest-axe";
import { Primary } from "./FilterExperiments.stories";

expect.extend(toHaveNoViolations);

describe("Filter Experiments", () => {
  it("renders Primary", () => {
    render(<Primary {...Primary.args} />);
    expect(screen.getByRole("radio")).toHaveTextContent(Primary.args.options[0].text);
    expect(screen.getByRole("radio")).toHaveTextContent(Primary.args.options[1].text);
    expect(screen.getByRole("radio")).toHaveTextContent(Primary.args.options[2].text);
  });

  it("has no a11y violations", async () => {
    const { container } = render(<Primary {...Primary.args} />);
    const results = await axe(container);

    expect(results).toHaveNoViolations();
  });
});
