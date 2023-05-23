import React, { useEffect, useState } from 'react';

function ListUserPage() {
  const [collections, setCollections] = useState([]);
  const [selectedCollection, setSelectedCollection] = useState(null)
  const [users, setUsers] = useState([])

  useEffect(() => {
    async function fetchCollections() {
      try {
        const response = await fetch('/api/collections');
        const data = await response.json();
        setCollections(data);
      } catch (error) {
        console.error('Error fetching collections:', error);
      }
    }

    fetchCollections();
  }, []);

  const handleButtonClick = async (collection) => {
    
  };




  return (
    <div>
      <h1>List of Users</h1>
      <ul>
        {collections.map((collection) => (
          <li key={collection}>
            <div>
              <button className="mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-16 rounded w-full"
                onClick={() => handleButtonClick(collection)}>{collection}</button>
            </div>

          </li>
        ))}
      </ul>

      {selectedCollection && (
        <div>
          <h2>Users in {selectedCollection}</h2>
          <ul>
            {users.map((user) => (
              <li key={user._id}>{user.name}</li>
            ))}
          </ul>
        </div>
      )}a

    </div>
  );
}

export default listUserPage;