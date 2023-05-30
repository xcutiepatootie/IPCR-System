import React from 'react';
import Link from 'next/link';
import Router, { useRouter } from 'next/router';
import Cookies from 'js-cookie';

const Sidebar = ({ handleItemClick }) => {
  const router = useRouter()
 
 


  return (
    <aside className="bg-lime-700 text-white w-64 h-screen">
      <nav>
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
