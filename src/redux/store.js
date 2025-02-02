import { configureStore } from '@reduxjs/toolkit';
import rocketReducer from './Rockets/RocketsSlice';
import missionReducer from './missions/missionSlice';
import dragonsReducer from './dragons/dragonsSlice';

const store = configureStore({
  reducer: {
    rockets: rocketReducer,
    missions: missionReducer,
    dragons: dragonsReducer,
  },
});

export default store;
