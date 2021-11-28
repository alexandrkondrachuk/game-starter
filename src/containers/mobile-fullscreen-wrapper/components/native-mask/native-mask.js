import React from 'react';
import './native-mask.scss';
import * as _ from 'lodash';
import { useDispatch, useSelector } from 'react-redux';
import ClickIcon from '../icons/click-icon';
import appSlice from '../../../../store/slices/app';

const NativeMask = () => {

    const dispatch = useDispatch();

    const playerInstance = useSelector((state) => (_.get(state, 'stream.playerInstance', null)));

    const enableSound = () => {
        if (playerInstance) {
            playerInstance.unmute();
            dispatch(appSlice.setInitVoice(true));
            //playerInstance.setVolume(1);
        }
    };

    return (
        <div className="NativeMask" onClick={enableSound}>
            <div className="native-mask-icon">
                <ClickIcon />
            </div>
            <div className="native-mask-title">
                Click to play
            </div>
        </div>
    );
};

export default NativeMask;