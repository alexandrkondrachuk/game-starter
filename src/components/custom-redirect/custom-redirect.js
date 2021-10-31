import React from 'react';
import * as PropTypes from 'prop-types';
import { Redirect } from 'react-router-dom';

const CustomRedirect = ({ url = '/', isRedirectStatus = false }) => {
    return (
        <>
            { isRedirectStatus && <Redirect to={url} /> }
        </>
    );
};

CustomRedirect.defaultProps = {
    isRedirectStatus: false,
};

CustomRedirect.propTypes = {
    url: PropTypes.string.isRequired,
    isRedirectStatus: PropTypes.bool,
};

export default CustomRedirect;