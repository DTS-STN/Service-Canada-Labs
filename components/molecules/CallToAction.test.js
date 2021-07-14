/**
 * @jest-environment jsdom
 */
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import { Primary } from "./CallToAction.stories";
import { axe, toHaveNoViolations } from "jest-axe";

expect.extend(toHaveNoViolations);

describe("CallToAction", () => {
  it("renders component correctly", () => {
    render(<Primary {...Primary.args} />);
    screen.getByText(Primary.args.title);
    screen.getByText(Primary.args.descriptionP1);
    screen.getByText(Primary.args.descriptionP2);
    screen.getByText(Primary.args.hrefText);
    screen.getByText("privacyLinkText");
  });

  it("has no accessibility violations", async () => {
    const { container } = render(<Primary {...Primary.args} />);
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });
});
