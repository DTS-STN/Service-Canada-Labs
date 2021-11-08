/**
 * @jest-environment jsdom
 */
import { render, screen } from "@testing-library/react";
import NotSupported from "../../pages/notsupported";

describe("Browser not supported page", () => {
  it("renders without crashing", () => {
    render(<NotSupported />);
    expect(
      screen.getByText("Sorry, this site will not work with Internet Explorer")
    ).toBeInTheDocument();
  });
});
