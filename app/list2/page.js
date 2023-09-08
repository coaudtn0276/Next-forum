import { connectDB } from "@/util/database";
import Link from "next/link";
import ListItem from "./ListItem";
// import DetailLink from "./DetailLink";

export const dynamic = "force-dynamic";

export const revalidate = 20;

export default async function List() {
  const db = (await connectDB).db("forum");
  const result = await db.collection("post").find().toArray();
  // const find = await db.collection("post").find({ title: "aaaaa" }).toArray();
  //   console.log(result[0].title);
  // console.log(find.length);

  return (
    <div className="list-bg">
      <ListItem result={result} />
    </div>
  );
}
