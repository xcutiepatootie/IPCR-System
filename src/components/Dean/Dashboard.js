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
    
    <div className="h-screen flex overflow-auto">
      <TableFormContainer />
      <div className="m-4">
        <div>
          <button type="submit" className="ml-96 border-solid border-blue-950 border-2 text-blue-950 hover:bg-blue-950 hover:text-white font-bold h-28 w-28 rounded-[12px]">Instruction</button>
        </div>
        <div>
          <button type="submit" className="ml-96 border-solid border-blue-950 border-2 text-blue-950 hover:bg-blue-950 hover:text-white font-bold h-28 w-28 rounded-[12px]">Research</button>
        </div>
        <div>
          <button type="submit" className="ml-96 border-solid border-blue-950 border-2 text-blue-950 hover:bg-blue-950 hover:text-white font-bold h-28 w-28 rounded-[12px]">Extension</button>
        </div>
        <div>
          <button type="submit" className="ml-96 border-solid border-blue-950 border-2 text-blue-950 hover:bg-blue-950 hover:text-white font-bold h-28 w-28 rounded-[12px]">Support Function</button>
        </div>
        <div>
          <button type="submit" className="ml-96 border-solid border-blue-950 border-2 text-blue-950 hover:bg-blue-950 hover:text-white font-bold h-28 w-28 rounded-[12px]">Administrative Function</button>
        </div>
        <div>
          <button type="submit" className="ml-96 border-solid border-blue-950 border-2 text-blue-950 hover:bg-blue-950 hover:text-white font-bold h-28 w-28 rounded-[12px]">Report Generation</button>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;

