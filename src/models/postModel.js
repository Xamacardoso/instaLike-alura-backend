// This file is responsible for connecting with mongoDB and getting all posts
import connectDatabase from "../config/dbConfig.js";

// Connects with mongoDB using connection string
const dbConnection = await connectDatabase(process.env.CONNECTION_STRING);

// Function that returns all posts from mongoDB collection named "posts"
export async function getAllPosts(){
    const db = dbConnection.db("instaLikeDB");
    const collection = db.collection("posts");

    return collection.find().toArray();
}
