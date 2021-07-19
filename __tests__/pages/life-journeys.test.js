/**
 * @jest-environment jsdom
 */
import { render, screen } from "@testing-library/react";
import Privacy from "../../pages/privacy";

describe("Life Journeys Prototype", () => {
  it("renders without crashing", () => {
    render(<Privacy />);
    expect(screen.getByText("lifeJourneysTitle")).toBeInTheDocument();
  });
});
