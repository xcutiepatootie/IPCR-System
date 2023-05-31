import React from 'react';
import Link from 'next/link';
import Router, { useRouter } from 'next/router';
import Cookies from 'js-cookie';
import { useSession, signOut } from 'next-auth/react';

const Sidebar = ({ handleItemClick }) => {
  const router = useRouter()


  const { data: session, status } = useSession()


  if (status === 'loading') {
    // Handle loading state if necessary
    return <p>Loading...</p>;
  }

  const user = session?.user || null;


  return (
    <aside className="bg-lime-700 text-white w-64 h-screen">
      <nav>
        <div className="p-4">
          {user && (
            <>
              <p>{user.name}</p>
              <p>{user.email}</p>
              <p>{user.role}</p>
            </>
          )}
        </div>
        <ul className="p-4">
          <li className="mb-2" onClick={() => handleItemClick('Dashboard')}>
            <Link href={'#'}>Dashboard</Link>
          </li>
          <li className="mb-2" onClick={() => handleItemClick('Manage User')}>
            <Link href={'#'}>Manage User</Link>
          </li>
          <li className="mb-2" onClick={() => handleItemClick('Create New User')}>
            <Link href={'#'}>Create New User</Link>
          </li>
        </ul>
        <li className="mb-2" onClick={() => signOut()}>
          <Link href={'#'}>Sign Out</Link>
        </li>
      </nav>
    </aside>
  );
};

export default Sidebar;
