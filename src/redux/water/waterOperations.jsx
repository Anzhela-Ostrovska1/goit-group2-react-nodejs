import { createAsyncThunk } from '@reduxjs/toolkit';

import { addWater, editWater } from '../Api/api';
export const addWaterThunk = createAsyncThunk(
  'water/add',
  async (note, { rejectWithValue }) => {
    try {
      const data = await addWater(note);
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  },
);
export const editWaterThunk = createAsyncThunk(
  'water/edit',
  async (note, { rejectWithValue }) => {
    try {
      const data = await editWater(note);
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  },
);
