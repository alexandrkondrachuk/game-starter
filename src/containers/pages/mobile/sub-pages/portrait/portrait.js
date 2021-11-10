import React from 'react';
import * as _ from 'lodash';
import * as cn from 'classnames';
import WebrtcPlayer from '../../../../webrtc-player';
import { useDispatch, useSelector } from 'react-redux';
import { roundStageEnum } from '../../../../../enums';
import {
    PortraitStatusBar,
    PortraitShortStatistic,
    PortraitContentMenu,
    PortraitFooter,
    PortraitRoundResult,
    PortraitBetSwitcher,
} from './components';
import './portrait.scss';
import MobileMenu from '../../menu';
import { Icon } from '../../../../../components/svg-components';
import Fab from '@material-ui/core/Fab';
import { setBetPanelDown } from '../../../../../store/slices/game/gameSlice';
import ButtonWithIcon from '../../../../../components/button-with-icon';

const Portrait = () => {
    const dispatch = useDispatch();
    const roundStage = useSelector((state) => (_.get(state, 'game.roundState.stage')));
    const mobileBetPanelType = useSelector((state) => (_.get(state, 'game.mobileBetPanelType')));
    const isOpen = roundStageEnum?.get(roundStage)?.value === roundStageEnum?.get(2)?.value;
    const isBetPanelDown = useSelector((state) => (_.get(state, 'game.isBetPanelDown')));
    const menuItemToOpen = useSelector((state) => (_.get(state, 'game.menuItemToOpen')));

    const downBetPanel = () => {
        const isDown = !!!isBetPanelDown;
        dispatch(setBetPanelDown(isDown));
    }

    const switchToggleButton = () => {
        if (isBetPanelDown === true) {
            return 'toggleReverse';
        }
        else {
            return 'toggle';
        }
    }

    return (
        <div className="Portrait" id="Portrait">
            <MobileMenu pageWrapId="Portrait" outerContainerId="Mobile" isOpen={!!menuItemToOpen} />
            <div className="Portrait__StatusBar">
                <PortraitStatusBar />
            </div>
            <div className="Portrait__ShortStatistic">
                <PortraitShortStatistic />
            </div>
            <div className="Portrait__Content">
                <div className="Content__Stream">
                    <WebrtcPlayer />
                    <PortraitRoundResult />
                </div>
                <div className={cn('Content__BetPanel', { open: isOpen }, { openDown: isBetPanelDown })}>
                    <PortraitBetSwitcher type={mobileBetPanelType} />
                </div>
                <div className="Content__DownButton">
                    <ButtonWithIcon icon={switchToggleButton()} isActive={isBetPanelDown} onClick={downBetPanel} borderEnable={false} />
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