/**
 * @jest-environment jsdom
 */
import { render, screen } from "@testing-library/react";
import LifeJourneys from "../../pages/projects/life-journeys";

describe("Life Journeys Prototype", () => {
  it("renders without crashing", () => {
    render(<LifeJourneys />);
    expect(screen.getByText("lifeJourneysTitle")).toBeInTheDocument();
  });
});
