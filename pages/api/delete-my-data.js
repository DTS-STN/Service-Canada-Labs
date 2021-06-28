import { connectToDatabase } from "../../lib/mongodb/connect";
import { deleteUser } from "../../lib/users/deleteUser";

export default async function handler(req, res) {
  // feature flag
  if (!process.env.USER_SIGNUP_ENABLED) {
    return res.status(200).end("NOT ENABLED");
  }
  const id = req.query.id || "";

  let errorTitle, errorTitleFr, errorMessage, errorMessageFr;

  let deleteUserObj;
  if (id) {
    const conn = await connectToDatabase(
      process.env.MONGO_URL,
      process.env.MONGO_DB
    );
    try {
      deleteUserObj = await deleteUser(conn.db, id);

      if (deleteUserObj.deletedCount === 1) {
        // TODO: create delete confirmation page
        return res.redirect("/home");
      }

      // if the record isn't deleted return an error
      return res.redirect(
        `/error?errorTitle=${errorTitle}&errorTitleFr=${errorTitleFr}&errorMessage=${errorMessage}&errorMessageFr=${errorMessageFr}`
      );
    } catch (e) {
      console.log(e);
      return res.redirect("/error");
    }
  }

  return res.redirect("/error");
}
