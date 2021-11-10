import { createSlice } from '@reduxjs/toolkit';
import { betPanelEnum } from '../../../enums';
import { CurrencyModel, PlayerModel, RoundStateModel, RouletteStatModel } from '../../../models';

const gameSlice = createSlice({
    name: 'game',
    initialState: {
        readyState: false,
        roundState: null,
        player: null,
        currency: null,
        endBetting: new RoundStateModel(),
        newRound: new RoundStateModel(),
        leftUntilEndBet: 0,
        connectionToken: null,
        rouletteStat: null,
        limits: null,
        win: 0,
        mobileBetPanelType: betPanelEnum.get('panel').key,
        isBetPanelDown: false,
        menuItemToOpen: null,
    },
    reducers: {
        setReadyState(state, action) {
            state.readyState = action.payload;
        },
        setRoundState(state, action) {
            state.roundState = new RoundStateModel(action.payload);
        },
        setEndBetting(state, action) {
            const updatedAfterEndModel = new RoundStateModel(action.payload);
            state.roundState = updatedAfterEndModel;
            state.endBetting = updatedAfterEndModel;
        },
        setNewRound(state, action) {
            const updatedOnNewModel = new RoundStateModel(action.payload);
            state.roundState = updatedOnNewModel;
            state.newRound = updatedOnNewModel;
        },
        setPlayer(state, action) {
            state.player = new PlayerModel(action.payload);
        },
        setCurrency(state, action) {
            state.currency = new CurrencyModel(action.payload);
        },
        setLeftUntilEndBet(state, action) {
            state.leftUntilEndBet = action.payload;
        },
        setConnectionToken(state, action) {
            state.connectionToken = action.payload;
        },
        setRouletteStat(state, action) {
            state.rouletteStat = new RouletteStatModel(action.payload);
        },
        setLimits(state, action) {
            state.limits = action.payload;
        },
        setWin(state, action) {
            state.win = action.payload;
        },
        setMobileBetType(state, action) {
            state.mobileBetPanelType = action.payload;
        },
        setBetPanelDown(state, action) {
            state.isBetPanelDown = action.payload;
        },
        setMenuItemToOpen(state, action) {
            state.menuItemToOpen = action.payload;
        },
    },
});

export default gameSlice.reducer;
export const {
    setReadyState,
    setRoundState,
    setPlayer,
    setCurrency,
    setEndBetting,
    setNewRound,
    setLeftUntilEndBet,
    setConnectionToken,
    setRouletteStat,
    setLimits,
    setWin,
    setMobileBetType,
    setBetPanelDown,
    setMenuItemToOpen,
} = gameSlice.actions;
export const { name } = gameSlice;