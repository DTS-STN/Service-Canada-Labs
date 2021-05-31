import { createMocks } from "node-mocks-http";
import validate from "./joi";
import Joi from "joi";

describe("validation middleware tests", () => {
  let mockHandler;
  beforeEach(() => {
    mockHandler = jest.fn((req, res) => {
      res.status(200).end();
    });
  });
  afterEach(() => {
    mockHandler.mockRestore();
  });
  it("returns error object if body is not valid", async () => {
    const { req, res } = createMocks({
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: {
        email: "not a valid email",
        test: "testing",
      },
    });

    const handler = validate(
      Joi.object({
        email: Joi.string().email().required(),
        test: Joi.string().email().required(),
      }),
      mockHandler,
      { abortEarly: false }
    );
    await handler(req, res);
    expect(res._getStatusCode()).toEqual(400);
    expect(res._getJSONData().error.length).toBe(2);
  });
});
