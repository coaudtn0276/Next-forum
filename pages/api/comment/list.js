import { connectDB } from "@/util/database";
import { ObjectId } from "mongodb";

export default async function handler(req, res) {
  //   console.log(req.query);
  if (req.method === "GET") {
    const db = (await connectDB).db("forum");
    const find = await db
      .collection("comment")
      .find({ parent: new ObjectId(req.query._id) })
      .toArray();

    console.log(find);

    return res.status(200).json(find);
  }
}
