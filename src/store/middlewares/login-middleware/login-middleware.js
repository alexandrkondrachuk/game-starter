import * as _ from 'lodash';
import { setReadyState } from '../../slices/game/gameSlice';

export const loginMiddleware = (store) => (next) => (action) => {
    const state = store.getState();
    const connectionToken = _.get(state, 'game.connectionToken', null);
    const roundState = _.get(state, 'game.roundState', null);
    const rouletteStat = _.get(state, 'game.rouletteStat', null);
    const player = _.get(state, 'game.player', null);
    const currency = _.get(state, 'game.currency', null);
    const isReady = !!connectionToken && !!roundState && !!rouletteStat && !!player && !!currency;

    switch (action.type) {
        case 'game/setConnectionToken':
        case 'game/setRoundState':
        case 'game/setRouletteStat':
        case 'game/setPlayer':
        case 'game/setCurrency':
        case 'game/setLimits':
            _.delay(() => { store.dispatch(setReadyState(isReady)); }, 2000);
            
            break;
        default:
            break;
    }
    const result = next(action);
    return result;
};