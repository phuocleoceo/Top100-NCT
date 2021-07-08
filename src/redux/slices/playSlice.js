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
		}
	},
	extraReducers: {}
})

export const { setCurrentPlay } = playSlice.actions

export default playSlice.reducer