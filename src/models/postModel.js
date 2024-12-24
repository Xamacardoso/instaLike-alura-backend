// This file is responsible for connecting with mongoDB and getting all posts
import { ObjectId } from "mongodb";
import connectDatabase from "../config/dbConfig.js";

// Connects with mongoDB using connection string
const dbConnection = await connectDatabase(process.env.CONNECTION_STRING);

// Function that returns all posts from mongoDB collection named "posts"
export async function getAllPosts(){
    const db = dbConnection.db("instaLikeDB");
    const collection = db.collection("posts");

    return collection.find().toArray();
}

// Function that creates a new post in mongoDB collection named "posts"
export async function createPost(newPost){
    const db = dbConnection.db("instaLikeDB");
    const collection = db.collection("posts");
    
    return collection.insertOne(newPost);
}

// Fucntion that updates a created post in mongoDB collection named "posts"
export async function updatePost(id, updatedPost){
    const db = dbConnection.db("instaLikeDB");
    const collection = db.collection("posts");
    const objId = ObjectId.createFromHexString(id);

    // Updates only the post with the required id
    return collection.updateOne({_id: new ObjectId(objId)}, {$set:updatedPost});
}