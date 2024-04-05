import { createSlice } from '@reduxjs/toolkit';

import { addWaterThunk, editWaterThunk } from './waterOperations.jsx';

export const initialState = {
  notes: [],
  isLoading: false,
  isError: null,
  currentNote: null,
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
      });
  },
});

export const waterReducer = waterSlice.reducer;
