/**
 * @jest-environment jsdom
 */
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import { axe, toHaveNoViolations } from "jest-axe";
import { Primary } from "./VirtualConcierge.stories";

expect.extend(toHaveNoViolations);

describe("Virtual Concierge", () => {
  it("renders the page with some text", () => {
    render(<Primary {...Primary.args} />);
    screen.findByText(Primary.args.vcImageAltText);
    screen.findByText(Primary.args.description);
    screen.findByText(Primary.args.description1);
    screen.findByText(Primary.args.description2);
    screen.findByText(Primary.args.dataTestId);
  });

  //   it("renders the page with some items", () => {
  //     render(<Primary {...Primary.args} />);
  //     Primary.args.items.forEach((value) => {
  //       screen.getByText(value);
  //     });
  //   });

  it("has no a11y violations", async () => {
    const { container } = render(<Primary {...Primary.args} />);
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });
});
