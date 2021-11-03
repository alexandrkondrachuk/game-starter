import React from 'react';
import './portrait-status-bar.scss';
import getSymbolFromCurrency from 'currency-symbol-map';
import * as _ from 'lodash';
import * as cn from 'classnames';
import { useSelector } from 'react-redux';
import { roundStageEnum } from '../../../../../../../enums';
import PortraitTimer from '../portrait-timer';

const PortraitStatusBar = () => {
    const balance = useSelector((state) => (_.get(state, 'game.player.balance')))
    const totalBet = useSelector((state) => (_.get(state, 'game.player.totalBetOfCurrentRound')))
    const currency = useSelector((state) => (_.get(state, 'game.player.currency')))
    const currencySymbol = getSymbolFromCurrency(currency);
    const roundStage = useSelector((state) => (_.get(state, 'game.roundState.stage')))
    const luckyNumber = useSelector((state) => (_.get(state, 'game.roundState.winNumber.luckyNumber')))
    const color = useSelector((state) => (_.get(state, 'game.roundState.color')))
    const roundAppearance = {
        [roundStageEnum.get(2).value]: { text: 'Place your bets please', stageClass: 'green' },
        [roundStageEnum.get(3).value]: { text: 'No more bets', stageClass: 'red' },
        [roundStageEnum.get(4).value]: { text: 'Win number', stageClass: 'gray' },
        [roundStageEnum.get(5).value]: { text: 'Place your bets please', stageClass: 'green' },
    };
    const renderRoundText = () => (
        <span className="round-status">{_.get(roundAppearance, `${roundStage}.text`, '')}</span>
    );

    return (
        <div className="PortraitStatusBar">
            <div className="PortraitStatusBar__Status__Balance">
                <div className="Balance">
                    <div className="title">Balance</div>
                    <div className="value">
                        {currencySymbol}
                        {balance}
                    </div>
                </div>
                <div className="Bet">
                    <div className="title">Total Bet</div>
                    <div className="value">
                        {currencySymbol}
                        {totalBet}
                    </div>
                </div>
            </div>
            <div className={cn("PortraitStatusBar__Status__Round", {[_.get(roundAppearance, `${roundStage}.stageClass`, 'default')]: true})}>
                {renderRoundText()}
                {roundStageEnum.get(2).value === roundStage && <PortraitTimer />}
                {roundStageEnum.get(4).value === roundStage && <span className="luckyNumber">{ luckyNumber }&nbsp;{ color }</span>}
            </div>
        </div>
    );
};

export default PortraitStatusBar;