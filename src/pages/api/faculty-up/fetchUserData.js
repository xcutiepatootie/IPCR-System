import connectDB from "@/utils/connectDB";
import { Faculty } from "@/model/models"; // Update the import statement to the correct file path and model name

export default async function handler(req, res) {
    const { sessionId } = req.body;

    try {
        const user = await Faculty.findOne({ sessionId });

        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }

        return res.status(200).json({ user });
    } catch (error) {
        console.error('Error fetching user data', error);
        return res.status(500).json({ message: 'Server Error' });
    }
}
