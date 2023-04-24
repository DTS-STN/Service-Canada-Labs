import { createMocks } from "node-mocks-http";
import csvHandler from "../../pages/api/generate-csv";
import { closeConnection, connectToDatabase } from "../../lib/mongodb/connect";
import { submitEmailWithAttachment } from "../../lib/notify/submitEmail";

jest.mock("../../lib/notify/submitEmail");

describe("csv api", () => {
  let conn;

  beforeAll(async () => {
    conn = await connectToDatabase(process.env.MONGO_URL, "testdbuservalidate");
  });

  beforeEach(async () => {
    jest.spyOn(console, "log").mockImplementation(() => {});
    submitEmailWithAttachment.mockRestore();
    process.env.USER_CSV_TEMPLATE_ID = "csv";
    process.env.MONGO_DB = "testdbuservalidate";
    process.env.CSV_AUTH_KEY = "testsecretkey";
    process.env.NEXT_PUBLIC_NOTIFY_REPORT_A_PROBLEM_EMAIL =
      "some.test@email.com";

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
    delete process.env.CSV_AUTH_KEY;
    delete process.env.NEXT_PUBLIC_NOTIFY_REPORT_A_PROBLEM_EMAIL;
    await conn.db.collection("users").deleteMany();
  });

  afterAll(async () => {
    await closeConnection();
  });

  it("gets a 403 error without authorization", async () => {
    const { req, res } = createMocks({
      method: "POST",
      headers: {
        Origin: "http://localhost:3000",
      },
    });

    await csvHandler(req, res);
    expect(res._getStatusCode()).toBe(403);
  });

  it("sends the csv", async () => {
    const { req, res } = createMocks({
      method: "POST",
      headers: {
        Origin: "http://localhost:3000",
        Authorization: process.env.CSV_AUTH_KEY,
      },
    });

    await csvHandler(req, res);
    expect(res._getStatusCode()).toBe(201);
  });
});
