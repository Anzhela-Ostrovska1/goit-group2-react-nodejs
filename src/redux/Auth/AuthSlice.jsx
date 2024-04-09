import { createSlice } from '@reduxjs/toolkit';
import {
  editUserInfoThunk,
  logInThunk,
  logOutThunk,
  refreshUserThunk,
  registerThunk,
  updateAvatarThunk,
  updateWaterRateThunk,
} from './AuthOperations.jsx';

const initialState = {
  user: {
    email: '',
    avatarURL: '',
    name: '',
    gender: '',
    waterRate: '',
  },
  token: null,
  isLoggedIn: false,
  isRefreshing: false,
  isLoading: false,
  error: null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setToken: (state, { payload }) => {
      state.token = payload;
    },
  },
  extraReducers: builder => {
    // Registration
    builder.addCase(registerThunk.pending, state => {
      state.isLoading = true;
      state.error = null;
    });
    builder.addCase(registerThunk.fulfilled, (state, { payload }) => {
      state.user = payload.user;
      state.token = payload.token;
      state.isLoggedIn = true;
      state.isLoading = false;
      state.error = null;
    });
    builder.addCase(registerThunk.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.error.message;
    });

    // logIn
    builder.addCase(logInThunk.pending, state => {
      state.isLoading = true;
      state.error = null;
    });
    builder.addCase(logInThunk.fulfilled, (state, { payload }) => {
      state.user = payload.user;
      state.token = payload.token;
      state.isLoggedIn = true;
      state.isLoading = false;
      state.error = null;
    });
    builder.addCase(logInThunk.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.error.message;
    });

    // logOut
    builder.addCase(logOutThunk.pending, state => {
      state.isLoading = true;
    });
    builder.addCase(logOutThunk.fulfilled, state => {
      localStorage.clear();
      return { ...initialState };
    });
    builder.addCase(logOutThunk.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.error.message;
    });

    // Update user info
    builder.addCase(refreshUserThunk.pending, state => {
      state.isLoading = true;
    });
    builder.addCase(refreshUserThunk.fulfilled, (state, { payload }) => {
      state.user = payload;
      state.isRefreshing = false;
      state.isLoggedIn = true;
      state.isLoading = false;
    });
    builder.addCase(refreshUserThunk.rejected, (state, action) => {
      state.isRefreshing = false;
      state.isLoading = false;
      state.error = action.error.message;
    });

    // UpdateWaterRate
    builder.addCase(updateWaterRateThunk.pending, state => {
      state.isLoading = true;
    });
    builder.addCase(updateWaterRateThunk.fulfilled, (state, { payload }) => {
      state.user.waterRate = payload;
      state.isLoading = false;
    });
    builder.addCase(updateWaterRateThunk.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.error.message;
    });

    // Update Avatar
    builder.addCase(updateAvatarThunk.pending, state => {
      state.isLoading = true;
    });
    builder.addCase(updateAvatarThunk.fulfilled, (state, { payload }) => {
      state.user.avatarURL = payload;
      state.isLoading = false;
    });
    builder.addCase(updateAvatarThunk.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.error.message;
    });

    // Edit User Info
    builder.addCase(editUserInfoThunk.pending, state => {
      state.isLoading = true;
    });
    builder.addCase(editUserInfoThunk.fulfilled, (state, { payload }) => {
      state.user = { ...state.user, ...payload };
      state.isLoading = false;
    });
    builder.addCase(editUserInfoThunk.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.error.message;
    });
  },
});

export const { setToken } = authSlice.actions;
export const authReducer = authSlice.reducer;

