import React from 'react';
import { betPanelEnum } from '../../../../../../../enums';
import * as PropTypes from 'prop-types';
import PortraitBetPanel from '../portrait-bet-panel';
import PortraitRacetrack from '../portrait-racetrack';

const PortraitBetSwitcher = ({ type }) => {
    const components = {
        [betPanelEnum.get('panel').key]: PortraitBetPanel,
        [betPanelEnum.get('racetrack').key]: PortraitRacetrack,
    };

    const Component = components[type];

    return (<Component />);
};

PortraitBetSwitcher.defaultProps = {
    type: betPanelEnum.get('racetrack').key,
};

PortraitBetSwitcher.propTypes = {
    type: PropTypes.oneOf([betPanelEnum.get('panel').key, betPanelEnum.get('racetrack').key]),
};

export default PortraitBetSwitcher;