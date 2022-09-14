/**
 * @jest-environment jsdom
 */
import { render, screen } from "@testing-library/react";
import VirtualAssistant from "../../pages/projects/virtual-assistant/index";
import { virtualAssistantPageData } from "../../__mocks__/mockStore";

describe("Virtual Assistant", () => {
  it("renders without crashing", () => {
    render(
      <VirtualAssistant
        pageData={virtualAssistantPageData.data.sCLabsPageByPath}
      />
    );
    expect(
      screen.getByRole("heading", {
        name: "L’assistant virtuel",
      })
    ).toBeInTheDocument();
  });
});
