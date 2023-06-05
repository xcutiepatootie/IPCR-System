import connectDB from "@/utils/connectDB";
import { Faculty } from "@/model/models";

export default async function handler(req, res) {

    const { userId } = req.query; // Updated to use req.query instead of req.body


    try {
        const user = await Faculty.findOne({ _id: userId });

        if (!user) {
            return res.status(404).json({ message: "User not found" });
        }

        return res.status(200).json({ userData: user, message: "Success" }); // Updated to use "userData" instead of "user"
    } catch (error) {
        console.error("Error fetching user data", error);
        return res.status(500).json({ message: "Server Error" });
    }
}
