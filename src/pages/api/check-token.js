import { verify } from 'jsonwebtoken';

export default async function handler(req, res) {
  const { token } = req.body;
  

  try {
    // Verify the token using your secret or public key
    const decoded = verify(token, process.env.ACCESS_TOKEN);
    

    // Token is valid
    res.status(200).json({ message: 'Token is valid' });
  } catch (error) {
    // Token is invalid
    res.status(401).json({ message: 'Token is invalid' });
  }
}
