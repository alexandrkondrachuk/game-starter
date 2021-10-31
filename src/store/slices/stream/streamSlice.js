import { createSlice } from '@reduxjs/toolkit';
import { streamStageEnum } from '../../../enums';

const streamSlice = createSlice({
    name: 'stream',
    initialState: {
        playerInstance: null,
        playerStage: streamStageEnum.get(0).value,
        error: null,
    },
    reducers: {
        setStreamInstance(state, action) {
            state.playerInstance = action.payload;
        },
        setPlayerStage(state, action) {
            state.playerStage = action.payload;
        },
        setError(state, action) {
            state.error = action.payload;
        }
    },
});

export default streamSlice.reducer;
export const { setStreamInstance, setPlayerStage, setError } = streamSlice.actions;
export const { name } = streamSlice;