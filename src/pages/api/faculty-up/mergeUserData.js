import { Faculty } from "@/model/models";
import connectDB from "@/utils/connectDB";

export default async function handler(req, res) {
    if (req.method !== "POST") {
        return res.status(405).json({ message: "Method Not Allowed" });
    }

    try {
        connectDB();
        // Access the request body
        const { userData, loggedInUserId } = req.body;

        // Fetch the existing user data using the Faculty model
        const existingUser = await Faculty.findById(loggedInUserId);

        if (!existingUser) {
            return res.status(404).json({ message: "User not found" });
        }

        // Append the new form data to the existing user data
        const updatedInstruction1 = existingUser.instructionProperty.instruction1.concat(userData.filter((newData) => {
            // Check if the row already exists in the database
            return !existingUser.instructionProperty.instruction1.some((existingData) => {
                // Compare based on some unique identifier (e.g., label)
                return newData.label === existingData.label;
            });
        }));

        existingUser.instructionProperty.instruction1 = updatedInstruction1;

        // Save the updated user object
        const updatedUser = await existingUser.save();

        // Return a success response
        res.status(200).json({ message: "User data updated successfully" });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Internal Server Error" });
    }
}
