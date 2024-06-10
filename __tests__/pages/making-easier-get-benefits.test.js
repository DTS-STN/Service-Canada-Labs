import { render } from "@testing-library/react";
import IntegratedChannelStrategyPage from "../../pages/projects/making-easier-get-benefits/index";
import {
  dictionaryData,
  ICSData,
  experimentsData,
  ICSUpdatesData,
} from "../../__mocks__/mockStore";

describe("Integrated Channel Strategy", () => {
  it("renders without crashing", () => {
    render(
      <IntegratedChannelStrategyPage
        pageData={ICSData.data.sclabsPageV1ByPath}
        updatesData={ICSUpdatesData}
        dictionary={dictionaryData.data.dictionaryV1List}
        allProjects={experimentsData.data.scLabsPagev1List.items}
      />
    );
  });
});
