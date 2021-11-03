import React from 'react';
import ButtonWithIcon from '../../../../../../../components/button-with-icon';
import ChipsSwitcher from './components/chips-switcher';
import './portrait-content-menu.scss';
import { useSelector } from 'react-redux';
import * as _ from 'lodash';
import Api from '../../../../../../../classes/Api';
import { roundStageEnum } from '../../../../../../../enums';

const PortraitContentMenu = () => {
    const isMobileBetChipOpen = useSelector((state) => (_.get(state, 'bet.isMobileBetChipOpen', true)));
    const roundStage = useSelector((state) => (_.get(state, 'game.roundState.stage')));
    const isOpen = roundStageEnum?.get(roundStage)?.value === roundStageEnum?.get(2)?.value;

    const doUndoBet = () => {
        if (Api.instance && isOpen) {
            Api.instance.doUndoBet();
        }
    };

    return (
        <div className="PortraitContentMenu">
            <div className="PortraitContentMenu__Section first">
                <ButtonWithIcon borderEnable={false}/>
                <ButtonWithIcon icon="statistic" borderEnable={false} />
                <ButtonWithIcon icon='toggle' borderEnable={false} />
            </div>
            <div className="PortraitContentMenu__Section second">
                {isMobileBetChipOpen && <ButtonWithIcon icon='undo' onClick={() => doUndoBet()}/>}
                <ChipsSwitcher />
                {isMobileBetChipOpen && <ButtonWithIcon icon="double" />}
            </div>
            <div className="PortraitContentMenu__Section third">
                <ButtonWithIcon icon="auto" />
                <ButtonWithIcon icon="racetrack" />
                <ButtonWithIcon icon="menu" />
            </div>
        </div>
    );
};

export default PortraitContentMenu;