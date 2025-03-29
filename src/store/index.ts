import { configureStore } from '@reduxjs/toolkit';
import storyReducer from './slices/storySlice';
import videoReducer from './slices/videoSlice';

export const store = configureStore({
  reducer: {
    story: storyReducer,
    video: videoReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch; 