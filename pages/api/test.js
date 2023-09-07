import { connectDB } from "@/util/database";

export default async function handler(req, res) {
  const db = (await connectDB).db("forum");
  const result = await db.collection("post").find().toArray();
  const test = await db.collection("post");
  const date = new Date();

  const resContent = req.body;

  console.log(resContent.title);

  if (req.method == "GET") {
    res.status(200).json(result);
  }
  if (req.method === "POST") {
    res.status(200).json();
    test.insert({ title: resContent.title, content: resContent.content });
  }
}
