import React, { useState, useEffect } from 'react';


import { useRouter } from 'next/router';

import TableFormContainer from './TableFormContainer';
import { useSession } from 'next-auth/react';


const Dashboard = () => {

  const router = useRouter()

  const { data: session, status } = useSession()

  useEffect(() => {
    if (status === 'unauthenticated') {
      router.push('/');
    } else if (session && !['faculty'].includes(session.user.role)) {
      router.push('/');
    }
  }, [status, session, router]);




  return (
    <div>
      <TableFormContainer />

    </div>
  );
};

export default Dashboard;
