import React, { useState, useEffect } from 'react';
import Cookies from 'js-cookie';
import { useRouter } from 'next/router';

import TableFormContainer from './TableFormContainer';
import { useSession } from 'next-auth/react';

const Dashboard = () => {
  const [selectedCollection, setSelectedCollection] = useState(null);
  const router = useRouter()
  const { data: session, status } = useSession()

  useEffect(() => {
    if (status === 'unauthenticated') {
      router.push('/');
    } else if (session && !['dean'].includes(session.user.role)) {
      router.push('/');
    }
  }, [status, session, router]);


  if (status === "loading") {
    return <p>Loading...</p>;
  }

  const user = session?.user || null;




  return (
    <div>

      <TableFormContainer />

    </div>
  );
};

export default Dashboard;

