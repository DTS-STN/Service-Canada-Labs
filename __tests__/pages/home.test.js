/**
 * @jest-environment jsdom
 */
import { render, screen } from "@testing-library/react";
import Home from "../../pages/home";
import { homePageData } from "../../__mocks__/mockStore";

jest.mock("@apollo/client");

describe("Home", () => {
  it("renders without crashing", () => {
    render(<Home pageData={homePageData.data.sCLabsPageByPath} />);
    expect(
      screen.getByRole("heading", {
        name: "Service Canada Labs(FR)",
      })
    ).toBeInTheDocument();
  });
});
