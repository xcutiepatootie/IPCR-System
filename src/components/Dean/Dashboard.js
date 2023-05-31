import React, { useState, useEffect } from 'react';
import Cookies from 'js-cookie';
import { useRouter } from 'next/router';

import TableFormContainer from './TableFormContainer';
import { useSession } from 'next-auth/react';


const Dashboard = () => {
  const [selectedCollection, setSelectedCollection] = useState(null);
  const router = useRouter()

  const { data: session, status } = useSession()

  if (status === "loading") {
    return <p>Loading...</p>
  }

  if (status === "unauthenticated") {
    router.push('/')
  }

  const handleSidebarItemClick = (option) => {
    setSelectedCollection(option)

  }



  return (
    <div>

      <TableFormContainer />

    </div>
  );
};

export default Dashboard;
