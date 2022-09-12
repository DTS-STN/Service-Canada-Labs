import aemServiceInstance from "../../services/aemServiceInstance";

const getPromise = async (promise) => {
  return Promise.resolve().then(() => promise);
};

const callTasks = async (promises) => {
  try {
    const promise = await getPromise(promises.shift());

    if (!promises.length) {
      return promise;
    }

    return callTasks(promises);
  } catch (err) {
    console.error(err.message);

    return promise;
  }
};

export default async function handler(req, res) {
  // Check for secret to confirm this is a valid request
  if (req.query.secret !== process.env.REVALIDATION_TOKEN) {
    return res.status(401).json({ message: "Invalid token" });
  }

  const routes = req.query?.routes?.split(",") || [];

  if (!routes?.length) {
    return res.status(500).send("Pass in routes to revalidate");
  }

  try {
    aemServiceInstance.flush();
    await callTasks(routes.map((route) => res.revalidate(route)));
    return res.json({ revalidated: true });
  } catch (err) {
    // If there was an error, Next.js will continue
    // to show the last successfully generated page
    console.log(err);
    return res.status(500).send("Error revalidating");
  }
}
