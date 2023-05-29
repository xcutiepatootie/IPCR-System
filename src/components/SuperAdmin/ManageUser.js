import React, { useState, useEffect } from 'react';
import axios from 'axios'

const ReadUsers = ({ selectedCollection }) => {
  const [users, setUsers] = useState([]);
  const [activeUser, setActiveUser] = useState(null);
  const [editedName, setEditedName] = useState('');
  const [editedEmail, setEditedEmail] = useState('');


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

  const handleToggleUpdate = (userId, name, email) => {
    if (userId === activeUser) {
      setActiveUser(null);
    } else {
      setActiveUser(userId);
      setEditedName(name);
      setEditedEmail(email);
    }
  };

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await axios.get(`/api/users?collection=${position}`);
        const data = response.data;
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


  const handleSaveChanges = async (userId) => {
    // Handle save changes logic here
    try {
      const response = await axios.put(`/api/up-del/${userId}?collection=${position}`, {
        name: editedName,
        email: editedEmail,
      });
      const updatedUser = response.data;
      setUsers((prevUsers) =>
        prevUsers.map((user) => (user._id === userId ? updatedUser : user))
      );
      setActiveUser(null);
    } catch (error) {
      console.error('An error occurred', error);
    }
    console.log('Save changes for user:', userId);
  };

  const handleDeleteUser = async (userId) => {
    // Handle delete logic here
    try {
      const response = await axios.delete(`/api/up-del/${userId}?collection=${position}`);
      setUsers(users.filter((user) => user._id !== userId));
    } catch (error) {
      console.error('An error occurred', error);
    }
    console.log('Delete user:', userId);
  };

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
                    <td className="border border-black px-4 py-2">
                      {user._id === activeUser ? (
                        <input
                          type="text"
                          value={editedName}
                          onChange={(e) => setEditedName(e.target.value)}
                          className="w-full p-1 border border-black rounded"
                        />
                      ) : (
                        user.name
                      )}
                    </td>
                    <td className="border border-black px-4 py-2">
                      {user._id === activeUser ? (
                        <input
                          type="email"
                          value={editedEmail}
                          onChange={(e) => setEditedEmail(e.target.value)}
                          className="w-full p-1 border border-black rounded"
                        />
                      ) : (
                        user.email
                      )}
                    </td>
                    <td className="border border-black px-4 py-2">
                      <button
                        className={`bg-blue-500 mx-2 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded ${user._id === activeUser ? 'bg-blue-700' : ''
                          }`}
                        onClick={() =>
                          handleToggleUpdate(user._id, user.name, user.email)
                        }
                      >
                        {user._id === activeUser ? 'Cancel' : 'Update User'}
                      </button>
                    </td>
                    <td className="border border-black px-4 py-2">
                      {user._id === activeUser ? (
                        <button
                          className="bg-green-500 mx-2 hover:bg-green-700 text-white font-bold py-2 px-4 border border-green-700 rounded"
                          onClick={() => handleSaveChanges(user._id)}
                        >
                          Save Changes
                        </button>
                      ) : (
                        <button
                          className="bg-blue-500 mx-2 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded"
                          onClick={() => handleDeleteUser(user._id)}
                        >
                          Delete User
                        </button>
                      )}
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
