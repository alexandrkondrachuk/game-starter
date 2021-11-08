import React from 'react';
import './portrait-short-statistic.scss';
import * as _ from 'lodash';
import * as cn from 'classnames';
import { useSelector } from 'react-redux';
import Types from "../../../../../../../classes/Types"

const PortraitShortStatistic = () => {

    const lastNumbers = useSelector((state) => (_.get(state, 'game.rouletteStat.lastNumbers')))
    const shortStatistic = lastNumbers.slice(1, 14).map(number => <div className={Types.numberByColors[number]}>{number}</div>)

    return (
        <div className="PortraitShortStatistic">
            <div className={"lastNumber" + Types.numberByColors[lastNumbers[0]]}>{lastNumbers[0]}</div>
            {shortStatistic}
        </div>
    );
};

export default PortraitShortStatistic;