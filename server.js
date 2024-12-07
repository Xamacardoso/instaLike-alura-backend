import express from "express";


const posts = [
    {
        id: 1,
        description: "A test image",
        image: "https://placecats.com/millie/300/150",
    },
    {
        id: 2,
        description: "Another test image",
        image: "https://placecats.com/neo/300/150",
    },
    {
        id: 3,
        description: "A sister of a test image",
        image: "https://placecats.com/millie_neo/300/200",
    },
    {
        id: 4,
        description: "Another sister of test image",
        image: "https://placecats.com/neo_banana/300/150",
    },
    {
        id: 5,
        description: "A cousin of a test image",
        image: "https://placecats.com/neo_2/300/150",
    },
]


// Creates an instance of an Express application. Represents the server
const app = express();
app.use(express.json()); // Express will use a JSON middleware

// Makes server start in the desired port, and executes a function at start
app.listen(8010, () => {
    console.log(`Server is listening...`);
});

// Defines the route for getting a resource (GET Method) and what it executes and returns
app.get("/posts", (req, res) => {
    // Server sends a OK status code as response
    res.status(200).json(posts);

});

app.get("/posts/:id", (req, res) => {
    // Picks the index of the post that has the required id 
    const index = searchPostById(req.params.id); 
    // Check if the post exists
    if (index !== -1) { 
        res.status(200).json(posts[index]); }
    else {
        res.status(404).json({ error: "Post not found" }); } })

function searchPostById(id) {
    return posts.findIndex((post) => {
        return post.id === Number(id);
    });
}