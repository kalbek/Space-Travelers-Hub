import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
  missions: [],
  error: '',
};

export const getMissions = createAsyncThunk('missions', async () => {
  const response = await axios('https://api.spacexdata.com/v3/missions');
  return response.data;
});

const missionsSlice = createSlice({
  name: 'rockets',
  initialState,
  reducers: {
    joinMission: (state, action) => {
      const reserved = [];
      state.missions.forEach((mission) => {
        if (mission.mission_id === action.payload.id) {
          const reservedMission = { ...mission, reserved: !mission.reserved };
          reserved.push(reservedMission);
        } else {
          reserved.push(mission);
        }
      });
      state.missions = reserved;
    },
  },

  extraReducers: (builder) => {
    builder.addCase(getMissions.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(getMissions.fulfilled, (state, action) => {
      state.isLoading = false;
      if (state.missions.length === 0) state.missions = action.payload;
    });
    builder.addCase(getMissions.rejected, (state) => {
      state.error = 'Something went wrong';
      state.isLoading = false;
    });
  },
});

export const { addMission, joinMission } = missionsSlice.actions;

export default missionsSlice.reducer;
