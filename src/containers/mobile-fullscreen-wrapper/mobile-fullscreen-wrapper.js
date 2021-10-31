import React from 'react';
import { MobileFullscreen } from 'react-mobile-fullscreen';
import Mask from './components/mask';
import './mobile-fullscreen.scss';

const MobileFullscreenWrapper = ({ children }) => {
    return (
        <MobileFullscreen mask={Mask}>
            <div
                className="MobileFullscreen"
            >
                {children}
            </div>
        </MobileFullscreen>
    );
};

export default MobileFullscreenWrapper;