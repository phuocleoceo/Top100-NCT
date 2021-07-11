import { configureStore } from '@reduxjs/toolkit';
import songSlice from './slices/songSlice';
import playSlice from './slices/playSlice';
import contentSlice from './slices/contentSlice';
import listSlice from './slices/listSlice';

export const store = configureStore({
	reducer: {
		song: songSlice,
		play: playSlice,
		content: contentSlice,
		list: listSlice
	},
});