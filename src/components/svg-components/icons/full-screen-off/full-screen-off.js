import React from 'react';
import * as PropTypes from 'prop-types';
import * as cn from 'classnames';

import './full-screen-off.scss';

function FullScreenOff({ className, onClick }) {
    return (
        <svg
            viewBox="0 0 100 100"
            className={cn({ FullScreenOff: true, [className]: !!className })}
            onClick={onClick}
        >
            <svg
                xmlns="http://www.w3.org/2000/svg"
                y="0%"
                className="icon--1SFiO"
                viewBox="0 0 30 30"
            >
                <path d="M10 3H3v7H0V0h10v3zm17 7V3h-7V0h10v10h-3zM3 20v7h7v3H0V20h3zm17 7h7v-7h3v10H20v-3z" />
            </svg>
        </svg>
    );
}

FullScreenOff.defaultProps = {
    className: '',
};

FullScreenOff.propTypes = {
    className: PropTypes.string,
    onClick: PropTypes.func.isRequired,
};

export default FullScreenOff;
