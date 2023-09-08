import { connectDB } from "@/util/database";
import { ObjectId } from "mongodb";

export default async function handler(req, res) {
  //   console.log(req.body === "64f5e345cc748670aeac4c08");
  // console.log(req.query._id);
  console.log(req.query);

  if (req.method === "GET") {
    const db = (await connectDB).db("forum");
    const result = await db.collection("post").deleteOne({ _id: new ObjectId(req.query._id) });
    console.log(result);
    return res.status(200).json("삭제완료");
  }
}
