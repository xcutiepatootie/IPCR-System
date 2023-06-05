import { Faculty } from '@/model/models'; // Import the Faculty model
import connectDB from '@/utils/connectDB';

export default async function handler(req, res) {
    if (req.method === 'POST') {
        connectDB()
        try {
            const { userData, loggedInUserId } = req.body;


            // Check if userData and loggedInUserId are defined
            if (userData && loggedInUserId) {
                // Access the instruction data from userData
                console.log("Userdata", userData)
                const {
                    instruction1,
                    instruction2,
                    instruction3,
                    instruction4,
                    instruction5,
                    instruction6,
                    instruction7
                } = userData;

                const update = {
                    $set: {
                        'instructionProperty.instruction1': instruction1,
                        'instructionProperty.instruction2': instruction2,
                        'instructionProperty.instruction3': instruction3,
                        'instructionProperty.instruction4': instruction4,
                        'instructionProperty.instruction5': instruction5,
                        'instructionProperty.instruction6': instruction6,
                        'instructionProperty.instruction7': instruction7
                    }
                };

                // Update the instruction property for the logged-in user
                const updatedUser = await Faculty.findOneAndUpdate(
                    { _id: loggedInUserId },
                    update,
                    { new: true }
                );

                if (updatedUser) {
                    res.status(200).json({ instructionProperty: updatedUser.instructionProperty });
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
