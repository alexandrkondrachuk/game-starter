import React from 'react';
import ButtonWithIcon from '../../../../../../../components/button-with-icon';
import Chip from '../../../../../../../components/chip';
import ChipsSwitcher from './components/chips-switcher';
import './portrait-content-menu.scss';

const PortraitContentMenu = () => {
    return (
        <div className="PortraitContentMenu">
            <div className="PortraitContentMenu__Section first">
                <ButtonWithIcon borderEnable={false}/>
                <ButtonWithIcon icon="statistic" borderEnable={false} />
                <ButtonWithIcon icon='toggle' borderEnable={false} />
            </div>
            <div className="PortraitContentMenu__Section second">
                <ButtonWithIcon icon='undo' />
                <ChipsSwitcher />
                <ButtonWithIcon icon="double" />
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