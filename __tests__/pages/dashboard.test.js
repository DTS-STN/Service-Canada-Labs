import { render } from "@testing-library/react";
import MscaDashboard from "../../pages/projects/dashboard/index";
import {
  dictionaryData,
  dashboardData,
  experimentsData,
  dashboardUpdatesData,
} from "../../__mocks__/mockStore";

describe("MSCA Dashboard", () => {
  it("renders without crashing", () => {
    render(
      <MscaDashboard
        pageData={dashboardData.data.sclabsPageV1ByPath}
        updatesData={dashboardUpdatesData}
        dictionary={dictionaryData.data.dictionaryV1List.items}
        allProjects={experimentsData.data.scLabsPagev1List.items}
      />,
    );
  });
});
