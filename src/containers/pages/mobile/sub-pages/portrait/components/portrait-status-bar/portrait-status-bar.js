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
                Round Status
            </div>
        </div>
    );
};

export default PortraitStatusBar;