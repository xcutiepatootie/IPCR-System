
import Navbar from "@/components/Navbar";
import { authMiddleware } from '../../middleware/authMiddleware'
import axios from 'axios'




export default function Dashboard() {
  return (
    <>
      <Navbar />
      <h1 className="font-custom1 text-9xl"> Hello</h1>
    </>
  );
}

// Apply the authMiddleware to the protected page
export const getServerSideProps = async (context) => {
  const { req, res } = context;
  await authMiddleware(req, res); // Apply the middleware

  // Retrieve the user information from the request object
  const user = req.user;

  return {
    props: { user },
  };
}; 