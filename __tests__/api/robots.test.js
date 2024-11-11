import { createMocks } from "node-mocks-http";
import handler from "../../pages/api/robots";

describe("robots api", () => {
  afterEach(async () => {
    delete process.env.NODE_ENV;
  });

  it("renders the development robots.txt", async () => {
    process.env.NODE_ENV = "development";
    const { req, res } = createMocks({
      method: "GET",
    });
    await handler(req, res);
    expect(res._getData()).toBe("User-agent: *\nDisallow: /\n");
  });

  it("renders the production robots.txt", async () => {
    process.env.NODE_ENV = "production";
    const { req, res } = createMocks({
      method: "GET",
    });
    await handler(req, res);
    expect(res._getData()).toBe(
      "User-agent: *\nDisallow: /api\nDisallow: /projects/*\nDisallow: /notsupported.js\nDisallow: /rsdc-demander\n"
    );
  });
});
