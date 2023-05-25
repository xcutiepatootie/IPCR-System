import React from 'react';
import Link from 'next/link';

const Sidebar = ({ handleItemClick }) => {


  return (
    <aside className="bg-lime-700 text-white w-64 h-screen">
      <nav>
        <ul className="p-4">
          <li className="mb-2" onClick={() => handleItemClick('Dashboard') }>
            <Link href={'#'}>Dashboard</Link>
          </li>
          <li className="mb-2" onClick={() => handleItemClick('Manage User') }>
            <Link href={'#'}>Manage User</Link>
          </li>
          <li className="mb-2" onClick={() => handleItemClick('Create New User') }>
            <Link href={'#'}>Create New User</Link>
          </li>
        </ul>
      </nav>
    </aside>
  );
};

export default Sidebar;
