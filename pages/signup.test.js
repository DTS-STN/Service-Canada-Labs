/**
 * @jest-environment jsdom
 */
import { render, screen } from "@testing-library/react";
import Signup from "./signup";

describe("Signup", () => {
  it("renders without crashing", () => {
    render(<Signup />);
    expect(screen.getByText("signupTitle")).toBeInTheDocument();
  });
});
