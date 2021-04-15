import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import { Primary } from "./Header.stories";

it("renders header component in Primary state", () => {
  render(<Primary {...Primary.args} />);

  screen.getByAltText(Primary.args.headerLogoAltText);
});
