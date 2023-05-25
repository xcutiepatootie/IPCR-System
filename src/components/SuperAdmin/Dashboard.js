import React, { useState } from 'react';
import Link from 'next/link';
import Sidebar from './Sidebar';
import ManageUserContainer from './ManageUserContainer';
import CreateUserContainer from './CreateUserContainer';


const Dashboard = () => {
  const [selectedCollection, setSelectedCollection] = useState(null);


  const handleCreateUser = (newUser) => {
    // Logic to add the new user to the database or perform any other action
    console.log('New user:', newUser)
  };

  const handleSidebarItemClick = (option) => {
    setSelectedCollection(option)

  }

  const renderContent = () => {
    switch (selectedCollection) {
      case 'Dashboard':
        return <h1>Dashboard</h1>;
      case 'Manage User':
        return <ManageUserContainer />;
      case 'Create New User':
        return <>

          <><CreateUserContainer /></>
        </>;
      default:
        return <h1>Dashboard</h1>
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
