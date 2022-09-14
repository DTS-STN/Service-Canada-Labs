import e from "cors";
import aemServiceInstance from "../../services/aemServiceInstance";

export default async function handler(req, res) {
  // Check for secret to confirm this is a valid request
  if (req.query.secret !== process.env.REVALIDATION_TOKEN) {
    return res.status(401).json({ message: "Invalid token" });
  }

  const routes = req.query?.routes?.split(",") || [];

  if (!routes?.length || !routes.every((route) => route.startsWith("/"))) {
    return res
      .status(500)
      .send(
        "Pass in valid routes to revalidate, separated by a comma and no whitespaces"
      );
  }

  try {
    aemServiceInstance.flush();
    await Promise.all(routes.map((route) => res.revalidate(route)));
    return res.json({ revalidated: true });
  } catch (err) {
    // If there was an error, Next.js will continue
    // to show the last successfully generated page
    console.log(err);
    return res.status(500).json({
      msg: e.message,
    });
  }
}
