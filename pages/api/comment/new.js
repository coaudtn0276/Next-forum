import { connectDB } from "@/util/database";
import { ObjectId } from "mongodb";
import { getServerSession } from "next-auth";
import { authOptions } from "../auth/[...nextauth]";

export default async function handler(req, res) {
  // console.log(JSON.parse(req.body));
  const session = await getServerSession(req, res, authOptions);

  if (req.method === "POST") {
    console.log(session.user.email);
    req.body = JSON.parse(req.body);
    const data = {
      content: req.body.comment,
      parent: ObjectId(req.body._id),
      author: session.user.email,
    };

    const db = (await connectDB).db("forum");
    await db.collection("comment").insertOne(data);
    res.status(200).json("저장성공");
  }
}
