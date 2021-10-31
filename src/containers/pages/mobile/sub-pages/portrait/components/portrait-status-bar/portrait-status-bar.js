import React from 'react';
import './portrait-status-bar.scss';

const PortraitStatusBar = () => {
    return (
        <div className="PortraitStatusBar">
            <div className="Status__Balance">
                Balance Status
            </div>
            <div className="Status__Round">
                Round Status
            </div>
        </div>
    );
};

export default PortraitStatusBar;