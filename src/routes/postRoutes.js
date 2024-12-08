// This file is responsible for handling the routes and disposing them

import express from "express";
import { listAllPosts } from "../controllers/postsController.js";

// Function that handles the routes.
const routes = (app) => {
    app.use(express.json()); // Express will use a JSON middleware

    // Defines the route for getting a resource (GET Method) and what it executes and returns
    app.get("/posts",listAllPosts);
}

export default routes;