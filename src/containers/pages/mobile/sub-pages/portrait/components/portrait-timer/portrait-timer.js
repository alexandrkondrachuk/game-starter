import React from 'react';
import * as _ from 'lodash';
import { useSelector } from 'react-redux';
import { useStopwatch } from 'react-timer-hook';
import './portrait-timer.scss';

const PortraitTimer = () => {
    const leftUntilEndBet = useSelector((state) => (_.get(state, 'game.leftUntilEndBet', 20000)));
    const leftSeconds = parseInt((leftUntilEndBet / 1000).toString());
    const {
        seconds,
    } = useStopwatch({ autoStart: true });
    const timerValue = (leftSeconds - seconds) >= 0 ? (leftSeconds - seconds) : 0;
    return (
        <span className="PortraitTimer">{timerValue}</span>
    );
};

export default PortraitTimer;