import React from 'react';
import * as _ from 'lodash';
import * as cn from 'classnames';
import WebrtcPlayer from '../../../../webrtc-player';
import { useSelector } from 'react-redux';
import { roundStageEnum } from '../../../../../enums';
import {
    PortraitBetPanel,
    PortraitStatusBar,
    PortraitShortStatistic,
    PortraitContentMenu,
    PortraitFooter,
} from './components';
import './portrait.scss';

const Portrait = () => {
    const roundStage = useSelector((state) => (_.get(state, 'game.roundState.stage')));
    const isOpen = roundStageEnum.get(roundStage).value === roundStageEnum.get(2).value;

    return (
        <div className="Portrait">
            <div className="Portrait__StatusBar">
                <PortraitStatusBar />
            </div>
            <div className="Portrait__ShortStatistic">
                <PortraitShortStatistic />
            </div>
            <div className="Portrait__Content">
                <div className="Content__Stream">
                    <WebrtcPlayer />
                </div>
                <div className={cn('Content__BetPanel', { open: isOpen })}>
                    <PortraitBetPanel />
                </div>
                <div className="Content__Menu">
                    <PortraitContentMenu />
                </div>
            </div>
            <div className="Portrait__Footer">
                <PortraitFooter />
            </div>
        </div>
    );
};

export default Portrait;