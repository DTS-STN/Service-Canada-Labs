/**
 * @jest-environment jsdom
 */
import { render, screen } from "@testing-library/react";
import Error404 from "../../pages/404";

describe("404", () => {
  it("renders without crashing", () => {
    render(<Error404 />);
    expect(
      screen.getByRole("heading", { name: "We couldn't find that page" })
    ).toBeInTheDocument();
  });
});
