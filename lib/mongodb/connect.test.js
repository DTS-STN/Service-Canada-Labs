import { connectToDatabase } from "./connect";

describe("connection code tests", () => {
  it("connects to MongoDB database with no error", async () => {
    await connectToDatabase(process.env.MONGO_URL, "testdb");
  });
});
