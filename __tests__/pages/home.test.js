/**
 * @jest-environment jsdom
 */
import { render, screen } from "@testing-library/react";
import Home from "../../pages/home";

describe("Home", () => {
  it("renders without crashing", () => {
    render(<Home />);
    expect(
      screen.getByText("experimentsAndExplorationTitle")
    ).toBeInTheDocument();
  });
});
