import { connectToDatabase } from "../../lib/mongodb/connect";
import { verifyUser } from "../../lib/users/verifyUser";

export default async function handler(req, res) {
  // feature flag
  if (!process.env.USER_SIGNUP_ENABLED) {
    return res.status(200).end("NOT ENABLED");
  }
  const id = req.query.id || "";

  let verifyUserObj;
  if (id) {
    const conn = await connectToDatabase(
      process.env.MONGO_URL,
      process.env.MONGO_DB
    );
    try {
      verifyUserObj = await verifyUser(conn.db, id);
      if (!verifyUserObj.value) {
        // TODO: need a better way to display errors
        return res.redirect("/404");
      }
      if (verifyUserObj.value.verified) {
        return res.redirect("/validate");
      } else {
        // TODO: need a better way to display errors
        return res.redirect("/404");
      }
    } catch (e) {
      console.log(e);
      // TODO: need a better way to display errors
      return res.redirect("/404");
    }
  }

  // TODO: need a better way to display errors
  res.status(400);
  return res.redirect("/validate");
}
