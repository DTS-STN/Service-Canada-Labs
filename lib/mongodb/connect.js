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

  // Create new connection from connection creator
  // Documentation suggests to use -1 to create a ttl index with no default ttl in CosmosDB. Document-level ttl will take precedence.
  // Only use -1 value in development and production environments as it throws an error with standard MongoDB clients
  cached.conn = await cached.promise;
  await cached.conn.db.collection("users").createIndexes([
    {
      key: { email: 1 },
      name: "email",
      unique: true,
    },
    {
      key: { _ts: 1 },
      expireAfterSeconds:
        process.env.ENVIRONMENT === "development" ||
        process.env.ENVIRONMENT === "production"
          ? -1
          : 0,
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
