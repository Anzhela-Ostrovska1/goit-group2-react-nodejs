import { createAsyncThunk } from '@reduxjs/toolkit';
import { toast } from 'react-toastify';
import {
  editUserInfo,
  logout,
  refreshUser,
  signin,
  signup,
  updateAvatar,
  updateWaterRate,
} from '../Api/api';

export const registerThunk = createAsyncThunk(
  'auth/register',
  async (credentials, { rejectWithValue }) => {
    try {
      const data = await signup(credentials);
      return data;
    } catch (error) {
      if (error.response.status === 409) {
        toast.error(`User with email - ${credentials.email}, already exist`);
      }
      return rejectWithValue(error.message);
    }
  },
);

export const logInThunk = createAsyncThunk(
  'auth/login',
  async (credentials, { rejectWithValue }) => {
    try {
      const data = await signin(credentials);
      return data;
    } catch (error) {
      if (error.response.status === 401) {
        toast.error(`Email or password is wrong`);
      }
      return rejectWithValue(error.message);
    }
  },
);

export const logOutThunk = createAsyncThunk(
  'auth/logout',
  async (_, { rejectWithValue }) => {
    try {
      await logout();
      return;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  },
);

// User

export const refreshUserThunk = createAsyncThunk(
  'auth/refresh',
  async (_, { rejectWithValue, getState }) => {
    try {
      const { auth } = getState();
      const data = await refreshUser(auth.token);

      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  },
  {
    condition: (_, { getState }) => {
      const { auth } = getState();

      if (!auth.token) {
        return false;
      }
    },
  },
);

export const updateWaterRateThunk = createAsyncThunk(
  'auth/updateWaterRate',
  async (newWaterRate, { rejectWithValue }) => {
    try {
      const rate = Number(newWaterRate) * 1000;
      await updateWaterRate(rate);
      return rate;
    } catch (error) {
      if (error.response.status === 400) {
        toast.error(`WaterRate" must be greater than or equal to 0`);
      }
      return rejectWithValue(error.message);
    }
  },
);

export const updateAvatarThunk = createAsyncThunk(
  'auth/avatar',
  async (newPhotoFile, { rejectWithValue }) => {
    try {
      const avatarURL = await updateAvatar(newPhotoFile);
      return avatarURL;
    } catch (error) {
      if (error.response.status === 400) {
        toast.error(`Invalide file extention`);
      }
      return rejectWithValue(error.message);
    }
  },
);

export const editUserInfoThunk = createAsyncThunk(
  'auth/current',
  async (body, { rejectWithValue }) => {
    try {
      const data = await editUserInfo(body);
      return data;
    } catch (error) {
      if (error.response.status === 401) {
        toast.error(`Current password is incorrect`);
      }
      return rejectWithValue(error.message);
    }
  },
);
