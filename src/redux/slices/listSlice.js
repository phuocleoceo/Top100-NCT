import { createSlice } from '@reduxjs/toolkit';

export const listSlice = createSlice({
	name: 'slice',
	initialState: [],
	reducers: {
		setList: (state, action) => {
			const { type, area, songs } = action.payload;
			return songs[area] ? songs[area].find(x => x.name === type).songs : [];
		},
		setShuffleList: (state, action) => {
			const list = [...state];
			for (let i = list.length - 1; i > 0; i--) {
				const j = Math.floor(Math.random() * (i + 1));
				const temp = list[i];
				list[i] = list[j];
				list[j] = temp;
			}
			return list;
		}
	},
	extraReducers: {}
})

export const { setList, setShuffleList } = listSlice.actions

export default listSlice.reducer