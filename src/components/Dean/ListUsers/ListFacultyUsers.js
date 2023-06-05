import React, { useState, useEffect } from 'react';

const UserList = () => {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        const fetchUsers = async () => {
            try {
                const res = await fetch('/api/dean/getFacultyList');
                const data = await res.json();
                console.log('Fetched data:', data);
                setUsers(data);
            } catch (error) {
                console.error(error);
                setUsers([]);
            }
        };

        fetchUsers();
    }, []);

    return (
        <div>
            <h2>User List</h2>
            <div className='m-4'>
                <ul>
                    {users.map(user => (
                        <li key={user._id}>{user.name}</li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default UserList;
