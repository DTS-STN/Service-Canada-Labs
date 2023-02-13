/**
 * @jest-environment jsdom
 */
import { render } from "@testing-library/react";
import OasBenefitsEstimator from "../../pages/projects/oas-benefits-estimator/index";
import {
  dictionaryData,
  oasBenefitsEstimatorData,
} from "../../__mocks__/mockStore";

describe("OAS Benefits Estimator", () => {
  it("renders without crashing", () => {
    render(
      <OasBenefitsEstimator
        pageData={oasBenefitsEstimatorData.data.scLabsPagev1ByPath}
        dictionary={dictionaryData.data.dictionaryV1List}
      />
    );
  });
});
