import { createSlice } from '@reduxjs/toolkit';
import * as _ from 'lodash';
import { BetPlacedModel } from '../../../models';

const betSlice = createSlice({
    name: 'bet',
    initialState: {
        placedBetsList: [],
    },
    reducers: {
        addItemToPlacedBetsList(state, action) {
            state.placedBetsList.push(new BetPlacedModel(action.payload));
        },
        removeItemFromPlacedBetsList(state, action) {
            const canceledBetCode = _.get(action.payload, '[0].code');
            state.placedBetsList = state.placedBetsList.filter((bet) => (bet.code !== canceledBetCode));
        },
        resetBetsList(state) {
            state.placedBetsList = [];
        },
    },
});

export default betSlice.reducer;
export const { addItemToPlacedBetsList, removeItemFromPlacedBetsList, resetBetsList } = betSlice.actions;
export const { name } = betSlice;