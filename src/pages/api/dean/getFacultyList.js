import connectDB from "@/utils/connectDB";
import { Faculty } from "@/model/models"

export default async function handler(req, res) {
    try {
        await connectDB();

        const collectionName = req.query.collection.toString();
        const collection = mongoose.connection.collection(collectionName);
        const documents = await collection.find({}, { _id: 1, name: 1, email: 1 }).toArray();

        const names = documents.map((document) => ({
            _id: document._id,
            name: document.name,
            email: document.email
        }));

        res.status(200).json(names);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
}
