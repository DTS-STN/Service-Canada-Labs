import { postFeedbackToGcNotify } from "../../lib/notify/postFeedbackToGcNotify";
import handler from "../../pages/api/submit-feedback";
import { createMocks } from "node-mocks-http";

jest.mock("../../lib/notify/postFeedbackToGcNotify");

describe("Feeback widget api tests", () => {
  beforeEach(() => {
    postFeedbackToGcNotify.mockRestore();
  });

  it("it should post to GC Notify", async () => {
    postFeedbackToGcNotify.mockReturnValue(
      new Promise((resolve) => resolve({ ok: true }))
    );
    const { req, res } = createMocks({
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: {
        page: "/home",
        "what-was-wrong": "input-field-name",
      },
    });
    await handler(req, res);
    expect(res._getStatusCode()).toBe(200);
    expect(JSON.parse(res._getData())).toEqual({
      page: "/home",
      "what-was-wrong": "input-field-name",
    });
  });

  it("it should error if required field isn't included", async () => {
    const { req, res } = createMocks({
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: {
        page: "/home",
      },
    });
    await handler(req, res);
    expect(res._getStatusCode()).toBe(400);
    expect(JSON.parse(res._getData())).toEqual({
      message: "required field missing",
    });
  });

  it("it should error if there was a bad post request", async () => {
    postFeedbackToGcNotify.mockReturnValue(
      new Promise((resolve) => resolve({ ok: false }))
    );
    const { req, res } = createMocks({
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: {
        page: "/home",
        "what-was-wrong": "input-field-name",
      },
    });
    await handler(req, res);
    expect(res._getStatusCode()).toBe(500);
    expect(JSON.parse(res._getData())).toEqual({
      message: "something went wrong",
    });
  });
});
