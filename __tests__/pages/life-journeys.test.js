/**
 * @jest-environment jsdom
 */
import { render, screen } from "@testing-library/react";
import HavingAChild from "../../pages/projects/life-journeys";
import { havingAChildPageData } from "../../__mocks__/mockStore";

describe("Having A Child", () => {
  it("renders without crashing", () => {
    render(
      <HavingAChild pageData={havingAChildPageData.data.scLabsPagev1ByPath} />
    );
    expect(
      screen.getByRole("heading", {
        name: "Avoir un enfant",
      })
    ).toBeInTheDocument();
  });
});
