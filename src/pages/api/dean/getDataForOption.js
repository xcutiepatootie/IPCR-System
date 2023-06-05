import connectDB from "@/utils/connectDB";
import { Faculty } from "@/model/models";

export default async function handler(req, res) {
    const { selectedOption } = req.query;

    try {
        // Connect to your MongoDB database
        await connectDB();

        // Fetch the data based on the selectedOption value
        const data = await Faculty.findOne({ _id: selectedOption });
        // Note: Adjust the query based on your schema and field names
        console.log(data._id)
        // Return the fetched data as a response
        res.status(200).json(data);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'An error occurred' });
    }
}
