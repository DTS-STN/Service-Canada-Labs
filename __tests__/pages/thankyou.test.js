/**
 * @jest-environment jsdom
 */
import { render, screen } from "@testing-library/react";
import ThankYou from "../../pages/thankyou";
describe("ThankYou", () => {
  it("renders without crashing", () => {
    render(<ThankYou />);
    expect(screen.getByText("pleaseCheckYourEmail")).toBeInTheDocument();
  });
});
