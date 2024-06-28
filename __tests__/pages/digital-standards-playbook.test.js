import { render } from "@testing-library/react";
import DigitalStandardsPlaybookPage from "../../pages/projects/digital-standards-playbook/index";
import {
  dictionaryData,
  playbookData,
  experimentsData,
  playbookUpdatesData,
} from "../../__mocks__/mockStore";

describe("Digital Standards Playbook", () => {
  it("renders without crashing", () => {
    render(
      <DigitalStandardsPlaybookPage
        pageData={playbookData.data.sclabsPageV1ByPath}
        updatesData={playbookUpdatesData}
        dictionary={dictionaryData.data.dictionaryV1List.items}
        allProjects={experimentsData.data.scLabsPagev1List.items}
      />,
    );
  });
});
