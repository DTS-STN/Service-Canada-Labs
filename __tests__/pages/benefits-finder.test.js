import { render } from "@testing-library/react";
import BenefitsFinderOverview from "../../pages/projects/benefits-finder/index";
import {
  dictionaryData,
  experimentsData,
  benefitsNavigatorUpdatesData,
} from "../../__mocks__/mockStore";
import { benefitsFinderMock } from "../../__mocks__/benefits-finder.mockdata.js";

describe("Benefits Finder", () => {
  it("renders without crashing", () => {
    render(
      <BenefitsFinderOverview
        pageData={benefitsFinderMock.data.sclabsPageV1ByPath}
        updatesData={benefitsNavigatorUpdatesData}
        dictionary={dictionaryData.data.dictionaryV1List.items}
        allProjects={experimentsData.data.scLabsPagev1List.items}
      />
    );
  });
});
