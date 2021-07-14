import { connectToDatabase, closeConnection } from "../mongodb/connect";
import { createUser } from "./createUser";
import cuid from "cuid";
import { MongoError } from "mongodb";
jest.mock("cuid");

describe("test user creation", () => {
  let db;
  let connectClient;
  beforeAll(async () => {
    const conn = await connectToDatabase(
      process.env.MONGO_URL,
      "testdbcreateuser"
    );
    db = conn.db;
    connectClient = conn;
  });
  beforeEach(async () => {
    await db.collection("users").deleteMany();
  });
  afterEach(() => {
    cuid.mockRestore();
  });
  afterAll(async () => {
    await db.dropDatabase();
    await closeConnection();
  });

  it("creates a new user successfully", async () => {
    cuid.mockImplementationOnce(() => "ckp7kjqao0000c7p9e8osgyaq");
    let createdUser = await createUser(db, "email@email.com", {
      test: "hello",
      hello: "hi",
    });
    const queriedUser = await db
      .collection("users")
      .findOne({ cuid: "ckp7kjqao0000c7p9e8osgyaq" });
    expect(queriedUser._id.toString()).toEqual(
      createdUser.insertedId.toString()
    );
  });

  it("cannot insert users with the same email", async () => {
    cuid.mockImplementationOnce(() => "ckp7kjqao0000c7p9e8osgyan");
    let createdUser = await createUser(db, "email@email.com", {
      test: "hello",
      hello: "hi",
    });
    try {
      await createUser(db, "email@email.com", { test: "hello", hello: "hi" });
      fail("did not throw error");
    } catch (e) {
      expect(e).toBeInstanceOf(MongoError);
    }
  });

  it("sets the expiry date to 24 hours from the created date", async () => {
    cuid.mockImplementationOnce(() => "ckp7kjqao0000c7p9e8osgyaq");
    let createdUser = await createUser(db, "email@email.com", {
      test: "hello",
      hello: "hi",
    });
    const now = new Date();
    const ttlDate = new Date(createdUser.ops[0].ttl);
    expect(ttlDate.getFullYear()).toEqual(now.getFullYear());
    expect(ttlDate.getDay()).toEqual(now.getDay() + 1);
    expect(ttlDate.getHours()).toEqual(now.getHours());
    expect(ttlDate.getMinutes()).toEqual(now.getMinutes());
  });
});
