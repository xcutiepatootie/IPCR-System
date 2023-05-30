import React from 'react';
import Link from 'next/link';
import Router, { useRouter } from 'next/router';
import Cookies from 'js-cookie';

const Sidebar = ({ handleItemClick }) => {
  const router = useRouter()

  const handleSignout = () => {
    Cookies.remove('accessToken')
    router.push('/')

  }


  return (
    <aside className="bg-lime-700 text-white w-64 h-screen">
      <nav>
        <ul className="p-4">
          <li className="mb-2" onClick={() => handleItemClick('Dashboard')}>
            <Link href={'#'}>Dashboard</Link>
          </li>
          <li className="mb-2" onClick={() => handleItemClick('Faculty')}>
            <Link href={'#'}>Faculty</Link>
          </li>
          <li className="mb-2" onClick={() => handleItemClick('Instruction')}>
            <Link href={'#'}>Instruction</Link>
          </li>
          <li className="mb-2" onClick={() => handleItemClick('Research')}>
            <Link href={'#'}>Research</Link>
          </li>
          <li className="mb-2" onClick={() => handleItemClick('Extension')}>
            <Link href={'#'}>Extension</Link>
          </li>
          <li className="mb-2" onClick={() => handleItemClick('Support Function')}>
            <Link href={'#'}>Support Function</Link>
          </li>
          <li className="mb-2" onClick={() => handleItemClick('Administrative Functions')}>
            <Link href={'#'}>Administrative Function</Link>
          </li>
          <li className="mb-2" onClick={() => handleItemClick('Report Generation')}>
            <Link href={'#'}>Report Generation</Link>
          </li>
        </ul>
        <li className="mb-2" onClick={() => handleSignout()}>
          <Link href={'#'}>Sign Out</Link>
        </li>
      </nav>
    </aside>
  );
};

export default Sidebar;
