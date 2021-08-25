import { createMocks } from "node-mocks-http";
import feedbackHandler from "../../pages/api/feedback";
import { submitEmail } from "../../lib/notify/submitEmail";

jest.mock("../../lib/notify/submitEmail");

describe("feedback api", () => {
  beforeEach(() => {
    submitEmail.mockRestore();
    process.env.USER_FEEDBACK_TEMPLATE_ID = "feedback";
    process.env.NEXT_PUBLIC_NOTIFY_REPORT_A_PROBLEM_EMAIL =
      "some.test@email.com";
  });

  afterEach(async () => {
    delete process.env.USER_FEEDBACK_TEMPLATE_ID;
    delete process.env.NEXT_PUBLIC_NOTIFY_REPORT_A_PROBLEM_EMAIL;
  });

  it("returns a 201 if successful", async () => {
    submitEmail.mockResolvedValue([201, { data: "some data" }]);
    const { req, res } = createMocks({
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: {
        project: "some project",
        pageUrl: "https://www.someurl.com",
        feedback: "some feedback",
      },
    });
    await feedbackHandler(req, res);
    expect(res._getStatusCode()).toBe(201);
    expect(res._getData()).toBe("FEEDBACK SUBMITTED");
  });

  it("returns a 405 when performing a GET", async () => {
    const { req, res } = createMocks({
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
      body: {
        project: "some project",
        pageUrl: "https://www.someurl.com",
        feedback: "some feedback",
      },
    });
    await feedbackHandler(req, res);
    expect(res._getStatusCode()).toBe(405);
    expect(res._getHeaders()).toStrictEqual({
      "access-control-allow-origin": "*",
      allow: ["POST"],
    });
  });

  it("returns 400 when missing data", async () => {
    const { req, res } = createMocks({
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: {},
    });
    await feedbackHandler(req, res);
    const resData = res._getJSONData();
    expect(res._getStatusCode()).toBe(400);
    expect(resData.error).not.toBeNull();
    expect(resData.error.length).toBe(3);
  });

  it("returns 400 when url is not a valid url", async () => {
    const { req, res } = createMocks({
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: {
        project: "some project",
        pageUrl: "some bad url",
        feedback: "some feedback",
      },
    });
    await feedbackHandler(req, res);
    const resData = res._getJSONData();
    expect(res._getStatusCode()).toBe(400);
    expect(resData.error).not.toBeNull();
    expect(resData.error.length).toBe(1);
  });

  it("returns a 500 if Notify fails", async () => {
    submitEmail.mockResolvedValue([
      500,
      { error: "Notify encountered an error" },
    ]);
    const { req, res } = createMocks({
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: {
        project: "some project",
        pageUrl: "https://www.someurl.com",
        feedback: "some feedback",
      },
    });
    await feedbackHandler(req, res);
    expect(res._getStatusCode()).toBe(500);
    expect(res._getData()).toBe(
      JSON.stringify({
        reason: "Notify",
        explanation:
          "Notify failed to send the validation email: " +
          JSON.stringify({ error: "Notify encountered an error" }),
      })
    );
  });
});
