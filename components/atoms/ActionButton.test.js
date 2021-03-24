import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

import { Default, Secondary, Disabled } from "./ActionButton.stories";

it("renders default ActionButton", () => {
  render(<Default {...Default.args} />);
  expect(screen.getByRole("button")).toHaveTextContent(Default.args.text);
  expect(screen.getByRole("button")).toHaveClass(
    "bg-custom-blue-blue text-white border border-custom-blue-blue active:bg-custom-blue-dark hover:bg-custom-blue-light"
  );
});

it("renders ActionButton with secondary colors", () => {
  render(<Secondary {...Secondary.args} />);
  expect(screen.getByRole("button")).toHaveTextContent(Secondary.args.text);
  expect(screen.getByRole("button")).toHaveClass(
    "bg-white text-custom-blue-blue border border-custom-blue-blue active:bg-gray-400 hover:bg-gray-200"
  );
});

it("renders ActionButton disabled", () => {
  render(<Disabled {...Disabled.args} />);
  expect(screen.getByRole("button")).toHaveTextContent(Disabled.args.text);
  expect(screen.getByRole("button")).toHaveAttribute("disabled");
});
