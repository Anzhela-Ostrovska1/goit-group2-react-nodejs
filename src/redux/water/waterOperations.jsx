import { createAsyncThunk } from '@reduxjs/toolkit';

import {
  addWater,
  editWater,
  deleteWater,
  fetchTodayWater,
  fetchCurrentWater,
  fetchMonthWater,
} from '../Api/api';
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

export const deleteWaterThunk = createAsyncThunk(
  'water/delete',
  async (waterId, { rejectWithValue }) => {
    try {
      const data = await deleteWater(waterId);
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  },
);

export const fetchCurrentWaterThunk = createAsyncThunk(
  'water/fetchCurrentWater',
  async (waterId, { rejectWithValue }) => {
    try {
      const data = await fetchCurrentWater(waterId);
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  },
);

export const fetchTodayWaterThunk = createAsyncThunk(
  'water/fetchTodayWater',
  async (_, { rejectWithValue }) => {
    try {
      const data = await fetchTodayWater();
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  },
);

export const fetchMonthWaterThunk = createAsyncThunk(
  'water/fetchMonthWater',
  async (body, { rejectWithValue }) => {
    try {
      const data = await fetchMonthWater(body);
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  },
);
