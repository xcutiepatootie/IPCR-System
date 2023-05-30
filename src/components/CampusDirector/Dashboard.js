import React, { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import Sidebar from './Sidebar'
import { useSession } from 'next-auth/react'
import { SessionProvider } from 'next-auth/react'


const Dashboard = () => {
  const [selectedCollection, setSelectedCollection] = useState(null)

  const router = useRouter()
  const session = useSession()

  console.log(session)


  const handleSidebarItemClick = (option) => {
    setSelectedCollection(option)

  }

  const renderContent = () => {
    switch (selectedCollection) {
      case 'Dashboard':
        return <h1>Campus Director</h1>
      case 'Manage User':
        return <ManageUserContainer />
      case 'Create New User':
        return <>

          <><CreateUserContainer /></>
        </>;
      default:
        return <h1>Campus Director</h1>
    }
  }

  return (
    <div>
      <SessionProvider>
        <div className="flex">
          <Sidebar handleItemClick={handleSidebarItemClick} />
          {renderContent()}
        </div>
      </SessionProvider>
    </div>
  );
};

export default Dashboard;
