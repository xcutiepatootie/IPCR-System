import connectDB from "@/utils/connectDB";
import { Faculty } from "@/model/models";

export default async function handler(req, res) {
    try {
        await connectDB();

        const faculties = await Faculty.find({}, { _id: 1, name: 1, email: 1 });

        res.status(200).json(faculties);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
}
