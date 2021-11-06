import React from 'react';
import * as cn from 'classnames';
import * as PropTypes from 'prop-types';

import './close.scss';

function CloseIconSvg({ className, onClick }) {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            className={cn({ CloseIconSvg: true, [className]: !!className })}
            onClick={onClick}
            viewBox="0 0 30 30"
        >
            <path d="M16.895 15L24 7.895 22.105 6 15 13.105 7.895 6 6 7.895 13.105 15 6 22.105 7.895 24 15 16.895 22.105 24 24 22.105z" />
        </svg>
    );
}

CloseIconSvg.defaultProps = {
    className: '',
};

CloseIconSvg.propTypes = {
    className: PropTypes.string,
    onClick: PropTypes.func.isRequired,
};

export default CloseIconSvg;
