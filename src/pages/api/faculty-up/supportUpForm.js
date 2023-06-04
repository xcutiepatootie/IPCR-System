import { Faculty } from '@/model/models'; // Import the Faculty model
import connectDB from '@/utils/connectDB';

export default async function handler(req, res) {
    if (req.method === 'POST') {
        connectDB();
        try {
            const { userData, loggedInUserId } = req.body;
            console.log(userData);

            // Check if userData and loggedInUserId are defined
            if (userData && loggedInUserId) {
                // Access the instruction data from userData
                const {
                    support1,
                    support2,
                    support3,
                    support4,
                    support5,
                    support6,
                    support7,
                    support8,
                    support9
                } = userData;

                const supportProperty = {
                    support1,
                    support2,
                    support3,
                    support4,
                    support5,
                    support6,
                    support7,
                    support8,
                    support9
                };

                // Update the instruction property for the logged-in user
                const updatedUser = await Faculty.findOneAndUpdate(
                    { _id: loggedInUserId }, // Assuming the user's unique identifier is '_id'
                    { supportProperty },
                    { new: true }
                );

                if (updatedUser) {
                    res.status(200).json({ supportProperty: updatedUser.supportProperty });
                } else {
                    res.status(404).json({ error: 'User not found' });
                }
            } else {
                res.status(400).json({ error: 'Invalid request' });
            }
        } catch (error) {
            res.status(500).json({ error: 'Internal server error' });
        }
    } else {
        res.status(405).json({ error: 'Method not allowed' });
    }
}
