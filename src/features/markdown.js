import { createSlice } from '@reduxjs/toolkit';

export const markdownSlice = createSlice({
    name: "markdown",
    initialState : {
        markdownInput: 'This is a placeholder preview text'
    },
    reducers: {
        updatePreview: (state, action) => {
            state.markdownInput = action.payload;
        }
    }
});

export default markdownSlice.reducer;