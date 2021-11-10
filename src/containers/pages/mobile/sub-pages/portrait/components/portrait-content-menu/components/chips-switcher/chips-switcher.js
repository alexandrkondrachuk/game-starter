import React from 'react';
import * as cn from 'classnames';
import * as _ from 'lodash';
import Chip from '../../../../../../../../../components/chip';
import { useSelector, useDispatch } from 'react-redux';
import { setActiveChip, toggleMobileChip } from '../../../../../../../../../store/slices/bet/betSlice';
import { useOnClickOutside } from "use-hooks";

import './chips-switcher.scss';

const ChipsSwitcher = () => {
    const dispatch = useDispatch();
    const zoneRef = React.useRef(null);
    const chips = useSelector((state) => (_.get(state, 'bet.chips', [])));
    const isMobileBetChipOpen = useSelector((state) => (_.get(state, 'bet.isMobileBetChipOpen', true)));
    const activeChip = chips.find((chip) => (chip.active === true));
    const toggleChip = () => dispatch(toggleMobileChip());
    useOnClickOutside(zoneRef, toggleChip);

    const onSelectChipClick = (chip) => {
        dispatch(setActiveChip(chip?.nominal))
        _.delay(() => {
            toggleChip();
        }, 100);
    }

    return (
        <button className="ChipsSwitcher">
            {isMobileBetChipOpen  && <Chip onClick={toggleChip} {...activeChip} />}
            {!isMobileBetChipOpen  && <div ref={zoneRef} className="ChipsSwitcher__Zone">
                {chips.map((chip, key) => (
                    <Chip key={chip.id} onClick={() => onSelectChipClick(chip)} {...chip} className={cn('chip-selector', { [`index-${key}`]: true })}/>))}
                <div className="zone-active-chip">
                    <Chip onClick={toggleChip} {...activeChip} />
                </div>
            </div>}
        </button>
    );
}
;

export default ChipsSwitcher;