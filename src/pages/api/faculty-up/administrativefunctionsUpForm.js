import { Faculty } from '@/model/models'; // Import the Faculty model
import connectDB from '@/utils/connectDB';


export default async function handler(req, res) {
    if (req.method === 'POST') {
        connectDB()
        try {
            const { userData, loggedInUserId } = req.body;

            // Check if userData and loggedInUserId are defined
            if (userData && loggedInUserId) {
                // Update the instruction property for the logged-in user
                const updatedUser = await Faculty.findOneAndUpdate(
                    { _id: loggedInUserId }, // Assuming the user's unique identifier is '_id'
                    { adminProperty: userData }, // Update the entire extensionProperty with the provided userData
                    { new: true }
                );

                if (updatedUser) {
                    res.status(200).json({ success: true, message: 'Data updated successfully' });
                } else {
                    res.status(404).json({ success: false, message: 'User not found' });
                }
            } else {
                res.status(400).json({ success: false, message: 'Invalid request' });
            }
        } catch (error) {
            console.error('Error:', error);
            res.status(500).json({ success: false, message: 'Internal server error' });
        }
    } else {
        res.status(405).json({ success: false, message: 'Method not allowed' });
    }
}
