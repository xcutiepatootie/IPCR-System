import connectDB from '@/utils/connectDB';
import mongoose from 'mongoose';


export default async function handler(req, res) {
    try {
        await connectDB();
        const collections = await mongoose.connection.db.listCollections().toArray();
        const collectionNames = collections.map((collection) => collection.name);
        res.status(200).json(collectionNames);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server error' });
    }
}