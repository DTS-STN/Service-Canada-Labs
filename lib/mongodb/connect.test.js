import { connectToDatabase } from "./connect";

describe("connection code tests", () => {
  it("connects to MongoDB database with no error", async () => {
    let conn = await connectToDatabase(process.env.MONGO_URL, "testdb");
    await conn.client.close();
  });
});
