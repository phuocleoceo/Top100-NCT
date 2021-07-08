import { createSlice } from '@reduxjs/toolkit';

const initialStates = {
	avatar: "/plc.jpg",
	creator: "Trương Minh Phước",
	lyric: "hihi",
	music: "",
	title: "phuocleoceo"
};

export const playSlice = createSlice({
	name: 'play',
	initialState: initialStates,
	reducers: {
		setCurrentPlay: (state, action) => {
			const currentPlay = action.payload;
			return {
				avatar: currentPlay.avatar,
				creator: currentPlay.creator,
				lyric: currentPlay.lyric,
				music: currentPlay.music,
				title: currentPlay.title
			};
		},
		getNextPlay: (state, action) => {
			const listSongs = action.payload;
			const index = listSongs.findIndex(c => c.title === state.title);
			if (index === (listSongs.length - 1)) return listSongs[0];
			return listSongs[index + 1];
		},
		getPreviousPlay: (state, action) => {
			const listSongs = action.payload;
			const index = listSongs.findIndex(c => c.title === state.title);
			if (index === 0) return listSongs[listSongs.length - 1];
			return listSongs[index - 1];
		}
	},
	extraReducers: {}
})

export const { setCurrentPlay, getNextPlay, getPreviousPlay } = playSlice.actions

export default playSlice.reducer