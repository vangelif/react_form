import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  users: [],
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    addUser: (state, action) => {
      // Implement adding a user to the state here
    },
    removeUser: (state, action) => {
      // Implement removing a user from the state here
    },
  },
});

export const { addUser, removeUser } = userSlice.actions;

export default userSlice.reducer;
