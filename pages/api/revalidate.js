const REVALIDATION_ROUTES = [
  "/404",
  "/500",
  "/about",
  "/blog",
  "/confirmation",
  "/error",
  "/home",
  "/",
  "/notsupported",
  "/projects",
  "/signup-info",
  "/signup",
  "/signup/privacy",
  "/thankyou",
  "/unsubscribe",
  "/projects",
];

export default async function handler(req, res) {
  // Check for secret to confirm this is a valid request
  if (req.query.secret !== process.env.REVALIDATION_TOKEN) {
    return res.status(401).json({ message: "Invalid token" });
  }

  try {
    await Promise.all(
      REVALIDATION_ROUTES.map((route) => res.revalidate(route))
    );
    return res.json({ revalidated: true });
  } catch (err) {
    // If there was an error, Next.js will continue
    // to show the last successfully generated page
    console.log(err);
    return res.status(500).send("Error revalidating");
  }
}
