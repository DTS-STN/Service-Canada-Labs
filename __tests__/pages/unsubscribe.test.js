/**
 * @jest-environment jsdom
 */
import { render, screen } from "@testing-library/react";
import Unsubscribe from "../../pages/unsubscribe";
describe("Unsubscribe", () => {
  it("renders without crashing", () => {
    render(<Unsubscribe />);
    expect(screen.getByText("unsubscribe")).toBeInTheDocument();
  });
});
