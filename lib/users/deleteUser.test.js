import { closeConnection, connectToDatabase } from "../mongodb/connect";
import { deleteUser } from "./deleteUser";
import cuid from "cuid";

describe("deleteUser functions", () => {
  let users;
  let cUID1, cUID2;
  let db;
  let connectClient;

  beforeAll(async () => {
    cUID1 = cuid();
    cUID2 = cuid();
    const conn = await connectToDatabase(
      process.env.MONGO_URL,
      "testdbdeleteuser"
    );
    db = conn.db;
    connectClient = conn;
    users = await db.collection("users").insertMany([
      { email: "email@email.com", cuid: cUID1 },
      { email: "another@email.com", cuid: cUID2 },
    ]);
  });

  afterAll(async () => {
    await db.dropDatabase();
    await closeConnection();
  });

  it("delete user by cuid", async () => {
    const deleteResult = await deleteUser(db, cUID1);
    expect(deleteResult.deletedCount).toEqual(1);
  });
});
