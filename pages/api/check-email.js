import { connectToDatabase } from "../../lib/mongodb/connect";
import { getUserByEmail } from "../../lib/users/getUser";

export default async function handler(req, res) {
  const email = req.body;
  const conn = await connectToDatabase(
    process.env.MONGO_URL,
    process.env.MONGO_DB
  );
  console.log(email);

  try {
    let user = await getUserByEmail(conn.db, email);
    if (user === null || undefined) {
      return res.status(200).json({
        message: "User does not exist",
      });
    } else {
      return res.status(200).json({
        message: "User exists",
      });
    }
  } catch (e) {
    if (e.message.includes("key")) {
      return res.status(400).json({
        reason: "MongoError",
        message: e.message,
      });
    }
    return res.status(500).json({
      reason: "MongoError",
      message: e.message,
    });
  }
}
