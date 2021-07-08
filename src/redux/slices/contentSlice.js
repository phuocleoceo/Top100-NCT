import { createSlice } from '@reduxjs/toolkit';

const initialStates = {
	area: "top100_VN",
	type: "Nhạc Trẻ"
};

export const contentSlice = createSlice({
	name: 'content',
	initialState: initialStates,
	reducers: {
		setCurrentContent: (state, action) => {
			const currentContent = action.payload;
			return {
				area: currentContent.area,
				type: currentContent.type
			};
		}
	},
	extraReducers: {}
})

export const { setCurrentContent } = contentSlice.actions

export default contentSlice.reducer