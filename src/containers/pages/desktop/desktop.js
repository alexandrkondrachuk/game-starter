import React from 'react';
import WebrtcPlayer from '../../webrtc-player';
import CustomRedirect from '../../../components/custom-redirect/custom-redirect';
import config from 'react-global-configuration';
import { useSelector } from 'react-redux';
import Api from '../../../classes/Api';
import * as _ from 'lodash';

import './desktop.scss';

const Desktop = () => {
    console.error(Api.instance);
    const readyState = useSelector((state) => (_.get(state, 'game.readyState', false)));
    return (
        <div className="Desktop">
            <CustomRedirect url={config.get('apiURLs.home')} isRedirectStatus={!readyState} />
            <div className="Desktop__Container">
                <WebrtcPlayer/>
                <div className="Text">
                    <h1>Dear player</h1>
                    <br/>
                    <h2>The game is currently available on the mobile version.</h2>
                    <h2>Very soon you will be able to enjoy the game in the desktop version.</h2>
                    <h2>We are sure you will like it!</h2>
                </div>
            </div>
        </div>
    );
};

export default Desktop;