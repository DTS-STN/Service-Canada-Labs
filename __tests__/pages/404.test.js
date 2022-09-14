/**
 * @jest-environment jsdom
 */
import { render, screen } from "@testing-library/react";
import Error404 from "../../pages/404";
import { error404Page } from "../../__mocks__/mockStore";

describe("404", () => {
  it("renders without crashing", () => {
    render(<Error404 pageData={error404Page.data.scLabsErrorPageByPath} />);
    expect(
      screen.getByRole("heading", { name: "We couldn't find that page" })
    ).toBeInTheDocument();
  });
});
