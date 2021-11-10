import { createSlice } from '@reduxjs/toolkit';
import * as _ from 'lodash';
import { BetPlacedModel, ChipModel } from '../../../models';

const betSlice = createSlice({
    name: 'bet',
    initialState: {
        placedBetsList: [],
        chips: [
            new ChipModel({ id: 0, nominal: 10, color: 'orange', active: true }),
            new ChipModel({ id: 1, nominal: 20, color: 'blue', active: false }),
            new ChipModel({ id: 2, nominal: 100, color: 'red', active: false }),
            new ChipModel({ id: 3, nominal: 500, color: 'green', active: false }),
            new ChipModel({ id: 4, nominal: 2000, color: 'dark', active: false }),
            new ChipModel({ id: 5, nominal: 10000, color: 'purple', active: false }),
        ],
        isMobileBetChipOpen: true,
        neighboursAmount: 2,
        neighboursLimit: [1, 9],
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
        setChipsList(state, action) {
           const chips = state.chips;
           const noms = action.payload;
           state.chips = noms.map((nominal, key) => (new ChipModel({...chips[key], nominal})));
        },
        setActiveChip(state, action) {
            const nominal = action.payload;
            state.chips = state.chips.map((chip) => (chip.nominal === nominal ? { ...chip, active: true } : {...chip, active: false}));
        },
        toggleMobileChip(state) {
            state.isMobileBetChipOpen = !state.isMobileBetChipOpen;
        },
        setNeighboursAmount(state, action) {
            const { neighboursLimit } = state;
            const { payload: amount } = action;
            let nextValue = amount <= neighboursLimit[0] ? neighboursLimit[0] : amount;
            nextValue = nextValue >= neighboursLimit[1] ? neighboursLimit[1] : nextValue;
            state.neighboursAmount = nextValue;
        }
    },
});

export default betSlice.reducer;
export const {
    addItemToPlacedBetsList,
    removeItemFromPlacedBetsList,
    resetBetsList,
    setChipsList,
    setActiveChip,
    toggleMobileChip,
    setNeighboursAmount,
} = betSlice.actions;
export const { name } = betSlice;