import React, { useState } from 'react';
import './portrait-footer.scss';
import getSymbolFromCurrency from 'currency-symbol-map';
import * as _ from 'lodash';
import { useSelector } from 'react-redux';
import config from '../../../../../../../config';

const PortraitFooter = () => {

    const minBet = useSelector((state) => (_.get(state, 'game.currency.minBet')))
    const maxBet = useSelector((state) => (_.get(state, 'game.limits[5].limit')))
    //const name = config.get('name', '').split(' ');
    const currency = useSelector((state) => (_.get(state, 'game.player.currency')))
    const currencySymbol = getSymbolFromCurrency(currency);
    const roundId = useSelector((state) => (_.get(state, 'game.roundState.id')))
    const winners = useSelector((state) => (_.get(state, 'game.winners')))

    const [footerMessage, setFooterMessage] = useState(<br/>)
    const [isInitialRender, setIsInitialRender] = useState(true)

    React.useEffect(() => {
        if (Array.isArray(winners?.winners) && winners.winners.length > 0) {
            setIsInitialRender(false);
            let i = 1; 
            console.log(winners);  
            setFooterMessage(
                <div>
                    <span className="winner">{winners.winnersCount + " players wins "}</span>
                    <span className="winnerSum">{winners.allPlayersWinsSum + " " + currencySymbol}</span>
                </div>
            );     
            winners.winners.forEach((winner) => {
                setTimeout(() => {
                    setFooterMessage(<span className="winner">{currencySymbol + " " + winner.win + " " + winner.nickname}</span>);
                }, i * 1500);
                i++;
            });  
            setTimeout(() => {
                setFooterMessage(<br/>);
            }, i * 1500);
        }
    }, [winners]);

    return (
        <div className="PortraitFooter">
            <div className="Footer__Message">
                {footerMessage}
            </div>
            <div className="Footer__RoundInfo">
                <div className="Footer__RoundInfo__Limits">
                    <span className="name">
                        {'City Roulette'}
                    </span>
                    &nbsp;
                    <span className="limits">
                        {currencySymbol}
                        {minBet}
                        { '-' }
                        {maxBet}
                    </span>
                </div>
                <div className="Footer__RoundInfo__Round">
                    #
                    {roundId}
                </div>
            </div>
        </div>
    );
};

export default PortraitFooter;