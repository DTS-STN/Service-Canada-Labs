import { render } from "@testing-library/react";
import OasBenefitsEstimator from "../../pages/projects/oas-benefits-estimator/index";
import {
  dictionaryData,
  oasBenefitsEstimatorData,
  oasUpdatesData,
  experimentsData,
} from "../../__mocks__/mockStore";

describe("OAS Benefits Estimator", () => {
  it("renders without crashing", () => {
    render(
      <OasBenefitsEstimator
        pageData={oasBenefitsEstimatorData.data.sclabsPageV1ByPath}
        updatesData={oasUpdatesData}
        dictionary={dictionaryData.data.dictionaryV1List}
        allProjects={experimentsData.data.scLabsPagev1List.items}
      />
    );
  });
});
