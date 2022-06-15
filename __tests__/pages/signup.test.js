/**
 * @jest-environment jsdom
 */
import { render, screen } from "@testing-library/react";
import Signup from "../../pages/signup";
import { signupPage } from "../../__mocks__/mockStore";

jest.mock("@apollo/client");

describe("Signup", () => {
  it("renders without crashing", () => {
    render(<Signup pageData={signupPage.data.sclabsSignupList} />);
    expect(
      screen.getByRole("heading", {
        name: "Sign up to get invited to research sessions (Step 1 of 2)",
      })
    ).toBeInTheDocument();
  });
});
