import { connectDB } from "@/util/database";
import { ObjectId } from "mongodb";

export default async function Edit(props) {
  console.log(props.params.id);
  const db = (await connectDB).db("forum");
  const result = await db.collection("post").findOne({ _id: new ObjectId(props.params.id) });
  //   await db.collection("post").updateOne({ _id: new ObjectId(props.params.id) }, { $set: { title: "안녕" } });

  return (
    <div className="p-20">
      <h4>수정페이지</h4>
      <form action="/api/post/edit" method="POST">
        <input type="text" name="title" defaultValue={result.title} />
        <input type="text" name="content" defaultValue={result.content} />
        <input style={{ display: "none" }} type="text" name="_id" defaultValue={result._id.toString()} />
        <button type="submit">전송</button>
        {/* <button type="submit" name="_id" value={props.params.id}>
          전송
        </button> */}
      </form>
    </div>
  );
}
