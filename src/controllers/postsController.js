// This file is responsible for handling all the REQUESTS related to posts.
// It's an intermediaary between the routes and the models
import { getAllPosts } from "../models/postModel.js";

export async function listAllPosts(req, res){
    const posts = await getAllPosts();
    // Server sends a OK status code as response
    res.status(200).json(posts);

}