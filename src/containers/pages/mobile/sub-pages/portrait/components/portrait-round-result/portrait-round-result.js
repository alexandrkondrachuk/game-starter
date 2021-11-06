import React from 'react';
import * as cn from 'classnames';
import './portrait-round-result.scss';
import { useSelector } from 'react-redux';
import * as _ from 'lodash';
import { roundStageEnum } from '../../../../../../../enums';
import getSymbolFromCurrency from 'currency-symbol-map';

const PortraitRoundResult = () => {
    const roundStage = useSelector((state) => (_.get(state, 'game.roundState.stage')));
    const currency = useSelector((state) => (_.get(state, 'game.player.currency')))
    const currencySymbol = getSymbolFromCurrency(currency);
    const win = useSelector((state) => (_.get(state, 'game.win', 0)));
    const luckyNumber = useSelector((state) => (_.get(state, 'game.roundState.winNumber.luckyNumber', '')))
    const color = useSelector((state) => (_.get(state, 'game.roundState.color', 'default')))
    const isResult = roundStageEnum?.get(roundStage)?.value === roundStageEnum?.get(4)?.value;

    if (!isResult) return null;

    return (
        <div className="PortraitRoundResult">
            <div className={cn("PortraitRoundResult__LuckyNumber", "trapezoid", { [color]: true })}/>
            <div className="Number">{luckyNumber}</div>
            {(!!win) && <div className="Win"><span className="win-text">You win</span>&nbsp;<span className="win-value">{currencySymbol} {win}</span></div>}
        </div>
    );
};

export default PortraitRoundResult;