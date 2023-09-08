import { connectDB } from "@/util/database";
import { ObjectId } from "mongodb";

export default async function handler(req, res) {
  console.log(req.body);
  const filter = { title: req.body.title, content: req.body.content };

  if (req.method === "POST") {
    const db = (await connectDB).db("forum");
    await db.collection("post").updateOne({ _id: new ObjectId(req.body._id) }, { $set: filter });
    return res.redirect(302, "/list");
  }
}
