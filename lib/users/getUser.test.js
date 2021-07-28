import { closeConnection, connectToDatabase } from "../mongodb/connect";
import { getUserByCUID, getUserByEmail, getVerifiedUsers } from "./getUser";
import cuid from "cuid";

describe("getUser functions", () => {
  let userToGet;
  let cUID, cuid2, cuid3;
  let db;
  let connectClient;
  beforeAll(async () => {
    cUID = cuid();
    cuid2 = cuid();
    cuid3 = cuid();
    const conn = await connectToDatabase(
      process.env.MONGO_URL,
      "testdbgetuser"
    );
    db = conn.db;
    connectClient = conn;
    userToGet = await db
      .collection("users")
      .insertOne({ email: "email@email.com", verified: true, cuid: cUID });
  });
  afterAll(async () => {
    await db.dropDatabase();
    await closeConnection();
  });
  it("gets user by cuid", async () => {
    const receivedUser = await getUserByCUID(db, cUID);
    expect(receivedUser._id.toString()).toEqual(
      userToGet.insertedId.toString()
    );
  });

  it("gets user by email", async () => {
    const receivedUser = await getUserByEmail(db, "email@email.com");
    expect(receivedUser._id.toString()).toEqual(
      userToGet.insertedId.toString()
    );
  });

  it("returns null when record is not found", async () => {
    expect(await getUserByCUID(db, "55153a8014829a865bbf700de")).toBeNull();
  });

  it("gets verified users", async () => {
    await db.collection("users").insertMany([
      { email: "email2@email.com", verified: true, cuid: cuid2 },
      { email: "email3@email.com", verified: false, cuid: cuid3 },
    ]);
    const users = (await getVerifiedUsers(db)).toArray();
    expect(users.length === 2);
  });
});
