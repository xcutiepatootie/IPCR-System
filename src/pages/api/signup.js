import connectDB from '@/utils/connectDB'
import { Superadmin, Campusdirector, Faculty, Dean, Riuh, Eiuh } from '@/model/models'
import bcrypt from 'bcrypt'


const models = {
  superadmin: Superadmin,
  campusdirector: Campusdirector,
  faculty: Faculty,
  dean: Dean,
  eiuh: Eiuh,
  riuh: Riuh
}

export default async function handler(req, res) {
  await connectDB()
  const { name, email, password, role } = req.body
  console.log(req.body)
  try {
    const User = models[role]
    // Checks if the user has role
    if (!User || !(req.method === "POST")) {
      return res.status(401).send('Unauthorized');
    }

    // Checks if the user is already existing
    const existingUser = await User.findOne({ email })
    if (existingUser) {
      return res.status(409).send('User already exists')
    }

    // If the user does not have role and is not existing
    // Hash the passwords
    const salt = await bcrypt.genSalt(10)
    const hashedPassword = await bcrypt.hash(password, salt)

    // Create a new user
    const newUser = new User({ name, email, password: hashedPassword, role })
    await newUser.save()
    res.status(200).json({ message: 'User created successfully' })

  } catch (error) {
    res.status(500).send('Server error')
    console.error(error.message)
  }

}