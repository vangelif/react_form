import { createSlice } from '@reduxjs/toolkit';

const userSlice = createSlice({
  name: 'user',
  initialState: [],
  reducers: {
    addUser: (state, action) => {
      state.push(action.payload);
    },
    registerUser: (state, action) => {
      state.users.push(action.payload);
    },
    loginUser: (state, action) => {
      const { username, password } = action.payload;
      const user = state.users.find(
        (user) => user.username === username && user.password === password
      );

      if (user) {
        state.currentUser = { ...user, password: undefined };
        state.error = null;
      } else {
        state.currentUser = null;
        state.error = 'Incorrect username or password';
      }
    },
    logoutUser: (state) => {
      state.currentUser = null;
      state.error = null;
    },
    editUser: (state, action) => {
      const { id, ...updatedInfo } = action.payload;
      const userIndex = state.users.findIndex((user) => user.id === id);
      if (userIndex !== -1) {
        state.users[userIndex] = { ...state.users[userIndex], ...updatedInfo };
        // Ensure password is hidden
        state.users[userIndex].password = undefined;
      }
    },
    removeUser: (state, action) => {
      const idToRemove = action.payload;
      state.users = state.users.filter((user) => user.id !== idToRemove);
    },
 
  },
});

export const { addUser, registerUser, loginUser, logoutUser, editUser, removeUser } = userSlice.actions;
export default userSlice.reducer;
