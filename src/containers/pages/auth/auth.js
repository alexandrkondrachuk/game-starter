import React from 'react';
import * as _ from 'lodash';
import { useSelector } from 'react-redux';
import CustomRedirect from '../../../components/custom-redirect/custom-redirect';
import config from 'react-global-configuration';
import './auth.scss';
import { Animated } from 'react-animated-css';
import CircleLoader from 'react-spinners/CircleLoader';

const Auth = () => {
    const readyState = useSelector((state) => (_.get(state, 'game.readyState', false)));
    return (
        <div className="Auth">
            <CustomRedirect url={config.get('apiURLs.home')} isRedirectStatus={readyState} />
            <div className="Auth__Container">              
                <Animated animationIn="fadeInDown" animationOut="zoomOutDown" animationInDelay={1500} animationInDuration={3000} animationOutDuration={2500} isVisible>
                    <h1>
                        <span className="primary">City</span>
                        {' '}
                        <span className="secondary">Roulette</span>
                        {' '}
                        <small>Live</small>
                    </h1>
                </Animated>
                <CircleLoader className="Auth__Loader" color="white" loading />
            </div>
        </div>
    );
};

export default Auth;