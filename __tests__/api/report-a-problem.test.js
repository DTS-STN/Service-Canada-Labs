import { createMocks } from "node-mocks-http";
import handler from "../../pages/api/report-a-problem";
import { submitEmail } from "../../lib/notify/submitEmail";

jest.mock("../../lib/notify/submitEmail");

describe("report a problem api", () => {
  beforeEach(() => {
    submitEmail.mockRestore();
    console.error = jest.fn();
  });
  afterEach(() => {
    delete process.env.REPORT_A_PROBLEM_ENABLED;
  });
  it("returns a 200 response when notify returns 201 response", async () => {
    process.env.REPORT_A_PROBLEM_ENABLED = true;
    submitEmail.mockResolvedValue([201, { data: "some data" }]);
    const { req, res } = createMocks({
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded;charset=UTF-8",
        Referer: "http://localhost:3000/",
      },
      body: "language=en&incorrectInformationCheckBox=true",
    });

    await handler(req, res);

    expect(res._getStatusCode()).toBe(200);
  });

  it("returns a 200 response when report a problem is not enabled without calling notify", async () => {
    submitEmail.mockResolvedValue([201, { data: "some data" }]);
    const { req, res } = createMocks({
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded;charset=UTF-8",
        Referer: "http://localhost:3000/",
      },
      body: {
        language: "en",
        incorrect_information: true,
      },
    });

    await handler(req, res);

    expect(res._getStatusCode()).toBe(200);
    expect(submitEmail.mock.calls.length).toBe(0);
  });

  it("returns a 500 response for any other status code", async () => {
    process.env.REPORT_A_PROBLEM_ENABLED = true;
    submitEmail.mockResolvedValue([400, { data: "some data" }]);
    const { req, res } = createMocks({
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded;charset=UTF-8",
        Referer: "http://localhost:3000/",
      },
      body: "language=en&incorrectInformationCheckBox=true",
    });

    await handler(req, res);

    expect(res._getStatusCode()).toBe(500);
  });

  it("returns a 500 response when an error is thrown by submitEmail", async () => {
    process.env.REPORT_A_PROBLEM_ENABLED = true;
    submitEmail.mockImplementationOnce((...args) => {
      throw new Error("some error");
    });
    const { req, res } = createMocks({
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded;charset=UTF-8",
        Referer: "http://localhost:3000/",
      },
      body: "language=en&incorrectInformationCheckBox=true",
    });

    await handler(req, res);

    expect(res._getStatusCode()).toBe(500);
  });

  it("does not call submitEmail when data submitted does not have more than one key", async () => {
    process.env.REPORT_A_PROBLEM_ENABLED = true;
    submitEmail.mockResolvedValue([201, { data: "some data" }]);
    const { req, res } = createMocks({
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded;charset=UTF-8",
        Referer: "http://localhost:3000/",
      },
      body: {
        language: "en",
      },
    });

    await handler(req, res);

    expect(res._getStatusCode()).toBe(200);
    expect(submitEmail.mock.calls.length).toBe(0);
  });
});
