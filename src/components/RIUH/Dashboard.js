import React, { useState, useEffect } from 'react';

import Cookies from 'js-cookie';
import { useRouter } from 'next/router';

import Sidebar from './Sidebar';



const Dashboard = () => {
  const [selectedCollection, setSelectedCollection] = useState(null);
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


  const handleSidebarItemClick = (option) => {
    setSelectedCollection(option)

  }

  const renderContent = () => {
    switch (selectedCollection) {
      case 'Dashboard':
        return <h1>RIUH</h1>;
      case 'Manage User':
        return <ManageUserContainer />;
      case 'Create New User':
        return <>

          <><CreateUserContainer /></>
        </>;
      default:
        return <h1>RIUH</h1>
    }
  }

  return (
    <div>

      <div className="flex">
        <Sidebar handleItemClick={handleSidebarItemClick} />
        {renderContent()}
      </div>

    </div>
  );
};

export default Dashboard;
