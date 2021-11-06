import React from 'react';
import * as _ from 'lodash';
import * as PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Switch from '@material-ui/core/Switch';
import { Icon } from '../../../../../../../components/svg-components';
import { app as appActions } from '../../../../../../../store/actions';
import config from '../../../../../../../config';

import './settings.scss';

function Settings({ dispatch, player, settings }) {
    const { voice = true, sound = true } = settings;
    const version = config.get('version');
    //const commitHash = _.get(Baccarat, 'shortHash', '0000');
    const handleVoice = (enable = true) => {
        if (player) {
            if (enable) {
                player.unmute();
                dispatch(appActions.setSetting({ name: 'voice', value: true }));
            } else {
                player.mute();
                dispatch(appActions.setSetting({ name: 'voice', value: false }));
            }
        }
    };
    const handleSound = (enable = true) => {
        if (enable) {
            dispatch(appActions.setSoundEffectVolume(1));
            dispatch(appActions.setSetting({ name: 'sound', value: true }));
        } else {
            dispatch(appActions.setSoundEffectVolume(0));
            dispatch(appActions.setSetting({ name: 'sound', value: false }));
        }
    };
    const handleChange = (event) => {
        const { name, checked } = event.target;
        if (name === 'voice') handleVoice(checked);
        if (name === 'sound') handleSound(checked);
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
                <div className="Setting">
                    <div className="Setting__Title">Game sound</div>
                    <div className="Setting__Action">
                        <Switch
                            checked={sound}
                            onClick={handleChange}
                            name="sound"
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
                        { version }
                    </span>
                </p>
            </div>
        </div>
    );
}

Settings.defaultProps = {
    player: null,
};

Settings.propTypes = {
    dispatch: PropTypes.func.isRequired,
    // eslint-disable-next-line react/forbid-prop-types
    player: PropTypes.object,
    // eslint-disable-next-line react/forbid-prop-types
    settings: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => {
    const player = _.get(state, 'stream.playerInstance');
    const settings = _.get(state, 'app.settings');
    return {
        player, settings,
    };
};

const dispatchStateToProps = (dispatch) => ({ dispatch });

export default connect(mapStateToProps, dispatchStateToProps)(Settings);
