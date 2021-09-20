import { createSlice } from "@reduxjs/toolkit";ˇ

export const markdownSlice = createSlice({
    name: "markdown",
    initialState : {
        markdownInput: ''
    },
    reducers: {
        updatePreview: (state, action) => {
            state.markdownInput = action.payload;
        }
    }
});

export default markdownSlice.reducer;