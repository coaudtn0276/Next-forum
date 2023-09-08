import { connectDB } from "@/util/database";
import { ObjectId } from "mongodb";
import { getServerSession } from "next-auth";
import { authOptions } from "../auth/[...nextauth]";

export default async function handler(req, res) {
  //   console.log(req.body === "64f5e345cc748670aeac4c08");
  // console.log(req.query._id);
  // console.log(req.query);

  const db = (await connectDB).db("forum");
  const filter = await db.collection("post").findOne({ _id: new ObjectId(req.query._id) });
  // console.log(filter.author);
  const userEmail = filter.author;

  const session = await getServerSession(req, res, authOptions);
  // console.log(session.user.email);

  if (req.method === "GET") {
    if (session.user.email === userEmail) {
      const result = await db.collection("post").deleteOne({ _id: new ObjectId(req.query._id) });
      // console.log(result);
      return res.status(200).json("삭제완료");
    } else {
      return res.status(300).json("삭제실패");
    }
  }
}
