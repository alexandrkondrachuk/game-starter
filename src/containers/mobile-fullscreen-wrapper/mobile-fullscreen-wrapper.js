import React, { useState } from 'react';
import { MobileFullscreen } from 'react-mobile-fullscreen';
import Mask from './components/mask';
import './mobile-fullscreen.scss';
import { useDispatch, useSelector } from 'react-redux';
import * as _ from 'lodash';
import config from '../../config/config';
import ClickIcon from './components/icons/click-icon';
import appSlice from '../../store/slices/app';

const MobileFullscreenWrapper = ({ children }) => {

    const dispatch = useDispatch();
    const [showAppMask, setAppMaskStatus] = useState(true);
    const ua = window.navigator.userAgent;
    const isStartFromApp = /Parimatch/.test(ua);
    //const isStartFromApp = false;
    const playerInstance = useSelector((state) => (_.get(state, 'stream.playerInstance', null)));

    const enableSound = () => {
        if (playerInstance) {
            playerInstance.unmute();
            playerInstance.setVolume(1);
        }
    };

    if (isStartFromApp || window != window.top)
        dispatch(appSlice.setVoice(false));

    const appMask = (
        // eslint-disable-next-line jsx-a11y/click-events-have-key-events,jsx-a11y/no-static-element-interactions
        <div
            className="app-mask"
            onClick={() => {
                _.delay(() => { enableSound(); }, 3500);
                setAppMaskStatus(false);
            }}
        >
            <div className="app-mask-icon">
                <ClickIcon />
            </div>
            <div className="app-mask-title">
                Click to play
            </div>
        </div>
    );

    return (


        <>
        {(!isStartFromApp && window === window.top) ? (
            <MobileFullscreen mask={Mask}>
                <div className="MobileFullscreen">
                    {children}
                </div>
            </MobileFullscreen>
        ) : (
                <div className="MobileFullscreen">
                    {children}
                </div>
        )}
        </>
    );
};

export default MobileFullscreenWrapper;