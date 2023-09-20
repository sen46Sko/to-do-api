import { MongoClient } from "mongodb";

const client = new MongoClient("mongodb+srv://<Sergiy>:<123qweqwe->@cluster0.scxduzq.mongodb.net/");

let connection;

export const connect = async () => {
  try {
    connection = await client.connect();
    const db = connection.db("todos");
    return db;
  } catch (error) {}
};
