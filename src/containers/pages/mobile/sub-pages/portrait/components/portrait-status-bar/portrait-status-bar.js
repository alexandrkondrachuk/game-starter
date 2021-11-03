import React from 'react';
import './portrait-status-bar.scss';
import getSymbolFromCurrency from 'currency-symbol-map';
import * as _ from 'lodash';
import { useSelector } from 'react-redux';
//import PlayerModel from '../../../../../../../models/player/player';
//import RouletteRoundModel from '../../../../../../../models/roulette-round/roulette-round';

const PortraitStatusBar = () => {
    
    const balance = useSelector((state) => (_.get(state, 'game.player.balance')))
    const totalBet = useSelector((state) => (_.get(state, 'game.player.totalBetOfCurrentRound')))
    const currency = useSelector((state) => (_.get(state, 'game.player.currency')))
    const currencySymbol = getSymbolFromCurrency(currency);
    const roundStage = useSelector((state) => (_.get(state, 'game.roundState.stage')))
    const luckyNumber = useSelector((state) => (_.get(state, 'game.roundState.winNumber.luckyNumber')))
    const color = useSelector((state) => (_.get(state, 'game.roundState.color')))

    const getRoundStage = () => {
        if (roundStage == 2 || roundStage == 5) {
            return 'Bet'
        }

        if (roundStage == 3) {
            return 'Spin'
        }

        if (roundStage == 4) {
            return 'Win number ' + luckyNumber + ' ' + color
        }
    };

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
            <div className="PortraitStatusBar__Status__Round">
                {getRoundStage()}
            </div>
        </div>
    );
};

export default PortraitStatusBar;