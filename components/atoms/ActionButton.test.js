import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

import { Default, Secondary, Disabled } from "./ActionButton.stories";

it("renders default ActionButton", () => {
  render(<Default {...Default.args} />);
  expect(screen.getByRole("button")).toHaveTextContent(Default.args.text);
  expect(screen.getByRole("button")).toHaveClass(
    "bg-custom-blue-100 text-white border border-blue-600 hover:bg-custom-blue-200"
  );
});

it("renders ActionButton with secondary colors", () => {
  render(<Secondary {...Secondary.args} />);
  expect(screen.getByRole("button")).toHaveTextContent(Secondary.args.text);
  expect(screen.getByRole("button")).toHaveClass(
    "bg-white text-custom-blue-100 border border-custom-blue-100 hover:bg-gray-200"
  );
});

it("renders ActionButton disabled", () => {
  render(<Disabled {...Disabled.args} />);
  expect(screen.getByRole("button")).toHaveTextContent(Disabled.args.text);
  expect(screen.getByRole("button")).toHaveAttribute("disabled");
});
