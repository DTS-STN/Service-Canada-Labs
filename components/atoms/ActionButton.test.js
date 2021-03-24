import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import { axe, toHaveNoViolations } from "jest-axe";
import { Default, Secondary, Disabled } from "./ActionButton.stories";

expect.extend(toHaveNoViolations);

describe("Action Button", () => {
  it("renders default", () => {
    render(<Default {...Default.args} />);
    expect(screen.getByRole("button")).toHaveTextContent(Default.args.text);
    expect(screen.getByRole("button")).toHaveClass(
      "bg-custom-blue-blue text-white border border-custom-blue-blue active:bg-custom-blue-dark hover:bg-custom-blue-light"
    );
  });

  it("renders with secondary colors", () => {
    render(<Secondary {...Secondary.args} />);
    expect(screen.getByRole("button")).toHaveTextContent(Secondary.args.text);
    expect(screen.getByRole("button")).toHaveClass(
      "bg-white text-custom-blue-blue border border-custom-blue-blue active:bg-gray-400 hover:bg-gray-200"
    );
  });

  it("renders disabled", () => {
    render(<Disabled {...Disabled.args} />);
    expect(screen.getByRole("button")).toHaveTextContent(Disabled.args.text);
    expect(screen.getByRole("button")).toHaveAttribute("disabled");
  });

  it("has no a11y violations", async () => {
    const { container } = render(<Default {...Default.args} />);
    const results = await axe(container);

    expect(results).toHaveNoViolations();
  });
});
