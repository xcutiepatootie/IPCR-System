import React, { useEffect, useState } from 'react';

function CollectionsPage() {
  const [collections, setCollections] = useState([]);

  useEffect(() => {
    async function fetchCollections() {
      try {
        const response = await fetch('/api/users');
        const data = await response.json();
        setCollections(data);
      } catch (error) {
        console.error('Error fetching collections:', error);
      }
    }

    fetchCollections();
  }, []);

  return (
    <div>
      <h1>Collections</h1>
      <ul>
        {collections.map((collection) => (
          <li key={collection}>{collection}</li>
        ))}
      </ul>
    </div>
  );
}

export default CollectionsPage;