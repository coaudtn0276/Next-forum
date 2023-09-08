import { connectDB } from "@/util/database";

export default async function handler(req, res) {
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
