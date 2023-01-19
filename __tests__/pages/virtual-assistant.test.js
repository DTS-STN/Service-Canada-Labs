/**
 * @jest-environment jsdom
 */
import { render, screen } from "@testing-library/react";
import VirtualAssistant from "../../pages/projects/virtual-assistant/index";
import {
  dictionaryData,
  virtualAssistantPageData,
} from "../../__mocks__/mockStore";
import { projectUpdates } from "../../__mocks__/mockStore";

describe("Virtual Assistant", () => {
  it("renders without crashing", () => {
    render(
      <VirtualAssistant
        pageData={virtualAssistantPageData.data.scLabsPagev1ByPath}
        projectUpdates={projectUpdates.data.scLabsPagev1ByPath}
        dictionary={dictionaryData.data.dictionaryV1List}
      />
    );
  });
});
