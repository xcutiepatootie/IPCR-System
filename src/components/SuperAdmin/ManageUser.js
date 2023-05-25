import React, { useState, useEffect } from 'react';

const ReadUsers = ({ selectedCollection }) => {
  const [users, setUsers] = useState([]);


  let position = null

  switch (selectedCollection) {
    case 'Campus Director':
      position = 'campusdirectors'
      break
    case 'Faculty':
      position = 'faculties'
      break
    case 'Dean':
      position = 'deans'
      break
    case 'EIUH':
      position = 'eiuhs'
      break
    case 'RIUH':
      position = 'riuhs'
      break

    default:
      break;
  }

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await fetch(`/api/users?collection=${position}`);
        const data = await response.json();
        setUsers(data);
      } catch (error) {
        console.error('An error occurred', error);
      }
    };

    if (selectedCollection) {
      fetchUsers();
    } else {
      setUsers([]);
    }
  }, [selectedCollection]);

  return (
    <div className="flex">
      <div className="flex-1 mx-4 my-4">
        {selectedCollection && (
          <>
            <table className="border-collapse border border-black m-2">
              <thead>
                <tr>
                  <th className="border border-black px-4 py-2">Name</th>
                  <th className="border border-black px-4 py-2">Email</th>
                  <th className="border border-black px-4 py-2" colSpan={2}>Update / Delete</th>
                </tr>
              </thead>
              <tbody>
                {users.map((user) => (
                  <tr key={user._id}>
                    <td className="border border-black px-4 py-2">{user.name}</td>
                    <td className="border border-black px-4 py-2">{user.email}</td>
                    <td className="border border-black px-4 py-2">
                      <button
                        className="bg-blue-500 mx-2 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded"

                      >
                        Update User
                      </button>

                    </td>
                    <td className="border border-black px-4 py-2">
                      <button
                        className="bg-blue-500 mx-2 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded"

                      >
                        Delete User
                      </button>
                    </td>
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

export default ReadUsers;
