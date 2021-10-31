import { combineReducers } from '@reduxjs/toolkit';
import appSlice from './app';
import gameSlice from './game';
import streamSlice from './stream';
import betSlice from './bet';

const rootReducer = combineReducers({
    app: appSlice.default,
    game: gameSlice.default,
    stream: streamSlice.default,
    bet: betSlice.default,
});

export default rootReducer;