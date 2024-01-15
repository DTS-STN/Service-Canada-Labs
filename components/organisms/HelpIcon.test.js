import React from "react";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import { axe, toHaveNoViolations } from "jest-axe";
import { Default } from "./HelpIcon.stories";
import { HelpIcon } from "./HelpIcon";

expect.extend(toHaveNoViolations);

// TODO
// Add more tests for component behaviour

describe("HelpIcon", () => {
  it("renders HelpIcon without accessibility violations", async () => {
    const { container } = render(<HelpIcon {...Default.args} />);
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });
});
