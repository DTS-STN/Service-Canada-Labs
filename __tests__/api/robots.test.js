import { createMocks } from "node-mocks-http";
import handler from "../../pages/api/robots";
import validateHandler from "../../pages/api/validate";

describe("robots api", () => {
  afterEach(async () => {
    delete process.env.ENVIRONMENT;
  });

  it("renders the development robots.txt", async () => {
    process.env.ENVIRONMENT = "development";
    const { req, res } = createMocks({
      method: "GET",
    });
    await handler(req, res);
    expect(res._getData()).toBe("User-agent: *\nDisallow: /\n");
  });

  it("renders the production robots.txt", async () => {
    process.env.ENVIRONMENT = "production";
    const { req, res } = createMocks({
      method: "GET",
    });
    await handler(req, res);
    expect(res._getData()).toBe(
      "User-agent: *\nDisallow: /api\nDisallow: /projects/*\nDisallow: /confirmation.js\nDisallow: /thankyou.js\nDisallow: /notsupported.js\nDisallow: /about.js\n"
    );
  });
});
