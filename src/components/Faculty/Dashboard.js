import React, { useState, useEffect } from 'react';


import { useRouter } from 'next/router';

import TableFormContainer from './TableFormContainer';
import { useSession } from 'next-auth/react';


const Dashboard = () => {

  const router = useRouter()

  const { data: session, status } = useSession()

  useEffect(() => {
    if (status === "unauthenticated") {
      router.push("/");
    }
  }, [status]);

  if (status === "loading") {
    return <p>Loading...</p>
  }




  return (
    <div>
      <TableFormContainer />

    </div>
  );
};

export default Dashboard;
export async function getServerSideProps(context) {
  const session = await getSession(context);

  if (!session || session.user.role !== 'faculty') {
    return {
      redirect: {
        destination: '/',
        permanent: false,
      },
    };
  }

  return {
    props: {},
  };
}