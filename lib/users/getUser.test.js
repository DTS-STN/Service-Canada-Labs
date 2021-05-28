import { connectToDatabase } from "../mongodb/connect";
import { getUserByCUID, getUserByEmail } from "./getUser";
import cuid from "cuid";

describe("getUser functions", () => {
  let userToGet;
  let cUID;
  let db;
  beforeAll(async () => {
    cUID = cuid();
    const conn = await connectToDatabase(
      process.env.MONGO_URL,
      "testdbgetuser"
    );
    db = conn.db;
    userToGet = await db
      .collection("users")
      .insertOne({ email: "email@email.com", cuid: cUID });
  });
  afterAll(async () => {
    await db.dropDatabase();
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
});
