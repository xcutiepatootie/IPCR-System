import React, { useState, useEffect } from 'react';

import Cookies from 'js-cookie';
import { useRouter } from 'next/router';

import Sidebar from '../Sidebar';



const Dashboard = () => {
  const [selectedCollection, setSelectedCollection] = useState(null);
  const [accessToken, setAccessToken] = useState(Cookies.get('accessToken'))
  const router = useRouter()


  const { data: session, status } = useSession()

  useEffect(() => {
    if (status === 'unauthenticated') {
      router.push('/');
    } else if (session && !['dean'].includes(session.user.role)) {
      router.push('/');
    }
  }, [status, session, router]);



  const handleSidebarItemClick = (option) => {
    setSelectedCollection(option)

  }

  const renderContent = () => {
    switch (selectedCollection) {
      case 'Dashboard':
        return <h1>EIUH</h1>;
      case 'Manage User':
        return <ManageUserContainer />;
      case 'Create New User':
        return <>

          <><CreateUserContainer /></>
        </>;
      default:
        return <h1>EIUH</h1>
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

