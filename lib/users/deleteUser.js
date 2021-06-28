import { Db } from "mongodb"; //lgtm [js/unused-local-variable]

/**
 * A function used to create a user
 * @param client {Db} - the connection object for the database
 * @param cuid {string} - the cuid for the user
 * @returns {Promise<Collection.insertWriteOpResult>}
 */
export async function deleteUser(client, cuid) {
  return await client.collection("users").deleteOne({
    cuid: cuid,
  });
}
