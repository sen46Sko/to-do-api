import { connect } from "../utils/db";

export const get = async () => {
  const db = await connect();
  const collection = await db?.collection("posts");

  if (!collection) {
    throw new Error();
  }

  const posts = await collection.find({}).toArray();

  return posts;
};
