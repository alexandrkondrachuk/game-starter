import React from 'react';
import ButtonWithIcon from '../../../../../../../components/button-with-icon';
import ChipsSwitcher from './components/chips-switcher';
import './portrait-content-menu.scss';
import { useSelector, useDispatch } from 'react-redux';
import * as _ from 'lodash';
import Api from '../../../../../../../classes/Api';
import { roundStageEnum, betPanelEnum } from '../../../../../../../enums';
import { setMenuItemToOpen, setMobileBetType } from '../../../../../../../store/slices/game/gameSlice';

const PortraitContentMenu = () => {
    const dispatch = useDispatch();
    const isMobileBetChipOpen = useSelector((state) => (_.get(state, 'bet.isMobileBetChipOpen', true)));
    const mobileBetPanelType = useSelector((state) => (_.get(state, 'game.mobileBetPanelType')));
    const isBetPanelDown = useSelector((state) => (_.get(state, 'game.isBetPanelDown')));
    const roundStage = useSelector((state) => (_.get(state, 'game.roundState.stage')));
    const isOpen = roundStageEnum?.get(roundStage)?.value === roundStageEnum?.get(2)?.value;

    const doUndoBet = () => {
        if (Api.instance && isOpen) {
            Api.instance.doUndoBet();
        }
    };

    const doDoublingBets = () => {
        if (Api.instance && isOpen) {
            Api.instance.doDoublingBets();
        }
    };

    const doRepeatBets = () => {
        if (Api.instance && isOpen) {
            Api.instance.doRepeatBets();
        }
    };

    const toggleBetPanel = () => {
        const newType = mobileBetPanelType === betPanelEnum.get('panel').key ? betPanelEnum.get('racetrack').key : betPanelEnum.get('panel').key;
        dispatch(setMobileBetType(newType));
    }

    const toggleChat = () => {
        dispatch(setMenuItemToOpen('chat'));  
    }

    return (
        <div className="PortraitContentMenu">
            <div className="PortraitContentMenu__Section first">
                <ButtonWithIcon borderEnable={false}/>
                <ButtonWithIcon icon="statistic" borderEnable={false} />
                <ButtonWithIcon icon="chat" borderEnable={false} onClick={toggleChat} />              
            </div>
            <div className="PortraitContentMenu__Section second">
                {isMobileBetChipOpen && <ButtonWithIcon icon='undo' onClick={() => doUndoBet()}/>}
                <ChipsSwitcher />
                {isMobileBetChipOpen && <ButtonWithIcon icon="double" onClick={doDoublingBets} />}
            </div>
            <div className="PortraitContentMenu__Section third">
                <ButtonWithIcon icon="auto" />
                <ButtonWithIcon icon="racetrack" isActive={mobileBetPanelType === betPanelEnum.get('racetrack').key} onClick={toggleBetPanel} />
            </div>
        </div>
    );
};

export default PortraitContentMenu;