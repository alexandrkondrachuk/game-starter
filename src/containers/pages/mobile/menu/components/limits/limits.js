import React from 'react';
import * as PropTypes from 'prop-types';
import * as _ from 'lodash';
import { connect } from 'react-redux';
import getSymbolFromCurrency from 'currency-symbol-map';
import { Icon } from '../../../../../../../components/svg-components';
import PlayerInfoModel from '../../../../../../../models/player-info-model';
import CurrencyModel from '../../../../../../../models/currency-model';
import config from '../../../../../../../config';
import { number } from '../../../../../../../lang';

import './limits.scss';

function Limits({
    playerInfo, currencyModel,
}) {
    const { minBet, maxPlayerBankerBet, maxTiePairBet } = currencyModel;
    const name = config.get('name', '').split(' ');
    const currency = _.get(playerInfo, 'currency', config.get('currency'));
    const currencySymbol = getSymbolFromCurrency(currency);
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
                            { _.get(name, '[0]', '') }
                            { ' ' }
                            { _.get(name, '[1]', '') }
                            { ' ' }
                            { _.get(name, '[2]', '') }
                            { ' ' }
                        </span>
                    </div>
                    <div className="Main__Limits">
                        <span className="label">Bet limits:</span>
                        {' '}
                        <span className="description font-color-yellow">
                            {currencySymbol}
                            {number({ value: minBet })}
                            { '-' }
                            {number({ value: maxPlayerBankerBet })}
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
                            <div className="Td left">Player</div>
                            <div className="Td lg right font-color-yellow">
                                {currencySymbol}
                                {number({ value: minBet })}
                                { '-' }
                                {number({ value: maxPlayerBankerBet })}
                            </div>
                            <div className="Td right">1:1</div>
                        </div>
                        <div className="Tr">
                            <div className="Td left">Banker</div>
                            <div className="Td lg right font-color-yellow">
                                {currencySymbol}
                                {number({ value: minBet })}
                                { '-' }
                                {number({ value: maxPlayerBankerBet })}
                            </div>
                            <div className="Td right">0.95:1</div>
                        </div>
                        <div className="Tr">
                            <div className="Td left">Tie</div>
                            <div className="Td lg right font-color-yellow">
                                {currencySymbol}
                                {number({ value: minBet })}
                                { '-' }
                                {number({ value: maxTiePairBet })}
                            </div>
                            <div className="Td right">8:1</div>
                        </div>
                        <div className="Tr">
                            <div className="Td left">P Pair / B Pair</div>
                            <div className="Td lg right font-color-yellow">
                                {currencySymbol}
                                {number({ value: minBet })}
                                { '-' }
                                {number({ value: maxTiePairBet })}
                            </div>
                            <div className="Td right">11:1</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

Limits.propTypes = {
    // dispatch: PropTypes.func.isRequired,
    playerInfo: PropTypes.instanceOf(PlayerInfoModel).isRequired,
    currencyModel: PropTypes.instanceOf(CurrencyModel).isRequired,
};

const mapStateToProps = (state) => {
    const playerInfo = _.get(state, 'game.playerInfo');
    const currencyModel = _.get(state, 'game.currency');
    return { playerInfo, currencyModel };
};

const dispatchStateToProps = (dispatch) => ({ dispatch });

export default connect(mapStateToProps, dispatchStateToProps)(Limits);
