import { connectDB } from "@/util/database";

export default async function List() {
  const db = (await connectDB).db("forum");
  const result = await db.collection("post").find().toArray();
  //   console.log(result[0].title);

  return (
    <div className="list-bg">
      {result.map((el, idx) => {
        return (
          <div className="list-item" key={idx}>
            <h4>{el.title}</h4>
            <p>1월 1일</p>
          </div>
        );
      })}
    </div>
  );
}
