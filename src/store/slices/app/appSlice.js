import { createSlice } from '@reduxjs/toolkit';

const appSlice = createSlice({
    name: 'app',
    initialState: {
        query: null,
    },
    reducers: {
        setQuery(state, action) {
            state.query = action.payload;
        }
    },
});

export default appSlice.reducer;
export const { setQuery } = appSlice.actions;
export const { name } = appSlice;