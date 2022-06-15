/**
 * @jest-environment jsdom
 */
import { render, screen } from "@testing-library/react";
import NotSupported from "../../pages/notsupported";
import { notSupportedData } from "../../__mocks__/mockStore";

jest.mock("@apollo/client");

describe("Browser not supported page", () => {
  it("renders without crashing", () => {
    render(
      <NotSupported pageData={notSupportedData.data.scLabsErrorPageByPath} />
    );
    expect(
      screen.getByText("Sorry, this site will not work with Internet Explorer")
    ).toBeInTheDocument();
  });
});
