import connectDB from "@/utils/connectDB";
import mongoose from "mongoose";

export default async function handler(req, res) {
    try {
        await connectDB();

        const collection = mongoose.connection.collection('faculties');
        const names = await collection.distinct('name');

        res.status(200).json(names);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
}