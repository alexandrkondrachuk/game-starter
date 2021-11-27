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
import appSlice from '../../../../../store/slices/app';
import PartnerIcon from '../../../../../components/partner-icon/partner-icon';

const Portrait = () => {
    const dispatch = useDispatch();
    const roundStage = useSelector((state) => (_.get(state, 'game.roundState.stage')));
    const mobileBetPanelType = useSelector((state) => (_.get(state, 'game.mobileBetPanelType')));
    const isOpen = roundStageEnum?.get(roundStage)?.value === roundStageEnum?.get(2)?.value;
    const isFixRoundResult = roundStageEnum?.get(roundStage)?.value === roundStageEnum?.get(4)?.value;
    const isBetPanelDown = useSelector((state) => (_.get(state, 'game.isBetPanelDown')));
    const menuItemToOpen = useSelector((state) => (_.get(state, 'game.menuItemToOpen')));
    const playerInstance = useSelector((state) => (_.get(state, 'stream.playerInstance', null)));
    const voice = useSelector((state) => (_.get(state, 'app.voice', null)));

    const partnerCid = useSelector((state) => (_.get(state, 'game.player.cid')));
    let isPartnerLogo = false;
    if (partnerCid === "parimatch") {
        isPartnerLogo = true;
    }

    const userAgent = window.navigator.userAgent;
    const isStartFromApp = /Native/.test(userAgent);
    const isFromIphone = /iPhone/.test(userAgent);

    if (!!!isStartFromApp && isFromIphone)
        dispatch(appSlice.setVoice(false));

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

    const enableSound = () => {
        if (!!!voice && playerInstance) {
            playerInstance.unmute();
            dispatch(appSlice.setVoice(true));
            //playerInstance.setVolume(1);
        }
    };

    return (
        <div className="Portrait" id="Portrait" onClick={enableSound}>
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
                    {isOpen && <ButtonWithIcon icon={switchToggleButton()} isActive={isBetPanelDown} onClick={downBetPanel} borderEnable={false} />}
                </div>
                
                {isPartnerLogo && isFixRoundResult && <div className="Content__PartnerLogo">
                    <PartnerIcon partner={partnerCid} />
                </div>}
                <div className="Content__Menu">
                    <PortraitContentMenu />
                </div>
            </div>
            <div className="Portrait__Footer">
                <PortraitFooter />
            </div>           
            {
                !!!isStartFromApp && isFromIphone &&
                <div className="Portrait__IosPlug">

                </div>
            }
        </div>
    );
};

export default Portrait;