import { createSlice } from '@reduxjs/toolkit';

const initialStates = [];

export const listSlice = createSlice({
	name: 'slice',
	initialState: initialStates,
	reducers: {
		setList: (state, action) => {
			const { type, area, songs } = action.payload;
			return songs[area] ? songs[area].find(x => x.name === type).songs : [];
		}
	},
	extraReducers: {}
})

export const { setList } = listSlice.actions

export default listSlice.reducer