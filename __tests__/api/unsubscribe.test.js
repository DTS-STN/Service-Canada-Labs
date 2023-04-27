import { createMocks } from "node-mocks-http";
import unsubscribeHandler from "../../pages/api/unsubscribe";
import { closeConnection, connectToDatabase } from "../../lib/mongodb/connect";
import { submitEmail } from "../../lib/notify/submitEmail";

jest.mock("../../lib/notify/submitEmail");

describe("unsubscribe api", () => {
  let conn;

  beforeAll(async () => {
    conn = await connectToDatabase(process.env.MONGO_URL, "testdbuservalidate");
  });

  beforeEach(async () => {
    submitEmail.mockRestore();
    process.env.USER_UNSUBSCRIBE_ENGLISH_TEMPLATE_ID = "english";
    process.env.USER_UNSUBSCRIBE_FRENCH_TEMPLATE_ID = "french";
    process.env.MONGO_DB = "testdbuservalidate";

    await conn.db.collection("users").insertMany([
      {
        cuid: "somecuid1",
        language: "en",
        email: "email1@email.com",
        yearOfBirth: 1990,
      },
      {
        cuid: "somecuid2",
        language: "en",
        email: "email2@email.com",
        yearOfBirth: 1984,
      },
    ]);
  });

  afterEach(async () => {
    delete process.env.MONGO_DB;
    delete process.env.USER_SIGNUP_ENABLED;
    await conn.db.collection("users").deleteMany();
  });

  afterAll(async () => {
    await closeConnection();
  });

  it("generates an unsubscribe link and sends it in an email", async () => {
    process.env.USER_SIGNUP_ENABLED = true;
    submitEmail.mockResolvedValue([201, { data: "some data" }]);
    const { req, res } = createMocks({
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Origin: "http://localhost:3000",
      },
      body: {
        language: "en",
        email: "email1@email.com",
      },
    });

    await unsubscribeHandler(req, res);
    // console.log(submitEmail.mock.calls);
    expect(res._getStatusCode()).toBe(201);
    expect(res._getData()).toBe("USER UNSUBSCRIBE EMAIL SENT");
    expect(submitEmail.mock.calls[0]).toContainEqual({
      unsubscribe_url:
        "http://localhost:3000/api/unsubscribe?id=somecuid1&lang=en",
      unsubscribe_page_url: "http://localhost:3000/unsubscribe",
    });
  });

  it("unsubscribes the user", async () => {
    process.env.USER_SIGNUP_ENABLED = true;
    const { req, res } = createMocks({
      method: "GET",
      headers: {
        Origin: "http://localhost:3000",
      },
      query: {
        id: "somecuid1",
      },
    });

    await unsubscribeHandler(req, res);
    const user = await conn.db
      .collection("users")
      .findOne({ cuid: "somecuid1" });
    expect(res._getStatusCode()).toBe(302);
    expect(Object.keys(user).length === 2);
  });
});
