import React, { useState, useEffect } from 'react';

import Cookies from 'js-cookie';
import { useRouter } from 'next/router';

import Sidebar from './Sidebar';
import TableForm from './InstructionTableForm';
import ExtensionTableForm from './ExtensionTableForm';
import TableFormContainer from './TableFormContainer';
import { useSession } from 'next-auth/react';




const Dashboard = () => {

  const router = useRouter()

  const { data: session, status } = useSession()

  if (status === "loading") {
    return <p>Loading...</p>
  }

  if (status === "unauthenticated") {
    router.push('/')
  }


  return (
    <div>
      <TableFormContainer />

    </div>
  );
};

export default Dashboard;
