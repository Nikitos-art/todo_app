import React from 'react';

const UserItem = ({ user }) => {
  return (
    <tr>
      <td>{user.name}</td>
    </tr>
  );
};

const UsersList = ({ users }) => {
  return (
    <table>
      <thead>
        <tr>
          <th>Name</th>
        </tr>
      </thead>
      <tbody>
        {users.map((user) => (
          <UserItem user={user} key={user.name} />
        ))}
      </tbody>
    </table>
  );
};


export default UsersList;