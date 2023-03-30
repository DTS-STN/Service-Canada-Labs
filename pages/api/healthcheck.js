// TODO: add checks for the status of the CMS
export default function handler(req, res) {
  res.status(200).json({ message: "Status OK" });
}
