// import React from 'react';
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { loginUser } from '../redux/userSlice';
import { TextField, Button } from '@mui/material';
import Box from '@mui/material/Box';

const Login = () => {
  // Implement login logic here
  const dispatch = useDispatch();
  const error = useSelector((state) => state.user.error);

  const [formData, setFormData] = useState({
    username: '',
    password: '',
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
    // Dispatch the login action
    dispatch(loginUser(formData));
  };
  return (
    <Box display="flex" flexDirection="column" alignItems="center" mt={4}>
      <form onSubmit={handleSubmit}>
        <div>
          <TextField
            label="Username"
            type="text"
            name="username"
            value={formData.username}
            onChange={handleChange}
            variant="outlined"
          />
        </div>
        <div>
          <TextField
            label="Password"
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            variant="outlined"
          />
        </div>
        {error && <p style={{ color: 'red' }}>{error}</p>}
        <Button type="submit" variant="contained" color="primary">
          Login
        </Button>
      </form>
    </Box>
  );
};

export default Login;
