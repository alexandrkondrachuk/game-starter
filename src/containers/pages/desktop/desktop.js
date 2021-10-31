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
            <WebrtcPlayer/>
        </div>
    );
};

export default Desktop;