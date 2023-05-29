
import connectDB from '../../../utils/connectDB';
import { Superadmin, Campusdirector, Faculty, Dean, Riuh, Eiuh } from '@/model/models';

connectDB();

export default async function handler(req, res) {
    const {
        query: { id },
        method,
        body,
    } = req;

    let UserModel;

    switch (req.query.collection) {
        case 'superadmins':
            UserModel = Superadmin;
            break;
        case 'campusdirectors':
            UserModel = Campusdirector;
            break;
        case 'faculties':
            UserModel = Faculty;
            break;
        case 'deans':
            UserModel = Dean;
            break;
        case 'riuhs':
            UserModel = Riuh;
            break;
        case 'eiuhs':
            UserModel = Eiuh;
            break;
        default:
            return res.status(400).json({ success: false, message: 'Invalid collection' });
    }

    switch (method) {
        case 'PUT':
            try {
                const user = await UserModel.findByIdAndUpdate(id, body, { new: true });

                if (!user) {
                    return res.status(404).json({ success: false, message: 'User not found' });
                }

                res.status(200).json({ success: true, data: user });
            } catch (error) {
                res.status(500).json({ success: false, message: 'Internal Server Error' });
            }
            break;
        case 'DELETE':
            try {
                const user = await UserModel.findByIdAndDelete(id);

                if (!user) {
                    return res.status(404).json({ success: false, message: 'User not found' });
                }

                res.status(200).json({ success: true, message: 'User deleted successfully' });
            } catch (error) {
                res.status(500).json({ success: false, message: 'Internal Server Error' });
            }
            break;
        default:
            res.status(400).json({ success: false });
            break;
    }
}
