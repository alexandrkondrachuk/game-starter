import { roundStageEnum } from '../../../enums';
import { resetBetsList } from '../../slices/bet/betSlice';
import { setWin } from '../../slices/game/gameSlice';

export const gameMiddleware = (store) => (next) => (action) => {
    switch (action.type) {
        case 'game/setRoundState':
        case 'game/setNewRound':
        case 'game/setEndBetting':
            if(action?.payload?.stage === roundStageEnum.get(4)?.value) store.dispatch(resetBetsList());
            if(action?.payload?.stage === roundStageEnum.get(2)?.value) store.dispatch(setWin(0));
            break;
        default:
            break;
    }
    const result = next(action);
    return result;
};