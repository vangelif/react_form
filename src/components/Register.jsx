import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { registerUser, addUser } from '../redux/userSlice';
import { useHistory } from 'react-router-dom';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Box from '@mui/material/Box';
const Register = ({ countries }) => {
    const history = useHistory();
  const dispatch = useDispatch();
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    username: '',
    email: '',
    password: '',
    phoneNumber: '',
    country: countries,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Validate form data here
    // If validation succeeds, dispatch the action to register the user
    // Clear form data after registration
    setFormData({
      firstName: '',
      lastName: '',
      username: '',
      email: '',
      password: '',
      phoneNumber: '',
      country: countries[0],
    });
    registerUser(formData);
    dispatch(addUser(formData));
    history.push('/user-settings');
  };

  return (
    <Box display="flex" flexDirection="column" alignItems="center" mt={4}>
    {/* <div> */}
      {/* Register form UI */}
      <form onSubmit={handleSubmit}>
      <div>
          <label>First Name:</label>
          <TextField
            type="text"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
            required
            fullWidth
            mb={2} 
          />
        </div>
        <div>
          <label>Last Name:</label>
          <TextField
            type="text"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
            required
            fullWidth
            mb={2} 
          />
        </div>
        <div>
          <label>Username:</label>
          <TextField
            type="text"
            name="username"
            value={formData.username}
            onChange={handleChange}
            required
            fullWidth
            mb={2} 
          />
        </div>
        <div>
          <label>Email:</label>
          <TextField
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            fullWidth
            mb={2} 
          />
        </div>
        <div>
          <label>Password:</label>
          <TextField
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            required
            minLength={8}
            pattern="^(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_+])[A-Za-z\d!@#$%^&*()_+]{8,}$"
            title="Password must contain at least 8 characters, including 1 uppercase letter, 1 number, and 1 special character."
            fullWidth
            mb={2} 
          />
        </div>
        <div>
          <label>Phone Number:</label>
          <TextField
            type="tel"
            name="phoneNumber"
            value={formData.phoneNumber}
            onChange={handleChange}
            fullWidth
            mb={2} 
          />
        </div>
        <div>
        <label>Country:</label>
        <FormControl>

          <Select
            name="country"
            value={formData.country}
            onChange={handleChange}
            required
            fullWidth
            // mb={2} 
          >
      {countries.map((country) => (
        <MenuItem key={country.code} value={country.code} fullWidth>
          {country.name}
          
        </MenuItem>
            ))}
          </Select>
          
          </FormControl>
        </div>
        <Button type="submit" variant="contained" color="primary" fullWidth mb={4}>
  Register User
</Button>
      </form>
      </Box>
  );
};

export default Register;
