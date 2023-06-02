export default function mergeUserData(req, res) {
    if (req.method !== 'POST') {
        return res.status(405).json({ message: 'Method Not Allowed' });
    }

    try {
        // Access the request body
        const { userData, loggedInUserId } = req.body;

        // Fetch the existing user data using the Faculty model
        Faculty.findById(loggedInUserId, (err, existingUser) => {
            if (err) {
                console.error(err);
                return res.status(500).json({ message: 'Internal Server Error' });
            }

            if (!existingUser) {
                return res.status(404).json({ message: 'User not found' });
            }

            // Append the new form data to the existing user data
            existingUser.instructionProperty = [...existingUser.instructionProperty, ...userData];

            // Save the updated user object
            existingUser.save((err, updatedUser) => {
                if (err) {
                    console.error(err);
                    return res.status(500).json({ message: 'Internal Server Error' });
                }

                // Return a success response
                res.status(200).json({ message: 'User data updated successfully' });
            });
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal Server Error' });
    }
}
