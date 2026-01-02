import mongoose from "mongoose";

export default function connectToDb() {
    const dbURI = process.env.DB_URI;
    mongoose.connect(dbURI)
        .then(() => {
            console.log(`MongoDB connected: ${mongoose.connection.host}`);
        })
        .catch((error) => {
            console.error("Database connection error: ", error);
        })
}