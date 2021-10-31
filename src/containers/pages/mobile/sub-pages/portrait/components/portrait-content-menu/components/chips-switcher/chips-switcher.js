import React from 'react';
import Chip from '../../../../../../../../../components/chip';
import './chips-switcher.scss';

const ChipsSwitcher = () => {
    const [showChip, setChipStatus] = React.useState(true);
    const toggleChip = () => setChipStatus(!showChip);
    return (
        <button className="ChipsSwitcher" onClick={toggleChip}>
            {showChip && <Chip nominal={10} color='orange' />}
            {!showChip && <div className="ChipsSwitcher__Zone">Zone</div>}
        </button>
    );
};

export default ChipsSwitcher;