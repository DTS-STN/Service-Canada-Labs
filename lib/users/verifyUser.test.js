import { closeConnection, connectToDatabase } from "../mongodb/connect";
import { verifyUser } from "./verifyUser";
import cuid from "cuid";

describe("verifyUser", () => {
  let userToUpdate;
  let cUID;
  let db;
  let connectClient;

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
    await closeConnection();
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

  it("removes expiry date when verifying", async () => {
    const receivedUser = await verifyUser(db, cUID);

    expect(receivedUser.value.expiryDate).toBe(undefined);
  });
});
