/**
 * @jest-environment jsdom
 */
import { render, screen } from "@testing-library/react";
import Privacy from "../../pages/signup/privacy";
import { privacyPageData } from "../../__mocks__/mockStore";

jest.mock("@apollo/client");

describe("Privacy Policy", () => {
  it("renders without crashing", () => {
    render(<Privacy pageData={privacyPageData.data.sCLabsPageByPath} />);
    expect(
      screen.getByRole("heading", {
        name: "Comment retirer vos informations",
      })
    ).toBeInTheDocument();
  });
});
