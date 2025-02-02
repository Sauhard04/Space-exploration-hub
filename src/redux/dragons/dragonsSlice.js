import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchDragons = createAsyncThunk('dragons/fetchDragons', async () => {
  const response = await axios.get('https://api.spacexdata.com/v4/dragons');
  return response.data;
});

const dragonsSlice = createSlice({
  name: 'dragons',
  initialState: {
    dragons: [],
    status: 'idle',
    error: null,
  },
  reducers: {
    reserveDragon: (state, action) => {
      const dragon = state.dragons.find((dragon) => dragon.id === action.payload);
      if (dragon) {
        dragon.reserved = true;
      }
    },
    cancelReservation: (state, action) => {
      const dragon = state.dragons.find((dragon) => dragon.id === action.payload);
      if (dragon) {
        dragon.reserved = false;
      }
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchDragons.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchDragons.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.dragons = action.payload.map((dragon) => ({
          id: dragon.id,
          name: dragon.name,
          type: dragon.type,
          flickr_images: dragon.flickr_images,
          reserved: false,
        }));
      })
      .addCase(fetchDragons.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});

export const { reserveDragon, cancelReservation } = dragonsSlice.actions;

export default dragonsSlice.reducer;
