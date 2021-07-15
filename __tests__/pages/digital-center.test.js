/**
 * @jest-environment jsdom
 */
import { render, screen } from "@testing-library/react";
import DigitalCenter from "../../pages/projects/digital-center";

describe("Digital Center page", () => {
  it("renders without crashing", () => {
    render(<DigitalCenter />);
    expect(screen.getByText("OverviewTitle")).toBeInTheDocument();
  });
});
