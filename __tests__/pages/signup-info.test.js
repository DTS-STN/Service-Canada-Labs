/**
 * @jest-environment jsdom
 */
import { render, screen } from "@testing-library/react";
import SignupInfo from "../../pages/signup-info";

describe("About", () => {
  it("renders without crashing", () => {
    render(<SignupInfo />);
    expect(screen.getByText("skipToMainContentBtn")).toBeInTheDocument();
  });
});
