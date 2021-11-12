import React from 'react';
import * as _ from 'lodash';
import { useSelector } from 'react-redux';
import getSymbolFromCurrency from 'currency-symbol-map';
import { Icon } from '../../../../../../components/svg-components';

import './limits.scss';

const Limits = () => {

    const currency = useSelector((state) => (_.get(state, 'game.player.currency')))
    const currencySymbol = getSymbolFromCurrency(currency);
    const minBet = useSelector((state) => (_.get(state, 'game.currency.minBet')))
    const nmbrLimit = useSelector((state) => (_.get(state, 'game.limits[0].limit')))
    const spltLimit = useSelector((state) => (_.get(state, 'game.limits[1].limit')))
    const strtLimit = useSelector((state) => (_.get(state, 'game.limits[2].limit')))
    const crnrLimit = useSelector((state) => (_.get(state, 'game.limits[3].limit')))
    const sxlnLimit = useSelector((state) => (_.get(state, 'game.limits[4].limit')))
    const columnLimit = useSelector((state) => (_.get(state, 'game.limits[4].limit')))
    const redLimit = useSelector((state) => (_.get(state, 'game.limits[5].limit')))
    const oddLimit = useSelector((state) => (_.get(state, 'game.limits[7].limit')))
    const lowLimit = useSelector((state) => (_.get(state, 'game.limits[9].limit')))
    const dozenLimit = useSelector((state) => (_.get(state, 'game.limits[11].limit')))

    return (
        <div className="Limits__Mobile">
            <div className="Limits__Mobile__Header">
                <div className="Header__Icon"><Icon path="limits" /></div>
                <div className="Header__Text">Limits & Payouts</div>
            </div>
            <div className="Limits__Mobile__Body">
                <div className="Body__Main">
                    <div className="Main__Game">
                        <span className="label">Table:</span>
                        {' '}
                        <span className="description">
                            { 'City' }
                            { ' ' }
                            { 'Roulette' }
                            { ' ' }
                            { 'Live' }
                            { ' ' }
                        </span>
                    </div>
                    <div className="Main__Limits">
                        <span className="label">Bet limits:</span>
                        {' '}
                        <span className="description font-color-yellow">
                            {currencySymbol}
                            {minBet}
                            { '-' }
                            {redLimit}
                        </span>
                    </div>
                </div>
                <div className="Body__Table">
                    <div className="Table">
                        <div className="Tr">
                            <div className="Th left">Bet</div>
                            <div className="Th lg right">Bet Limits</div>
                            <div className="Th right">Payout</div>
                        </div>
                        <div className="Tr">
                            <div className="Td left">STRAIGHT UP</div>
                            <div className="Td lg right font-color-yellow">
                                {currencySymbol}
                                {minBet}
                                { '-' }
                                {nmbrLimit}
                            </div>
                            <div className="Td right">35:1</div>
                        </div>
                        <div className="Tr">
                            <div className="Td left">SPLIT</div>
                            <div className="Td lg right font-color-yellow">
                                {currencySymbol}
                                {minBet}
                                { '-' }
                                {spltLimit}
                            </div>
                            <div className="Td right">17:1</div>
                        </div>
                        <div className="Tr">
                            <div className="Td left">STREET</div>
                            <div className="Td lg right font-color-yellow">
                                {currencySymbol}
                                {minBet}
                                { '-' }
                                {strtLimit}
                            </div>
                            <div className="Td right">11:1</div>
                        </div>
                        <div className="Tr">
                            <div className="Td left">CORNER</div>
                            <div className="Td lg right font-color-yellow">
                                {currencySymbol}
                                {minBet}
                                { '-' }
                                {crnrLimit}
                            </div>
                            <div className="Td right">8:1</div>
                        </div>
                        <div className="Tr">
                            <div className="Td left">SIX LINE</div>
                            <div className="Td lg right font-color-yellow">
                                {currencySymbol}
                                {minBet}
                                { '-' }
                                {sxlnLimit}
                            </div>
                            <div className="Td right">5:1</div>
                        </div>
                        <div className="Tr">
                            <div className="Td left">COLUMNS/DOZENS</div>
                            <div className="Td lg right font-color-yellow">
                                {currencySymbol}
                                {minBet}
                                { '-' }
                                {dozenLimit}
                            </div>
                            <div className="Td right">2:1</div>
                        </div>
                        <div className="Tr">
                            <div className="Td left">RED/BLACK</div>
                            <div className="Td lg right font-color-yellow">
                                {currencySymbol}
                                {minBet}
                                { '-' }
                                {redLimit}
                            </div>
                            <div className="Td right">1:1</div>
                        </div>
                        <div className="Tr">
                            <div className="Td left">EVEN/ODD</div>
                            <div className="Td lg right font-color-yellow">
                                {currencySymbol}
                                {minBet}
                                { '-' }
                                {oddLimit}
                            </div>
                            <div className="Td right">1:1</div>
                        </div>
                        <div className="Tr">
                            <div className="Td left">1-18/19-36</div>
                            <div className="Td lg right font-color-yellow">
                                {currencySymbol}
                                {minBet}
                                { '-' }
                                {lowLimit}
                            </div>
                            <div className="Td right">1:1</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );   
}

export default Limits;
