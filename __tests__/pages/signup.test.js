/**
 * @jest-environment jsdom
 */
import { render, screen } from "@testing-library/react";
import Signup from "../../pages/signup";
import { signupPage } from "../../__mocks__/mockStore";

describe("Signup", () => {
  it("renders without crashing", () => {
    render(<Signup pageData={signupPage.data.scLabsPagev1ByPath} />);
    expect(
      screen.getByRole("heading", {
        name: "S’inscrire pour être invité aux séances de recherche (étape 1 sur 2)",
      })
    ).toBeInTheDocument();
  });
});
