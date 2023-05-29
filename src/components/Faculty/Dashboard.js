import React, { useState, useEffect } from 'react';

import Cookies from 'js-cookie';
import { useRouter } from 'next/router';

import Sidebar from './Sidebar';
import TableForm from './InstructionTableForm';
import ExtensionTableForm from './ExtensionTableForm';
import TableFormContainer from './TableFormContainer';




const Dashboard = () => {
  
  const [accessToken, setAccessToken] = useState(Cookies.get('accessToken'))
  const router = useRouter()


  useEffect(() => {
    // Define the middleware function
    const middleware = async () => {
      // Send a request to your backend API to check the token
      const response = await fetch('/api/check-token', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ token: Cookies.get('accessToken') }), // Replace with your token value

      });


      if (response.ok) {
        // Token is valid, continue with rendering the Dashboard
        console.log('Token is valid');
        setAccessToken(Cookies.get('accessToken'));
      } else {
        // Token is invalid, redirect to the login page
        console.log('Token is invalid');

        // Add your logic to redirect the user to the login page
        // For example, you can use Next.js router:
        router.push('/superadmin/login');

        Cookies.remove('accessToken')

      }
    };
    // Call the middleware function here when the component mounts
    middleware();
  }, [accessToken]);




  return (
    <div>
      <TableFormContainer />

    </div>
  );
};

export default Dashboard;
