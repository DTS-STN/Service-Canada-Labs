import { connectToDatabase } from "../mongodb/connect";
import { verifyUser } from "./verifyUser";
import cuid from "cuid";

describe("verifyUser", () => {
  let userToUpdate;
  let cUID;
  let db;
  beforeAll(async () => {
    cUID = cuid();
    const conn = await connectToDatabase(
      process.env.MONGO_URL,
      "testdbverifyuser"
    );
    db = conn.db;
    userToUpdate = await db
      .collection("users")
      .insertOne({ email: "email@email.com", cuid: cUID, verified: false });
  });
  afterAll(async () => {
    await db.dropDatabase();
  });
  it("verify user", async () => {
    const receivedUser = await verifyUser(db, cUID);
    expect(receivedUser.value._id.toString()).toEqual(
      userToUpdate.insertedId.toString()
    );
    expect(receivedUser.value.verified).toBe(true);
  });
  it("returns null when there is no user", async () => {
    const recievedUser = await verifyUser(db, "somenonexistantid");
    expect(recievedUser.value).toBeNull();
  });
});
