/**
 * @jest-environment jsdom
 */
import { render, screen } from "@testing-library/react";
import Confirmation from "../../pages/confirmation";
describe("Confirmation", () => {
  it("renders without crashing", () => {
    render(<Confirmation />);
    expect(screen.getByText("emailConfirmationTitle")).toBeInTheDocument();
  });
});
