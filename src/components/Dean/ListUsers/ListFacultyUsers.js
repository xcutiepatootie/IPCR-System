import React from 'react';

const UserList = ({ users }) => {
    return (
        <div>
            <h2>User List</h2>
            <ul>
                {users.map(user => (
                    <li key={user._id}>{user.name}</li>
                ))}
            </ul>
        </div>
    );
};

export default UserList;
