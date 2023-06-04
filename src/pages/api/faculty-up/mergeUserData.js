import { Faculty } from "@/model/models";
import connectDB from "@/utils/connectDB";

export default async function handler(req, res) {
    if (req.method !== "POST") {
        return res.status(405).json({ message: "Method Not Allowed" });
    }

    try {
        connectDB();
        // Access the request body
        const { instructionData, loggedInUserId } = req.body;

        // Fetch the existing user data using the Faculty model
        const existingUser = await Faculty.findById(loggedInUserId);

        if (!existingUser) {
            return res.status(404).json({ message: "User not found" });
        }

        // Loop through each instruction type in instructionData and update the corresponding property
        Object.entries(instructionData).forEach(([instructionType, userData]) => {
            // Validate the instructionType if necessary
            // ...

            // Update the corresponding property in existingUser
            existingUser[instructionType] = existingUser[instructionType].concat(userData);
        });

        // Save the updated user object
        const updatedUser = await existingUser.save();

        // Return a success response
        res.status(200).json({ message: "User data updated successfully" });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Internal Server Error" });
    }
}
