import { createSlice } from '@reduxjs/toolkit';

const appSlice = createSlice({
    name: 'app',
    initialState: {
        query: null,
        voice: true,
        isInitVoice: false,
    },
    reducers: {
        setQuery(state, action) {
            state.query = action.payload;
        },
        setVoice(state, action) {
            state.voice = action.payload;
        },
        setInitVoice(state, action) {
            state.isInitVoice = action.payload;
        },
    },
});

export default appSlice.reducer;
export const { setQuery, setVoice, setInitVoice } = appSlice.actions;
export const { name } = appSlice;