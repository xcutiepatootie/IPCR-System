import React, { useState, useEffect } from 'react';

import Cookies from 'js-cookie';
import { useRouter } from 'next/router';

import Sidebar from './Sidebar';
import TableFormContainer from './TableFormContainer';



const Dashboard = () => {
  const [selectedCollection, setSelectedCollection] = useState(null);
  const [accessToken, setAccessToken] = useState(Cookies.get('accessToken'))
  const router = useRouter()

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
