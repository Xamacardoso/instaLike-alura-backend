import express from "express";
import routes from "./src/routes/postRoutes.js";


// Creates an instance of an Express application. Represents the server
const app = express();
routes(app); // Disposes the routes for the users


// Makes server start in the desired port, and executes a function at start
app.listen(8010, () => {
    console.log(`Server is listening...`);
});

// app.get("/posts/:id", (req, res) => {
//     // Picks the index of the post that has the required id 
//     const index = searchPostById(req.params.id); 
//     // Check if the post exists
//     if (index !== -1) { 
//         res.status(200).json(posts[index]); }
//     else {
//         res.status(404).json({ error: "Post not found" }); } })

// function searchPostById(id) {
//     return posts.findIndex((post) => {
//         return post.id === Number(id);
//     });
// }