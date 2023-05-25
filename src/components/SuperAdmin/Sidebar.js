import React, { useState } from 'react';
import Link from 'next/link';

const Sidebar = ({ setSelectedCollection, clearUsers }) => {
  const handleCollectionClick = (collection) => {
    setSelectedCollection(collection);
    clearUsers()
    console.log(collection)
  };

  return (
    <aside className="bg-lime-700 text-white w-64 h-screen">
      <nav>
        <ul className="p-4">
          <li className="mb-2">
            <Link href="/">Dashboard</Link>
          </li>
          <li className="mb-2">
            <h1>Manage Users</h1>
            <ul className="pl-4">
              <li className="mb-1">
                <button onClick={() => handleCollectionClick('superadmins')}>
                  Superadmin
                </button>
              </li>
              <li className="mb-1">
                <button onClick={() => handleCollectionClick('campusdirectors')}>
                  Campus Director
                </button>
              </li>
              <li className="mb-1">
                <button onClick={() => handleCollectionClick('deans')}>
                  Dean
                </button>
              </li>
              <li className="mb-1">
                <button onClick={() => handleCollectionClick('faculties')}>
                  Faculty
                </button>
              </li>
              <li className="mb-1">
                <button onClick={() => handleCollectionClick('eiuhs')}>
                  EIUH
                </button>
              </li>
              <li className="mb-1">
                <button onClick={() => handleCollectionClick('riuhs')}>
                  RIUH
                </button>
              </li>
            </ul>
          </li>
          <li className="mb-1">
            <button onClick={() => handleCollectionClick('riuhs')}>
              Create New User
            </button>
          </li>
          <li className="mb-1">
            <button onClick={() => handleCollectionClick('riuhs')}>
              Reset Password
            </button>
          </li>
        </ul>
      </nav>
    </aside>
  );
};

export default Sidebar;
