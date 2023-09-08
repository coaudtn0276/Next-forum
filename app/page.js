import { connectDB } from "@/util/database";

// export const revalidate = 60

export default async function Home() {
  const db = (await connectDB).db("forum");
  const result = await db.collection("post").find().toArray();
  // console.log(result);

  // await fetch('/url',{next:{revalidate:60}})

  return <div>안녕</div>;
}
