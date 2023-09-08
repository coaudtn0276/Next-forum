import { connectDB } from "@/util/database";
import { MongoDBAdapter } from "@next-auth/mongodb-adapter";
import NextAuth from "next-auth";
import GithubProvider from "next-auth/providers/github";

export const authOptions = {
  providers: [
    GithubProvider({
      clientId: "0fb429188328763d4b82",
      clientSecret: "e85b31e1fe4a5cad2a782ffe3c5db17e13d9ac51",
    }),
  ],
  secret: "aaaa5555",
  adapter: MongoDBAdapter(connectDB),
};
export default NextAuth(authOptions);
