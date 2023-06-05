import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useSession, signOut } from 'next-auth/react';
import { FaRegUser } from 'react-icons/fa';
import { FaChalkboardUser } from "react-icons/fa";

const Sidebar = ({ handleItemClick }) => {
  const router = useRouter();
  const { data: session, status } = useSession();

  if (status === 'loading') {
    // Handle loading state if necessary
    return <p>Loading...</p>;
  }

  const user = session?.user || null;

  return (
    <aside className="bg-green-700 text-white w-64 h-screen">
      <nav>
        <div className="">
          {user && (
            <>
              <p><FaRegUser className='' />{user.name}</p>
              <p>{user.email}</p>
              <p>{user.role}</p>
            </>
          )}
        </div>

        <ul className="">
          {user && user.role === 'superadmin' && (
            <>
              <li className="mb-2 hover:bg-gray-300 hover:text-blue-950 rounded-md">
                <Link href="#" onClick={() => handleItemClick('Manage User')}>Manage User</Link>
              </li>
              <li className="mb-2 hover:bg-gray-300 hover:text-blue-950 rounded-md">
                <Link href="#" onClick={() => handleItemClick('Create New User')}>Create New User</Link>
              </li>
            </>
          )}

          <li className="mb-2 font-extrabold text-xl font-mono text-center opacity-80 leading m-6 hover:bg-gray-300 hover:text-blue-950 rounded-md" onClick={() => handleItemClick('Dashboard')}>
            <Link href="#">Dashboard</Link>
          </li>

          {user && user.role !== 'faculty' && (
            <>
              <li className="mb-2 hover:bg-gray-300 rounded-md" onClick={() => handleItemClick('Faculty')}>
                <Link href="#">List of Faculty</Link>
              </li>
            </>
          )}

          {user && (user.role === 'faculty' || user.role === 'dean') && (
            <>
              <li className="mb-2 font-extrabold text-xl font-mono text-center opacity-80 leading m-6 h-full transition-all duration-300 active:bg-gray-300 focus:ring focus:ring-gray-300 hover:bg-gray-300  hover:text-blue-950 rounded-md" onClick={() => handleItemClick('Instruction')}>
              <Link href="#">Instruction</Link>
              </li>
              <li className="mb-2 font-extrabold text-xl font-mono text-center opacity-80 leading m-6 hover:bg-gray-300  hover:text-blue-950 rounded-md" onClick={() => handleItemClick('Research')}>
                <Link href="#">Research</Link>
              </li>
              <li className="mb-2 font-extrabold text-xl font-mono text-center opacity-80 leading m-6 hover:bg-gray-300  hover:text-blue-950 rounded-md" onClick={() => handleItemClick('Extension')}>
                <Link href="#">Extension</Link>
              </li>
              <li className="mb-2 font-extrabold text-xl font-mono text-center opacity-80 leading m-6 hover:bg-gray-300  hover:text-blue-950 rounded-md" onClick={() => handleItemClick('Support Function')}>
                <Link href="#">Support Function</Link>
              </li>
              <li className="mb-2 font-extrabold text-xl font-mono text-center opacity-80 leading m-6 hover:bg-gray-300  hover:text-blue-950 rounded-md" onClick={() => handleItemClick('Administrative Functions')}>
                <Link href="#">Administrative Function</Link>
              </li>
            </>
          )}

          {/* {user && (user.role !== 'faculty' && user.role === 'dean') && (
            <>
              <li className="mb-2 hover:bg-gray-300 rounded-md" onClick={() => handleItemClick('Faculty')}>
                <Link href="#">Faculty</Link>
              </li>
            </>
          )} */}

          <li className="mb-2 font-extrabold text-xl font-mono text-center opacity-80 leading m-6 hover:bg-gray-300 hover:text-blue-950 rounded-md" onClick={() => handleItemClick('Report Generation')}>
            <Link href="#">Report Generation</Link>
          </li>
        </ul>

        <li className="mb-2 font-extrabold text-xl font-mono text-center opacity-80 leading m-10 hover:bg-gray-300 hover:text-blue-950 rounded-md" onClick={() => signOut()}>
          <Link href="#">Sign Out</Link>
        </li>
      </nav>
    </aside>
  );
};

export default Sidebar;
