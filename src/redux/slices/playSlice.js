import { createSlice } from '@reduxjs/toolkit';

const initialStates = {
	coverImage: "",
	creator: "",
	lyric: "",
	music: "",
	title: ""
};

export const playSlice = createSlice({
	name: 'play',
	initialState: initialStates,
	reducers: {
		setCurrentPlay: (state, action) => {
			const currentPlay = action.payload;
			return {
				coverImage: currentPlay.coverImage,
				creator: currentPlay.creator,
				lyric: currentPlay.lyric,
				music: currentPlay.music,
				title: currentPlay.title
			};
		}
	},
	extraReducers: {}
})

export const { setCurrentPlay } = playSlice.actions

export default playSlice.reducer