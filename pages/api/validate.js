import { connectToDatabase } from "../../lib/mongodb/connect";
import { verifyUser } from "../../lib/users/verifyUser";

export default async function handler(req, res) {
  // feature flag
  /* istanbul ignore next */
  if (!process.env.USER_SIGNUP_ENABLED) {
    return res.status(200).end("NOT ENABLED");
  }

  const id = req.query.id || "";
  const lang = req.query.lang || "";

  let verifyUserObj;
  if (id) {
    const conn = await connectToDatabase(
      process.env.MONGO_URL,
      process.env.MONGO_DB
    );
    try {
      verifyUserObj = await verifyUser(conn.db, id);

      // if the id can't be found in mongo return an error
      if (!verifyUserObj.value) {
        return res.redirect("/500");
      }

      // if the object returned is verified, redirect to the confirmation page
      let redirectLink = "/confirmation";
      if (verifyUserObj.value.verified) {
        if (lang === "fr") {
          redirectLink = "/fr/confirmation";
        }
        return res.redirect(redirectLink);
      }
    } catch (e) {
      console.log(e);
      return res.redirect("/500");
    }
  }

  return res.redirect("/500");
}
