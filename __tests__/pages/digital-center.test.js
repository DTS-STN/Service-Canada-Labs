/**
 * @jest-environment jsdom
 */
import { render, screen } from "@testing-library/react";
import DigitalCentre from "../../pages/projects/digital-centre";
import { digitalCentrePageData } from "../../__mocks__/mockStore";

describe("Digital Centre", () => {
  it("renders without crashing", () => {
    render(
      <DigitalCentre pageData={digitalCentrePageData.data.scLabsPagev1ByPath} />
    );
    expect(
      screen.getByRole("heading", {
        name: "Aperçu du Centre numérique de Service Canada",
      })
    ).toBeInTheDocument();
  });
});
