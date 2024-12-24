// This file is responsible for handling the routes and disposing them

import express from "express";
import { insertNewPost, listAllPosts, uploadImage, updateNewPost } from "../controllers/postsController.js";
import multer from "multer";
import cors from "cors";

const corsOptions = {
    origin: "http://localhost:3000",
    optionsSuccessStatus: 200
}

// on Windows
const storage = multer.diskStorage({
    // Sets the destination directory for uploaded files
    destination: function (req, file, cb) {
        // Calls the callback with null (no error) and the directory "uploads/"
        cb(null, "uploads/");
    },
    // Sets the filename for the uploaded files in the destination directory
    filename: function (req, file, cb) {
        // Calls the callback with null (no error) and the original name of the file
        cb(null, file.originalname);
    }
});
const upload = multer({dest: "./uploads", storage}); // Multer instance with destiny folder

// Linux or Mac
// const upload = multer({dest: "./uploads"});

// Function that handles the routes.
const routes = (app) => {
    app.use(express.json()); // Express will use a JSON middleware
    app.use(cors(corsOptions)); // Express will use a CORS middleware

    // Defines the route for getting a resource (GET Method) and what it executes and returns
    app.get("/posts",listAllPosts);
    app.post("/posts", insertNewPost);
    app.post("/upload", upload.single("img"), uploadImage);
    app.put("/upload/:id", updateNewPost);
}

export default routes;