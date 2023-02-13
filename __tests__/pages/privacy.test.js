/**
 * @jest-environment jsdom
 */
import { render, screen } from "@testing-library/react";
import Privacy from "../../pages/signup/privacy";
import { privacyPageData } from "../../__mocks__/mockStore";

describe("Privacy Policy", () => {
  it("renders without crashing", () => {
    render(<Privacy pageData={privacyPageData.data.scLabsPagev1ByPath} />);
    expect(
      screen.getByRole("heading", {
        name: "Comment retirer vos informations",
      })
    ).toBeInTheDocument();
  });
});
