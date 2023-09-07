import { connectDB } from "@/util/database";
import Link from "next/link";
// import DetailLink from "./DetailLink";

export default async function List() {
  const db = (await connectDB).db("forum");
  const result = await db.collection("post").find().toArray();
  const find = await db.collection("post").find({ title: "aaaaa" }).toArray();
  //   console.log(result[0].title);
  console.log(find.length);

  return (
    <div className="list-bg">
      {result.map((el, idx) => {
        return (
          <div className="list-item" key={idx}>
            <Link prefetch={false} href={`/detail/${el._id}`}>
              <h4>{el.title}</h4>
            </Link>
            <p>1월 1일</p>
          </div>
        );
      })}
    </div>
  );
}
