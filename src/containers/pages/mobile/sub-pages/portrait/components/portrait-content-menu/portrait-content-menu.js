import React from 'react';
import ButtonWithIcon from '../../../../../../../components/button-with-icon';
import ChipsSwitcher from './components/chips-switcher';
import './portrait-content-menu.scss';
import { useSelector } from 'react-redux';
import * as _ from 'lodash';

const PortraitContentMenu = () => {
    const isMobileBetChipOpen = useSelector((state) => (_.get(state, 'bet.isMobileBetChipOpen', true)));
    return (
        <div className="PortraitContentMenu">
            <div className="PortraitContentMenu__Section first">
                <ButtonWithIcon borderEnable={false}/>
                <ButtonWithIcon icon="statistic" borderEnable={false} />
                <ButtonWithIcon icon='toggle' borderEnable={false} />
            </div>
            <div className="PortraitContentMenu__Section second">
                {isMobileBetChipOpen && <ButtonWithIcon icon='undo' />}
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