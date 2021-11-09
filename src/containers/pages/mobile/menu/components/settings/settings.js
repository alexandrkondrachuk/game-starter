import React from 'react';
import * as _ from 'lodash';
import Switch from '@material-ui/core/Switch';
import { useSelector, useDispatch } from 'react-redux';
import { Icon } from '../../../../../../components/svg-components';
import appSlice from '../../../../../../store/slices/app';

import './settings.scss';

const Settings = (store) => {

    const dispatch = useDispatch();
    const playerInstance = useSelector((state) => (_.get(state, 'stream.playerInstance', null)));
    const voice = useSelector((state) => (_.get(state, 'app.voice', null)));

    const handleVoice = (enable = true) => {
        if (playerInstance) {
            if (enable) {
                playerInstance.unmute();
                dispatch(appSlice.setVoice(true));
            } else {
                playerInstance.mute();
                dispatch(appSlice.setVoice(false));
            }
        }
    };

    const handleChange = (event) => {
        const { name, checked } = event.target;
        if (name === 'voice') handleVoice(checked);
    };

    return (
        <div className="Settings__Mobile">
            <div className="Settings__Mobile__Header">
                <div className="Header__Icon"><Icon path="settings" /></div>
                <div className="Header__Text">Settings</div>
            </div>
            <div className="Settings__Mobile__Body">
                <div className="Setting">
                    {/* eslint-disable-next-line react/no-unescaped-entities */}
                    <div className="Setting__Title">Dealer's voice</div>
                    <div className="Setting__Action">
                        <Switch
                            checked={voice}
                            onClick={handleChange}
                            name="voice"
                            color="secondary"
                        />
                    </div>
                </div>
            </div>
            <div className="Settings__Mobile__Footer">
                <p>
                    <span className="title">Version </span>
                    &nbsp;
                    <span>
                        1.15
                    </span>
                </p>
            </div>
        </div>
    );
}

export default Settings;
