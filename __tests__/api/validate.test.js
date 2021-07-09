import { createMocks } from "node-mocks-http";
import validateHandler from "../../pages/api/validate";
import { closeConnection, connectToDatabase } from "../../lib/mongodb/connect";

describe("validate api", () => {
  let conn;
  beforeAll(async () => {
    conn = await connectToDatabase(process.env.MONGO_URL, "testdbuservalidate");
  });
  beforeEach(() => {
    process.env.USER_SIGNUP_ENGLISH_TEMPLATE_ID = "english";
    process.env.USER_SIGNUP_FRENCH_TEMPLATE_ID = "french";
    process.env.MONGO_DB = "testdbuservalidate";
  });
  afterEach(async () => {
    delete process.env.MONGO_DB;
    delete process.env.USER_SIGNUP_ENABLED;
    await conn.db.collection("users").deleteMany();
  });
  afterAll(async () => {
    await closeConnection();
  });
  it("returns a redirect to the confirmation page if successful", async () => {
    process.env.USER_SIGNUP_ENABLED = true;

    let user = await conn.db.collection("users").insertOne({
      cuid: "somecuid",
      language: "en",
      email: "email@email.com",
      other: "content",
    });
    expect(user).not.toBeNull();
    const { req, res } = createMocks({
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Origin: "http://localhost:3000",
      },
      query: {
        id: "somecuid",
      },
    });
    await validateHandler(req, res);
    expect(res._getRedirectUrl()).toBe("/confirmation?ref=signup");
  });

  it("returns 500 error if cuid can't be found", async () => {
    process.env.USER_SIGNUP_ENABLED = true;
    const { req, res } = createMocks({
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Origin: "http://localhost:3000",
      },
      query: {
        id: "wrongcuid",
      },
    });
    await validateHandler(req, res);
    expect(res._getRedirectUrl()).toBe("/500");
  });

  it("returns 500 error if no cuid in request", async () => {
    process.env.USER_SIGNUP_ENABLED = true;
    const { req, res } = createMocks({
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Origin: "http://localhost:3000",
      },
      query: {
        id: undefined,
      },
    });
    await validateHandler(req, res);
    expect(res._getRedirectUrl()).toBe("/500");
  });
});
