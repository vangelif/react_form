import React from 'react';
import { useSelector } from 'react-redux';
import Box from '@mui/material/Box';
const UserSettings = () => {
  // Access the user data from the Redux store
  const userData = useSelector((state) => state.user);

  return (
    <Box display="flex" flexDirection="column" alignItems="center" mt={4}>
      <h1>User Settings</h1>
      <table>
        <thead>
          <tr>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Username</th>
            <th>Email</th>
            <th>Phone number</th>
            <th>Country</th>
          </tr>
        </thead>
        <tbody>
          {userData.map((user, index) => (
            <tr key={index}>
              <td>{user.firstName}</td>
              <td>{user.lastName}</td>
              <td>{user.username}</td>
              <td>{user.email}</td>
              <td>{user.phoneNumber}</td>
              <td>{user.country}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </Box>
  );
};

export default UserSettings;
