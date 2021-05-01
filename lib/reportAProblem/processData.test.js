import { processData } from "./processData";

describe("reportAProblem/processData", () => {
  it("correctly process data to notify format", () => {
    const testData = {
      incorrectInformationCheckBox: "checkbox",
      incorrectInformationTextField: "some text",
      language: "en",
    };

    const returnedData = processData(testData);

    expect(returnedData).toEqual({
      incorrect_information: "yes",
      incorrect_information_details: "some text",
      language: "en",
    });
  });
});
