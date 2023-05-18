import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const url = 'https://api.spacexdata.com/v3/rockets';

export const fetchRockets = createAsyncThunk('rockets/fetchRockets', async () => {
  try {
    const response = await axios.get(url);
    return response.data;
  } catch (error) {
    return error.message;
  }
});

const initialState = {
  rocketList: [],
  status: 'idle',
  error: null,
};

export const rocketsSlice = createSlice({
  name: 'rockets',
  initialState,
  reducers: {
    bookRocket: (state, action) => {
      const newState = state.rocketList.map((rocket) => {
        if (rocket.id !== action.payload) {
          return rocket;
        }
        return { ...rocket, reserved: true };
      });
      return { ...state, rocketList: newState };
    },
    leaveRocket: (state, action) => {
      const newState = state.rocketList.map((rocket) => {
        if (rocket.id !== action.payload) {
          return rocket;
        }
        return { ...rocket, reserved: false };
      });
      return { ...state, rocketList: newState };
    },
  },
  extraReducers(builder) {
    builder
      .addCase(fetchRockets.pending, (state) => ({
        ...state,
        status: 'loading',
      }))
      .addCase(fetchRockets.fulfilled, (state, action) => {
        const newState = { ...state };
        const newArray = [];
        action.payload.forEach((key) => {
          newArray.push({
            id: key.rocket_id,
            name: key.rocket_name,
            description: key.description,
            image: key.flickr_images,
          });
        });
        newState.rocketList = [...newArray];
        newState.status = 'loaded';
        return newState;
      })
      .addCase(fetchRockets.rejected, (state, action) => ({
        ...state,
        status: 'failed',
        error: [...state.error, action.error.message],
      }));
  },
});

export default rocketsSlice.reducer;
export const { bookRocket, leaveRocket } = rocketsSlice.actions;
