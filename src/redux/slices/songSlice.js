import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

export const fetchSongList = createAsyncThunk(
	"song/fetchSongList",
	async () => {
		try {
			const response = await fetch(process.env.REACT_APP_API);
			const responseJSON = await response.json();
			const list = responseJSON.songs;
			return list;
		}
		catch {
			return {};
		}
	}
);

export const songSlice = createSlice({
	name: 'song',
	initialState: {},
	reducers: {},
	extraReducers: {
		[fetchSongList.fulfilled]: (state, action) => {
			return action.payload;
		}
	}
})

//export const { } = songSlice.actions

export default songSlice.reducer