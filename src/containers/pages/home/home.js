import React from 'react';
import * as _ from 'lodash';
import config from 'react-global-configuration';
import { useSelector, useDispatch } from 'react-redux';
import {
    isDesktop,
    isMobile,
} from 'react-device-detect';
import CustomRedirect from '../../../components/custom-redirect/custom-redirect';
import { useLocation } from 'react-router-dom';
import appSlice from '../../../store/slices/app';
import Api from '../../../classes/Api';
import { mergeUrlParams } from '../../../services';
import './home.scss';

const Home = () => {
    const dispatch = useDispatch();
    const query = useSelector((state) => (_.get(state, 'app.query', null)));
    const readyState = useSelector((state) => (_.get(state, 'game.readyState', false)));
    const useQueryObject = () => {
        const queryObject = {};
        const query = new URLSearchParams(useLocation().search);
        // eslint-disable-next-line no-restricted-syntax
        for (const pair of query.entries()) {
            const [key, value] = pair;
            queryObject[key] = value;
        }
        return queryObject;
    };
    const queryObject = useQueryObject();

    React.useEffect(() => {
        if (!query && queryObject) dispatch(appSlice.setQuery(queryObject));
        const urlWithParams = mergeUrlParams(queryObject);
        const api = new Api({ url: urlWithParams });
        console.info('Connected', api);
    }, [dispatch, query, queryObject]);

    return (
        <div className="Home">
            <CustomRedirect url={config.get('apiURLs.auth')} isRedirectStatus={!readyState} />
            <CustomRedirect url={config.get('apiURLs.desktop')} isRedirectStatus={(isDesktop && readyState)} />
            <CustomRedirect url={config.get('apiURLs.mobile')} isRedirectStatus={(isMobile && readyState)} />
        </div>
    );
};

export default Home;