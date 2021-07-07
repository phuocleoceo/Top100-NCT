import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

export const fetchSongList = createAsyncThunk(
	"song/fetchSongList",
	async () => {
		try {
			const response = await fetch("https://api.apify.com/v2/key-value-stores/EJ3Ppyr2t73Ifit64/records/LATEST");
			const responseJSON = await response.json();
			const list = responseJSON.songs.top100_VN[0].songs;
			return list;
		}
		catch {
			return [];
		}
	}
);

export const songSlice = createSlice({
	name: 'song',
	initialState: [],
	reducers: {},
	extraReducers: {
		[fetchSongList.fulfilled]: (state, action) => {
			return action.payload;
		}
	}
})

//export const { } = songSlice.actions

export default songSlice.reducer