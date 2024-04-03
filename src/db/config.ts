import dotenv from "dotenv";
dotenv.config();
import mongoose from "mongoose";
const dbUser = process.env.DB_USER as string
const dbPassword = process.env.DB_PASSWORD as string
export const connectDB = () => {
  const mongodb: string = "mongodb://"+dbUser+":"+dbPassword+"@ac-aemgtkt-shard-00-00.unqyghm.mongodb.net:27017,ac-aemgtkt-shard-00-01.unqyghm.mongodb.net:27017,ac-aemgtkt-shard-00-02.unqyghm.mongodb.net:27017/?replicaSet=atlas-y8oxsk-shard-0&ssl=true&authSource=admin";
  mongoose
      .connect(mongodb)
      .then((db) => console.log("Connected to database"))
      .catch((err) => {
        console.error(`Error connecting to the database. \n${err}`);
      });
}