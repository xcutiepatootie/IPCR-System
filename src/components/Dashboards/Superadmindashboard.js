import React, { useState } from 'react';
import Sidebar from '../SuperAdmin/Sidebar';

const DashboardPage = () => {
  const [users, setUsers] = useState([]);
  const [selectedCollection, setSelectedCollection] = useState(null);

  const fetchUsers = async () => {
    try {
      const response = await fetch(`/api/users?collection=${selectedCollection}`);
      const data = await response.json();
      setUsers(data);
    } catch (error) {
      console.error('An error occurred', error);
    }
  };

  const clearUsers = () => {
    setUsers([]);
  };

  return (
    <div className="flex">
      <Sidebar setSelectedCollection={setSelectedCollection}  clearUsers={clearUsers}/>
      <div className="flex-1 mx-4 my-4">
        {selectedCollection && (
          <>
            <button className='bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded' onClick={fetchUsers}>Load Users</button>
            <table className="border-collapse border border-black m-2">
              <thead>
                <tr>
                  <th className="border border-black px-4 py-2">Name</th>
                  <th className="border border-black px-4 py-2">Email</th>
                </tr>
              </thead>
              <tbody>
                {users.map((user) => (
                  <tr key={user._id}>
                    <td className="border border-black px-4 py-2">{user.name}</td>
                    <td className="border border-black px-4 py-2">{user.email}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </>
        )}
      </div>
    </div>
  );
};

export default DashboardPage;
