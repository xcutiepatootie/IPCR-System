import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import TableFormContainer from './TableFormContainer';
import { useSession } from 'next-auth/react';
import Btndashboard from './Btndashboard';

const Dashboard = ({  }) => {
  const [selectedCollection, setSelectedCollection] = useState(null);
  const [selectedButton, setSelectedButton] = useState(null);
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

    <div className="h-screen flex overflow-auto">
      <TableFormContainer />
     
    </div>
  );
};

export default Dashboard;

