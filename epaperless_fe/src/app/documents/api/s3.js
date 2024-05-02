import { getSignedUrl } from "@/app/util/aws";

export default async function handler(req, res) {
  if (req.method === "POST") {
    const { objectName } = req.body;
    const url = getSignedUrl(objectName);
    res.status(200).json({ url });
  } else {
    res.status(405).json({ message: "Method not allowed" });
  }
}
