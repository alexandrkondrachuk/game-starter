import { createSlice } from '@reduxjs/toolkit';

const appSlice = createSlice({
    name: 'app',
    initialState: {
        query: null,
        voice: true,
    },
    reducers: {
        setQuery(state, action) {
            state.query = action.payload;
        },
        setVoice(state, action) {
            state.voice = action.payload;
        }
    },
});

export default appSlice.reducer;
export const { setQuery, setVoice } = appSlice.actions;
export const { name } = appSlice;