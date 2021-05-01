import fetchMock from "fetch-mock";
import { submitEmail } from "./submitEmail";

describe("reportAProblem/submitEmail", () => {
  afterEach(() => {
    fetchMock.restore();
  });

  it("posts data to notify and returns the response", async () => {
    fetchMock.postOnce("/v2/notifications/email", {
      status: 200,
      body: {
        someResponse: "hello",
      },
      headers: {
        "Content-Type": "application/json",
      },
    });

    const data = await submitEmail(
      {
        incorrect_information: "yes",
        incorrect_information_details: "hello",
      },
      "some-template-id",
      "email@email.com",
      "/v2/notifications/email",
      "some-key"
    );

    expect(data[0]).toBe(200);
    expect(data[1]).toEqual({ someResponse: "hello" });

    const requestData = JSON.parse(fetchMock.lastOptions().body);

    expect(requestData).toEqual({
      email_address: "email@email.com",
      template_id: "some-template-id",
      personalisation: {
        page_name: "unknown",
        language: "unknown",
        incorrect_information: "yes",
        incorrect_information_details: "hello",
        unclear_information: "no",
        unclear_information_details:
          "No unclear information was reported on the page.",
        info_not_found: "no",
        info_not_found_details:
          "The user did not report not being able to find what they were looking for.",
        adaptive_technology: "no",
        adaptive_technology_details:
          "The user did not report any issues with adaptive technologies accommodation.",
        privacy_issues: "no",
        privacy_issues_details: "The user did not report any privacy issues",
        no_where_else_to_go: "no",
        no_where_else_to_go_details:
          "The user did not report not knowing where to provide feedback",
        other: "no",
        other_details:
          "There is no unspecified issues that the user would like to report",
      },
    });
  });
});
