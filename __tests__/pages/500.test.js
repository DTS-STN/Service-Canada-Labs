/**
 * @jest-environment jsdom
 */
import { render, screen } from "@testing-library/react";
import Error500 from "../../pages/500";
import { error500Page } from "../../__mocks__/mockStore";

jest.mock("@apollo/client");

describe("500", () => {
  it("renders without crashing", () => {
    render(<Error500 pageData={error500Page.data.scLabsErrorPageByPath} />);
    expect(
      screen.getByRole("heading", {
        name: "The web site has reported an error. Please try again later.",
      })
    ).toBeInTheDocument();
  });
});
