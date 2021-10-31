import React from 'react';
import * as _ from 'lodash';
import config from 'react-global-configuration';
import { useSelector } from 'react-redux';
import useOrientationChange from 'use-orientation-change';
import { Portrait, Landscape } from './sub-pages';
import Types from '../../../classes/Types';
import CustomRedirect from '../../../components/custom-redirect/custom-redirect';
import MobileFullscreenWrapper from '../../mobile-fullscreen-wrapper';

import './mobile.scss';

const Mobile = () => {
    const orientation = useOrientationChange();
    const readyState = useSelector((state) => (_.get(state, 'game.readyState', false)));
    const content = (orientation === Types.ORIENTATION__PORTRAIT) ? <Portrait/> : <Landscape/>;
    return (
        <div className="Mobile">
            <CustomRedirect url={config.get('apiURLs.home')} isRedirectStatus={!readyState}/>
            <MobileFullscreenWrapper>
                {content}
            </MobileFullscreenWrapper>
        </div>
    );
};

export default Mobile;