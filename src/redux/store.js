import { configureStore } from '@reduxjs/toolkit';
import songSlice from './slices/songSlice';
import playSlice from './slices/playSlice';

export const store = configureStore({
	reducer: {
		song: songSlice,
		play: playSlice
	},
});