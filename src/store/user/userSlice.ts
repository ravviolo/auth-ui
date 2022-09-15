import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

import type { RootState } from 'store';

export interface User {
  uuid: string;
  firstname: string;
  lastname: string;
  birthday: string;
  username: string;
  email: string;
  createdAt: string;
  avatarUrl: string;
}

export const loginUser = createAsyncThunk(
  'user/loginUser',
  async (loginCredentials: { email: string; password: string }) => {
    const { email } = loginCredentials;

    const user: User = await Promise.resolve({
      uuid: '0a3d6cb1-c586-425a-bcbc-6660c2f07914',
      firstname: 'Anakin',
      lastname: 'Skywalker',
      username: 'Mr_Vader',
      birthday: 'Wed Jul 31 1963',
      email,
      createdAt: 'Thu Jun 20 2002',
      avatarUrl:
        'https://images.unsplash.com/photo-1546561892-65bf811416b9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8ZGFydGglMjB2YWRlcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60',
    });
    return user;
  }
);

export const registerUser = createAsyncThunk(
  'user/registerUser',
  async (registerCredentials: { email: string; password: string }) => {
    const { email } = registerCredentials;

    const user: User = await Promise.resolve({
      uuid: '0a3d6cb1-c586-425a-bcbc-6660c2f07914',
      firstname: 'Baby',
      lastname: 'Yoda',
      username: 'grogu',
      birthday: 'Mon Dec 31 1984',
      email,
      createdAt: 'Sun Aug 17 2003',
      avatarUrl:
        'https://images.unsplash.com/photo-1618336753974-aae8e04506aa?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
    });
    return user;
  }
);

export interface UserState {
  userData: User | null;
  status: 'idle' | 'loading' | 'complete';
}

const initialState: UserState = {
  status: 'idle',
  userData: null,
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(loginUser.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        state.status = 'complete';
        state.userData = action.payload;
      })
      .addCase(registerUser.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(registerUser.fulfilled, (state, action) => {
        state.status = 'complete';
        state.userData = action.payload;
      });
  },
});

export const selectUser = (state: RootState) => state.user.userData;
export const selectUserFetchStatus = (state: RootState) => state.user.status;

export default userSlice.reducer;
