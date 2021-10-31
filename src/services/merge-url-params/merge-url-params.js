import config from '../../config';
import * as _ from 'lodash';

const mergeUrlParams = (params) => {
    const defaultParams = _.get(config, 'server.params', {});
    const computedParams = { ...defaultParams, ...params };
    const queryString = Object.keys(computedParams).map((key) => `${encodeURIComponent(key)}=${encodeURIComponent(computedParams[key])}`).join('&');
    const url = `${_.get(config, 'server.url', '')}?${queryString}`;
    return url;
};

export default mergeUrlParams;