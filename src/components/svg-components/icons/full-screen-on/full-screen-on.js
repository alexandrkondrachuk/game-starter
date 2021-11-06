import React from 'react';
import * as PropTypes from 'prop-types';
import * as cn from 'classnames';

import './full-screen-on.scss';

function FullScreenOn({ className, onClick }) {
    return (
        <svg
            viewBox="0 0 100 100"
            className={cn({ FullScreenOn: true, [className]: !!className })}
            onClick={onClick}
        >
            <svg
                xmlns="http://www.w3.org/2000/svg"
                y="0%"
                className="icon--1SFiO"
                viewBox="0 0 30 30"
            >
                <path d="M0 7h7V0h3v10H0V7zm23-7v7h7v3H20V0h3zM7 30v-7H0v-3h10v10H7zm23-7h-7v7h-3V20h10v3z" />
            </svg>
        </svg>
    );
}

FullScreenOn.defaultProps = {
    className: '',
};

FullScreenOn.propTypes = {
    className: PropTypes.string,
    onClick: PropTypes.func.isRequired,
};

export default FullScreenOn;
