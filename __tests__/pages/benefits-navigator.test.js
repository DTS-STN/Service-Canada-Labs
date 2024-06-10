import { render } from "@testing-library/react";
import BenefitsNavigatorOverview from "../../pages/projects/benefits-navigator/index";
import {
  dictionaryData,
  benefitsNavigatorData,
  experimentsData,
  benefitsNavigatorUpdatesData,
} from "../../__mocks__/mockStore";

describe("Benefits Navigator", () => {
  it("renders without crashing", () => {
    render(
      <BenefitsNavigatorOverview
        pageData={benefitsNavigatorData.data.sclabsPageV1ByPath}
        updatesData={benefitsNavigatorUpdatesData}
        dictionary={dictionaryData.data.dictionaryV1List}
        allProjects={experimentsData.data.scLabsPagev1List.items}
      />
    );
  });
});
