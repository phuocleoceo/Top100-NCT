import { createSlice } from '@reduxjs/toolkit';

export const listSlice = createSlice({
	name: 'slice',
	initialState: [],
	reducers: {
		setList: (state, action) => {
			const { type, area, songs } = action.payload;
			return songs[area] ? songs[area].find(x => x.name === type).songs : [];
		},
		shuffleList: (state, action) => {
			const list = state; // ReduxToolkit has Immer library to Immutable -> not Clone
			for (let i = list.length - 1; i > 0; i--) {
				const j = Math.floor(Math.random() * (i + 1));
				const temp = list[i];
				list[i] = list[j];
				list[j] = temp;
			}
			return list;
		},
		searchSong: (state, action) => {
			const { searchValue, songs } = action.payload;
			let searchList = [];
			(songs) &&
				Object.getOwnPropertyNames(songs).map(top =>
					songs[top] &&
					songs[top].forEach(st => {
						let stSearch = st.songs.filter(x =>
							(typeof x.title === "string"
								&& x.title.toLowerCase().indexOf(searchValue.toLowerCase()) > -1) ||
							(typeof x.creator === "string"
								&& x.creator.toLowerCase().indexOf(searchValue.toLowerCase()) > -1));
						searchList = searchList.concat(stSearch);
					})
				)
			return searchList;
		}
	},
	extraReducers: {}
})

export const { setList, shuffleList, searchSong } = listSlice.actions

export default listSlice.reducer