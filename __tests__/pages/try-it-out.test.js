/**
 * @jest-environment jsdom
 */
import { render, screen } from "@testing-library/react";
import TryVirtualAssistant from "../../pages/projects/virtual-assistant/try-it-out";
import { tryVirtualAssistantPageData } from "../../__mocks__/mockStore";

jest.mock("@apollo/client");

describe("Virtual Assistant", () => {
  it("renders without crashing", () => {
    render(
      <TryVirtualAssistant
        pageData={tryVirtualAssistantPageData.data.scLabsPagev1ByPath}
      />
    );
    expect(
      screen.getByRole("heading", {
        name: "Assistant Virtuel",
      })
    ).toBeInTheDocument();
  });
});
