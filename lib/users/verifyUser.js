import { Db } from "mongodb"; //lgtm [js/unused-local-variable]

/**
 * A function to set the verification flag of a user to true
 * @param client {Db} - the database connection object
 * @param cuid {string} - the cuid of the user to set the verify flag
 * @returns {Promise<void>}
 */
export async function verifyUser(client, cuid) {
  return await client.collection("users").findOneAndUpdate(
    { cuid },
    {
      $set: {
        verified: true,
      },
      $unset: {
        expiryDate: "",
      },
    },
    {
      returnDocument: "after",
    }
  );
}
