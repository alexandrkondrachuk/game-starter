import React from 'react';
import './minimal-mask.scss';
import * as _ from 'lodash';
import { useSelector } from 'react-redux';
import ScrollIcon from '../icons/scroll-icon';

const MinimalMask = () => {

    const playerInstance = useSelector((state) => (_.get(state, 'stream.playerInstance', null)));

    return (
        <div className="MinimalMask">
            <div className="minimal-ui-mask-icon">
                <ScrollIcon />
            </div>
            <div className="minimal-ui-mask-title">
                Swipe Up to play
            </div>
        </div>
    );
};

export default MinimalMask;