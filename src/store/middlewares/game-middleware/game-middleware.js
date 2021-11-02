import { roundStageEnum } from '../../../enums';
import { resetBetsList, setChipsList } from '../../slices/bet/betSlice';
import { setWin } from '../../slices/game/gameSlice';

export const gameMiddleware = (store) => (next) => (action) => {
    switch (action.type) {
        case 'game/setRoundState':
        case 'game/setNewRound':
        case 'game/setEndBetting':
            if(action?.payload?.stage === roundStageEnum.get(4)?.value) store.dispatch(resetBetsList());
            if(action?.payload?.stage === roundStageEnum.get(2)?.value) store.dispatch(setWin(0));
            break;
        case 'game/setCurrency':
            const {
                chipValue1 = 1,
                chipValue2 = 5,
                chipValue3 = 25,
                chipValue4 = 100,
                chipValue5 = 500,
                chipValue6 = 1000,
            } = action.payload;
            store.dispatch(setChipsList([
                chipValue1,
                chipValue2,
                chipValue3,
                chipValue4,
                chipValue5,
                chipValue6,
            ]));
            break
        default:
            break;
    }
    const result = next(action);
    return result;
};