/**
 * @jest-environment jsdom
 */
import { render, screen } from "@testing-library/react";
import Home from "../../pages/home";
import { homePageData } from "../../__mocks__/mockStore";
import { experimentsData } from "../../__mocks__/mockStore";
import { dictionaryData } from "../../__mocks__/mockStore";
import { allUpdatesData } from "../../__mocks__/mockStore";
describe("Home", () => {
  it("renders without crashing", () => {
    render(
      <Home
        pageData={homePageData.data.sclabsPageV1List.items[0]}
        experimentsData={experimentsData.data.sclabsPageV1List.items}
        dictionary={dictionaryData.data.dictionaryV1List.items}
        updatesData={allUpdatesData.data.sclabsPageV1List.items}
      />
    );
    expect(
      screen.getByRole("heading", {
        name: "Laboratoires de Service Canada",
      })
    ).toBeInTheDocument();
  });
});
