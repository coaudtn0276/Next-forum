import { connectDB } from "@/util/database";
import { getServerSession } from "next-auth";
import { authOptions } from "../auth/[...nextauth]";

export default async function handler(req, res) {
  const session = await getServerSession(req, res, authOptions);
  // console.log(session.user.email);
  if (session) {
    req.body.author = session.user.email;
  }
  console.log(req.body);
  if (req.method === "POST") {
    console.log(req.body);
    const db = (await connectDB).db("forum");
    const find = await db.collection("post").find({ title: req.body.title }).toArray();

    if (req.body.title === "") {
      return res.status(500).json("제목이 없습니다.");
    }
    if (find.length > 0) {
      return res.status(500).json("제목이 같아요");
    }

    const result = await db.collection("post").insertOne(req.body);
    return res.redirect(302, "/list");

    // console.log(req.body);
  }
}
