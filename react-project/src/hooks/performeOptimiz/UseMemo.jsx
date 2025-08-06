import React, { useMemo, useState } from 'react';

function UseMemo() {
  const [search, setSearch] = useState('');

  const users = useMemo(() => {
    return Array.from({ length: 500 }, (_, i) => ({
      id: i + 1,
      name: `User ${i + 1}`
    }));
  }, []);

  const filteredUsers = useMemo(() => {
    const cleanedSearch = search.toLowerCase().replace(/\s/g, '');

    // block if search is empty or only 'user'
    if (!cleanedSearch || cleanedSearch === 'user') return [];

    return users.filter(user => {
      const cleanedName = user.name.toLowerCase().replace(/\s/g, '');
      return cleanedName.startsWith(cleanedSearch);
    });
  }, [search, users]);

  return (
    <div>
      <h1>UseMemo</h1>

      <input
        type="text"
        placeholder="Search here.."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      {filteredUsers.length > 0 ? (
        <ul>
          {filteredUsers.map(user => (
            <li key={user.id}>{user.name}</li>
          ))}
        </ul>
      ) : (
        search && <p>No user found</p>
      )}
    </div>
  );
}

export default UseMemo;

