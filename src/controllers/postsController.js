// This file is responsible for handling all the REQUESTS related to posts.
// It's an intermediaary between the routes and the models
import { getAllPosts, createPost } from "../models/postModel.js";
import fs from "fs";
export async function listAllPosts(req, res){
    const posts = await getAllPosts();
    // Server sends a OK status code as response
    res.status(200).json(posts);

}

export async function insertNewPost(req, res){
    const newPost = req.body; // Gets the post from the request body

    try {
        const createdPost = await createPost(newPost);
        res.status(201).json(createdPost);

    } catch (error) {
        console.error("Error creating post: ", error.message);
        res.status(500).json({ error: "Error creating post" });
    }
}

export async function uploadImage(req, res){
    const newPost = {
        description: "",
        imgUrl: req.file.originalname,
        alt: "",
    };

    try {
        const createdPost = await createPost(newPost);

        // Rename the uploaded file with the new name based on the inserted post ID
        const idInString = createdPost.insertedId.toString();
        const updatedImagePath = `uploads/${idInString}.png`;
        console.log(updatedImagePath);

        // renames the file from the temporary path to the new path
        fs.renameSync(req.file.path, updatedImagePath);
        res.status(201).json(createdPost);

    } catch (error) {
        console.error("Error creating post: ", error.message);
        res.status(500).json({ error: "Error creating post" });
    }
}