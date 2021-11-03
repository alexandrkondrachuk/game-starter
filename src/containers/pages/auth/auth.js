import React from 'react';
import * as _ from 'lodash';
import { useSelector } from 'react-redux';
import CustomRedirect from '../../../components/custom-redirect/custom-redirect';
import config from 'react-global-configuration';
import './auth.scss';

const Auth = () => {
    const readyState = useSelector((state) => (_.get(state, 'game.readyState', false)));
    return (
        <div className="Auth">
            <CustomRedirect url={config.get('apiURLs.home')} isRedirectStatus={readyState} />
            <h1>City Roulette</h1>
        </div>
    );
};

export default Auth;