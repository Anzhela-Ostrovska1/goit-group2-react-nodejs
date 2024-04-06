import { createSlice } from '@reduxjs/toolkit';

import {
  addWaterThunk,
  editWaterThunk,
  deleteWaterThunk,
  fetchTodayWaterThunk,
  fetchCurrentWaterThunk,
  fetchMonthWaterThunk,
} from './waterOperations.jsx';

export const initialState = {
  notes: [],
  monthNotes: [],
  currentNote: null,
  isLoading: false,
  isError: null,
  isModalOpen: false,
};

const waterSlice = createSlice({
  name: 'water',
  initialState,
  reducers: {
    setCurrentNote: (state, { payload }) => {
      state.currentNote = payload;
    },
  },
  extraReducers: builder => {
    builder
      .addCase(addWaterThunk.fulfilled, (state, { payload }) => {
        state.notes.push(payload);
        state.isLoading = false;
      })

      .addCase(addWaterThunk.pending, state => {
        state.isLoading = true;
        state.isError = null;
      })

      .addCase(addWaterThunk.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.isError = payload;
      })

      .addCase(editWaterThunk.fulfilled, (state, { payload }) => {
        const index = state.notes.findIndex(item => {
          return item.id === payload.id;
        });
        if (index === -1) return;
        state.notes.splice(index, 1, payload);
        state.isLoading = false;
      })

      .addCase(editWaterThunk.pending, state => {
        state.isLoading = true;
        state.isError = null;
      })

      .addCase(editWaterThunk.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.isError = payload;
      })

      .addCase(deleteWaterThunk.pending, state => {
        state.isLoading = true;
        state.isError = null;
      })
      .addCase(deleteWaterThunk.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.notes = state.notes.filter(({ id }) => id !== payload.id);
      })
      .addCase(deleteWaterThunk.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.isError = payload;
      })

      .addCase(fetchCurrentWaterThunk.pending, state => {
        state.isLoading = true;
        state.isError = null;
      })
      .addCase(fetchCurrentWaterThunk.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.currentNote = payload;
      })
      .addCase(fetchCurrentWaterThunk.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.isError = payload;
      })

      .addCase(fetchTodayWaterThunk.pending, state => {
        state.isLoading = true;
        state.isError = null;
      })
      .addCase(fetchTodayWaterThunk.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.notes = payload;
      })
      .addCase(fetchTodayWaterThunk.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.isError = payload;
      })

      .addCase(fetchMonthWaterThunk.pending, state => {
        state.isLoading = true;
        state.isError = null;
      })
      .addCase(fetchMonthWaterThunk.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.monthNotes = payload;
      })
      .addCase(fetchMonthWaterThunk.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.isError = payload;
      });
  },
});

export const waterReducer = waterSlice.reducer;
