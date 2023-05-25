import connectDB from '@/utils/connectDB'
import { Superadmin, Campusdirector, Faculty, Dean, Riuh, Eiuh } from '@/model/models'
import bcrypt from 'bcrypt'
import axios from 'axios'
import jwt from 'jsonwebtoken'


const models = {
  superadmin: Superadmin,
  campusdirector: Campusdirector,
  faculty: Faculty,
  dean: Dean,
  riuh: Riuh,
  eiuh: Eiuh
}

export default async function handler(req, res) {
  // Check if the request method is POST


  if (req.method === 'POST') {
    // Connect to database
    await connectDB()


    // Store the values from the request
    const { email, password, role } = req.body
    const User = models[role]

    try {
      // Find user in database
      const user = await User.findOne({ email })

      // Check if the user is found
      if (!user) {
        return res.status(401).json({ message: 'User not found' })
      } else {
        // Compare password with hashedpassword
        const passwordMatch = await bcrypt.compare(password, user.password)
        if (!passwordMatch) {
          return res.status(401).json({ message: 'Incorrect password' })
        }
        // Generate JWT token
        const token = jwt.sign({ userId: user.name }, process.env.ACCESS_TOKEN, { expiresIn: '1h' })

        res.setHeader('Set-Cookie', `accessToken=${token}; Path=/; HttpOnly`)


        return res.status(200).json({ message: 'Successfully Logged In' })

      }


    } catch (error) {
      console.error(error)
      return res.status(500).json({ message: 'Internal server error' })
    }

  } else {
    // If not found
    return res.status(404).json({ message: 'API route not found' })
  }


}