import { MongoClient } from "mongodb";

/**
 * Global is used here to maintain a cached connection across hot reloads
 * in development. This prevents connections growing exponentially
 * during API Route usage.
 */
let cached = global.mongo;

if (!cached) {
  cached = global.mongo = { conn: null, promise: null };
}

/**
 * function which establishes or returns cached connection to mongo database
 * @param mongoURI - the uri for the mongo db
 * @param mongoDB - the database to use
 * @returns {Promise<null>}
 */
export async function connectToDatabase(mongoURI, mongoDB) {
  // if there already exists a connection use this connection and return it
  if (cached.conn) {
    return cached.conn;
  }

  //  if there is no connection creator instantiate this
  if (!cached.promise) {
    const opts = {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    };

    cached.promise = MongoClient.connect(mongoURI, opts).then((client) => {
      // construct the DBO client
      const db = client.db(mongoDB);

      return { client, db };
    });
  }

  // create new connection from connection creator
  // Azure CosmoDB does not support partial indexes by default, but hopefully the do support sparse indexes
  // Similarly, the TTL index in CosmoDB is different than default Mongo so this might not work locally
  // TTL in CosmosDB needs an end time and can store an int32. Max for int32 is 2147483647, which turns into about 68 years
  // We are still setting a per document TTL, which gets removed when the email is verified, but after 68 years,
  // it will still be removed from the database because CosmosDB needs the TTL index to do per document TTL.
  cached.conn = await cached.promise;
  await cached.conn.db.collection("users").createIndexes([
    {
      key: { email: 1 },
      name: "email",
      unique: true,
    },
    {
      key: { _ts: 1 },
      // expireAfterSeconds: process.env.NODE_ENV === "test" ? 0 : 2147483647,
      expireAfterSeconds: process.env.NODE_ENV === "test" ? 0 : 3600,
    },
  ]);
  return cached.conn;
}

export async function closeConnection() {
  if (cached.conn) {
    await cached.conn.db.close();
    await cached.conn.client.close();
    cached.conn = null;
    cached.promise = null;
  }
}
