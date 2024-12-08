// MongoDB drivers import
import { MongoClient } from "mongodb";

export default async function connectDatabase(connectionString){
    let mongoClient;

    try {
        mongoClient = new MongoClient(connectionString); // Instantiates mongoDb client with connection string
        console.log("Connecting to database cluster...");
        await mongoClient.connect();
        console.log("Connected successfully to MongoDB Atlas");
        
        return mongoClient; // Returns a class that is responsible for connecting with mongoDB
    } catch (error) {
        console.error("Faliled to connect with database! ", error);
        process.exit();
    }
}