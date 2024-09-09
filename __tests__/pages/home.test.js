/**
 * @jest-environment jsdom
 */
import { render, screen } from "@testing-library/react";
import Home from "../../pages/home";
import { homePageData } from "../../__mocks__/mockStore";
import { experimentsData } from "../../__mocks__/mockStore";

describe("Home", () => {
  it("renders without crashing", () => {
    render(
      <Home
        pageData={homePageData.data.sclabsPageV1ByPath}
        experimentsData={experimentsData.data.scLabsPagev1List.items}
      />,
    );
    expect(
      screen.getByRole("heading", {
        name: "Laboratoires de Service Canada",
      }),
    ).toBeInTheDocument();
  });
});
